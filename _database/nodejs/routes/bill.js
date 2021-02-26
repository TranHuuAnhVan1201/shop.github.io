const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
//tạo bill status ban đầu là chưa thanh toán
router.post('/', (req, res) => {
    let sqlInsert = `INSERT INTO bill SET ?`;
    let data = {
        user_id: req.body.user_id,
        total_price: req.body.total_price,
        shipping_address_id: req.body.shipping_address_id
    }
    connection.query(sqlInsert, data, (err, result) => {
        if (err) throw err;
        let sqlFindOne = `SELECT * FROM bill WHERE id = ${result.insertId}`
        connection.query(sqlFindOne, null, (err, bill) => {
            if (bill.length < 1) return res.status(404).json({
                message: 'NOT FOUND'
            })
            if (err) throw err;
            let sqlFindIdProduct = `SELECT product.id,product.name,product.user_id FROM product
                                   INNER JOIN cart_item on cart_item.product_id = product.id
                                   WHERE cart_item.in_cart=1 AND product.user_id=${bill[0].user_id}`;
            connection.query(sqlFindIdProduct, (err, product) => {
                res.status(200).json({
                    message: 'Tạo thành công',
                    bill: bill[0],
                    id_product: product.map(value => {
                        return {
                            id: value.id,
                            name: value.name,
                            user_id: value.user_id,
                            bill_id: bill[0].id
                        }
                    })
                })



            })



        })
    })
})
//history
router.get(`/history/:id_customer`, (req, res) => {
    let sqlFind = `SELECT bill.id,bill.total_price,bill.status, address.chitiet as duong, devvn_xaphuongthitran.name AS xa , devvn_quanhuyen.name AS huyen, devvn_tinhthanhpho.name AS tinh,cart.user_id
        FROM bill 
        INNER JOIN shipping_address on shipping_address.id=bill.shipping_address_id
        INNER JOIN address on address.id = shipping_address.address_id
        INNER JOIN devvn_xaphuongthitran ON address.xaid = devvn_xaphuongthitran.xaid
        INNER JOIN devvn_quanhuyen ON devvn_xaphuongthitran.maqh=devvn_quanhuyen.maqh 
        INNER JOIN devvn_tinhthanhpho ON devvn_quanhuyen.matp=devvn_tinhthanhpho.matp 
        INNER JOIN cart_item ON cart_item.bill_id = bill.id
        INNER JOIN cart on cart.id = cart_item.cart_id
        WHERE bill.status = "đã thanh toán" AND cart.user_id = ${req.params.id_customer}
        GROUP BY bill.id`
    connection.query(sqlFind, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (result.length < 1) {
            return res.status(404).json({
                message: "Not Found"
            });


        } else {
            let data = {
                message: "success",
                result: result

            }
            return (res.status(200).json(data));


        }



    })



})
router.post('/status',(req,res)=>{
    let api =    `SELECT b.*,users.email,users.phone,users.avatar from bill b
INNER JOIN users on users.id = b.user_id WHERE b.status LIKE '%${req.body.status}%'AND b.Withdrawal = 1`;
    connection.query(api, null, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result
        })
    })
})
//get all
router.get('/', (req, res) => {
    let sqlFindAll = `SELECT b.*,users.email,users.phone,users.avatar from bill b
INNER JOIN users on users.id = b.user_id`
    connection.query(sqlFindAll, null, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result
        })
    })
})
//get 1 
router.get('/:id_bill', (req, res) => {
    let {
        id_bill
    } = req.params;
    let sqlFindOne = `SELECT * FROM bill where id = ${id_bill}`
    connection.query(sqlFindOne, null, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result[0]
        })
    })
})

//delete thì cập nhật thành đã hủy
router.put('/:id_bill', (req, res) => {
    let {
        id_bill
    } = req.params
    let sqlFind = `SELECT * from bill WHERE id=${id_bill}`;
    connection.query(sqlFind, null, (err, bill) => {
        if (bill.length < 0)
            return res.status(404).json({
                message: "NOT FOUND"
            });
        if (err) throw err;
        let bill_data = {
            status: req.body.status,
        }
        let sqlUpdate = `UPDATE bill SET ? WHERE id= ?`;
        connection.query(sqlUpdate, [bill_data, id_bill], (err, bill) => {
            if (err) throw err;
            res.status(200).json({
                message: "Cập nhật thành công",
            });
        })
    })
})

module.exports = router;