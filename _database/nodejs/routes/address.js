const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
//get theo id_adress để lấy tỉnh huyện xã 19
//get all
router.get('/shipping/:id', (req, res) => {
    let sqlFind = `SELECT address.id, address.chitiet as duong, devvn_xaphuongthitran.name AS xa , devvn_quanhuyen.name AS huyen, devvn_tinhthanhpho.name AS tinh from address INNER JOIN devvn_xaphuongthitran on address.xaid=devvn_xaphuongthitran.xaid INNER JOIN devvn_quanhuyen ON devvn_xaphuongthitran.maqh=devvn_quanhuyen.maqh 
    INNER JOIN devvn_tinhthanhpho ON devvn_quanhuyen.matp=devvn_tinhthanhpho.matp 
    WHERE address.id=${req.params.id}`
        connection.query(sqlFind,null, (err, address) => {
            if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
            if (err) throw err;
            let response = {
                message: "Load success",
                address: address[0]
            }
            res.status(200).json(response)

        })
})
//create address
router.post('/', (req, res, next) => {
    let sqlCreate = `INSERT INTO address SET ?`
    let data = {
        chitiet : req.body.chitiet,
        xaid : req.body.xaid
    }
    connection.query(sqlCreate, data, (err, result) => {
        if (err) throw err;
        let sqlFindOne = `SELECT * FROM address WHERE id = ${result.insertId}`
        connection.query(sqlFindOne,null, (err, address) => {
            if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
            if (err) throw err;
            res.status(200).json({
                message: 'Tạo thành công',
                address : address[0]
            })
        })
    })
});

//get all
router.get('/', (req, res) => {
    let sqlFind = `SELECT A.id,A.chitiet,X.xaid,X.name as xa_name,X.type as xa_type,H.maqh,H.name as huyen_name,H.type as huyen_type,TP.matp,TP.name as tp_name,TP.type as tp_type 
    FROM address A JOIN devvn_xaphuongthitran X on A.xaid=X.xaid 
    JOIN devvn_quanhuyen H on H.maqh = X.maqh 
    JOIN devvn_tinhthanhpho TP on TP.matp=H.matp
    `
        connection.query(sqlFind,null, (err, address) => {
            if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})

            if (err) throw err;
            let response = {
                count: address.length,
                address: address
            }
            res.status(200).json(response)

        })
})
//get one
router.get('/:address_id', (req, res) => {
    let sqlFind = `SELECT A.id,A.chitiet,X.xaid,X.name as xa_name,X.type as xa_type,H.maqh,H.name as huyen_name,H.type as huyen_type,TP.matp,TP.name as tp_name,TP.type as tp_type 
    FROM address A JOIN devvn_xaphuongthitran X on A.xaid=X.xaid 
    JOIN devvn_quanhuyen H on H.maqh = X.maqh 
    JOIN devvn_tinhthanhpho TP on TP.matp=H.matp
    WHERE A.id = ${req.params.address_id}
    `
        connection.query(sqlFind,null, (err, address) => {
            if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
            if (err) throw err;
            let response = {
                count: address.length,
                address: address[0]
            }
            res.status(200).json(response)

        })
})
router.put('/:address_id',(req,res)=>{
    let address_id = req.params.address_id
    let sqlUpdate =`UPDATE address 
        SET chitiet="${req.body.chitiet}",xaid = "${req.body.xaid}" 
        WHERE id = ${address_id}`
    let sqlFind=`SELECT * FROM address WHERE id=${address_id}`
    connection.query(sqlFind,null,(err,address)=>{
        if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err
        connection.query(sqlUpdate,null,(err,updated_res)=>{
            if(err) return err
            return res.status(200).json({
                message : 'Cập nhật địa chỉ thành công'
            })
        })
    })
    
})
router.delete('/:address_id',(req,res)=>{
    let address_id = req.params.address_id
    let sqlDelete =`DELETE FROM address WHERE id = ${address_id}`
    let sqlFind=`SELECT * FROM address WHERE id=${address_id}`
    connection.query(sqlFind,null,(err,address)=>{
        if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err
        connection.query(sqlDelete,null,(err,updated_res)=>{
            if(err) return err
            return res.status(200).json({
                message : 'Xóa địa chỉ thành công'
            })
        })
    })
    
})





module.exports = router;