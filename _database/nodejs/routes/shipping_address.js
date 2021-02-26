const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')

//create address
router.post('/', (req, res) => {
    let sqlCreate = `INSERT INTO shipping_address SET ?`
    let sqlSelect = `SELECT * FROM shipping_address 
                    WHERE user_id = ${req.body.user_id}`
    connection.query(sqlSelect,null,(err,shipAdd) => {
        if(err) throw err
        let state = false;
        if(shipAdd.length < 1){
            state = true;
        }
        let data = {
            user_id : req.body.user_id,
            address_id : req.body.address_id,
            name : req.body.name,
            phone : req.body.phone,
            state : state
        }
        connection.query(sqlCreate, data, (err, result) => {
            if (err) throw err;
            let sqlFindOne = `SELECT * FROM shipping_address WHERE id = ${result.insertId}`
            connection.query(sqlFindOne,null, (err, shipAdd) => {
                if(shipAdd.length < 1) return res.status(404).json({message : 'NOT FOUND'})
                if (err) throw err;
                res.status(200).json({
                    message: 'Tạo thành công',
                    shipAddr : shipAdd[0]
                })
            })
        })
    })
});
router.get('/detail/:id',(req, res)=>{
  let sqlFind = `SELECT shipping_address.name,shipping_address.phone,shipping_address.address_id,
address.chitiet,devvn_xaphuongthitran.name as phuong,devvn_quanhuyen.name as quan,devvn_tinhthanhpho.name as thanhpho
FROM shipping_address
INNER JOIN address ON shipping_address.address_id = address.id
INNER JOIN devvn_xaphuongthitran on address.xaid = devvn_xaphuongthitran.xaid
INNER JOIN devvn_quanhuyen on devvn_xaphuongthitran.maqh = devvn_quanhuyen.maqh
INNER JOIN devvn_tinhthanhpho on devvn_quanhuyen.matp = devvn_tinhthanhpho.matp
WHERE shipping_address.id =${req.params.id}`;
connection.query(sqlFind,null,(err,result)=>{
        if(result.length < 0) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err;
        let response = {
            message: "Load Success",
            shipping: result[0]
        }
        res.status(200).json(response)
})

});
//get all
router.get('/user/:user_id', (req, res) => {
    let sqlFind = `SELECT SA.*,A.chitiet,X.xaid,X.name as xa_name,X.type as xa_type,H.maqh,H.name as huyen_name,H.type as huyen_type,TP.matp,TP.name as tp_name,TP.type as tp_type
    FROM shipping_address SA 
    JOIN address A ON SA.address_id=A.id 
    JOIN devvn_xaphuongthitran X on A.xaid=X.xaid 
    JOIN devvn_quanhuyen H on H.maqh = X.maqh 
    JOIN devvn_tinhthanhpho TP on TP.matp=H.matp
    WHERE user_id = ${req.params.user_id}`
    connection.query(sqlFind,null,(err,result)=>{
        if(result.length < 0) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err;
        let response = {
            count: result.length,
            shipping_addr: result
        }
        res.status(200).json(response)
    })

})

router.put('/:ship_addr_id',(req,res)=>{
    let ship_addr_id = req.params.ship_addr_id;
    
    let sqlFind=`SELECT * FROM shipping_address WHERE id=${ship_addr_id}`
    connection.query(sqlFind,null,(err,address)=>{
        let state = address[0].state
        let sqlUpdate =`UPDATE shipping_address 
        SET 
        address_id="${req.body.address_id}",
        name = "${req.body.name}" ,
        phone = "${req.body.phone}",
        state = "${state}" 
        WHERE id = ${ship_addr_id}`
        if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err
        connection.query(sqlUpdate,null,(err)=>{
            if(err) throw err

            return res.status(200).json({
                message : 'Cập nhật địa chỉ giao hàng thành công'
            })
        })
    })
    
})
router.put('/state/:ship_addr_id',(req,res)=>{
    let ship_addr_id = req.params.ship_addr_id;
    let sqlFind=`SELECT * FROM shipping_address WHERE id=${ship_addr_id}`
    connection.query(sqlFind,null,(err,address)=>{
        console.log(address)
        if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err
        let state = true
        let sqlUpdate =`UPDATE shipping_address 
        SET 
        state = ${state}
        WHERE id = ${ship_addr_id}`
        let sqlUpdateDefautState = `UPDATE shipping_address SET state = ${false} WHERE user_id = ${address[0].user_id} AND state = 1`
        connection.query(sqlUpdateDefautState,null,err=>{
            if(err) throw err
            connection.query(sqlUpdate,null,(err)=>{
                if(err) throw err
                return res.status(200).json({
                    message : 'Cập nhật địa chỉ giao hàng thành công'
                })
            })
        })  
    })
})

router.delete('/:ship_addr_id',(req,res)=>{
    let {ship_addr_id} = req.params
    let sqlDelete =`DELETE FROM shipping_address WHERE id = ${ship_addr_id}`
    let sqlFind=`SELECT * FROM shipping_address WHERE id=${ship_addr_id}`
    connection.query(sqlFind,null,(err,address)=>{
        if(address.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(err) throw err
        connection.query(sqlDelete,null,(err)=>{
            if(err) return err
            return res.status(200).json({
                message : 'Xóa địa chỉ thành công'
            })
        })
    })
    
})





module.exports = router;