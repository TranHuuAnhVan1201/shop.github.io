const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
//tìm nhiều contact của 1 user
router.get('/user/:user_id', (req, res) => {
    let {user_id} = req.params
    let sqlFind = `
    SELECT C.id,C.state,C.created_at,
    C.user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.address,
    C.contact_id,US.phone as contact_phone,US.email as contact_email,US.first_name as contact_first_name,US.last_name as contact_last_name,US.avatar as contact_avatar,US.address as contact_address
    FROM contacts C 
    JOIN users U ON U.id=C.user_id 
    JOIN users US on US.id=C.contact_id 
    WHERE user_id=${user_id} OR contact_id=${user_id}
    `
    connection.query(sqlFind,(err,result)=>{
        if(err) return res.status(500).json({
            err
        })
        if(result.length < 1){
            return res.status(404).json({message : 'NOT FOUND'})
        }

        let response = {
            count : result.length,
            contact : result.map(user =>{
                if(user.user_id == user_id){
                    return {
                        id : user.id,
                        state : user.state,
                        created_at : user.created_at,
                        user_id : user.contact_id,
                        phone : user.contact_phone,
                        email : user.contact_email,
                        first_name : user.contact_first_name,
                        last_name : user.contact_last_name,
                        avatar : user.contact_avatar,
                        address : user.contact_address,
                    }
                }else {
                    return {
                        id : user.id,
                        state : user.state,
                        created_at : user.created_at,
                        user_id : user.user_id,
                        phone : user.phone,
                        email : user.email,
                        first_name : user.first_name,
                        last_name : user.last_name,
                        avatar : user.avatar,
                        address : user.address
                    }
                }
            })
        }
        res.status(200).json(response)
    })
})
//thêm contact nhưng status là false nghĩa là chưa đồng ý
router.post('/', (req, res) => {
    let {user_id,contact_id,state} = req.body
    let sqlAdd = `INSERT INTO contacts SET ?`
    let data = {
        user_id : user_id,
        contact_id : contact_id,
    }
    connection.query(sqlAdd,data,(err,result)=>{
        if(err) return res.status(500).json({err})
        res.status(200).json({
            message : 'Thêm contact thành công',
            result
        })
    })
})
//lấy tất cả contact
router.get('/',(req,res)=>{
    let sqlFindAll = `
    SELECT C.id,C.state,C.created_at,
    C.user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.address,
    C.contact_id,US.phone as contact_phone,US.email as contact_email,US.first_name as contact_first_name,
    US.last_name as contact_last_name,US.avatar as contact_avatar,US.address as contact_address
    FROM contacts C 
    JOIN users U ON U.id=C.user_id 
    JOIN users US on US.id=C.contact_id`
    console.log(sqlFindAll)
    connection.query(sqlFindAll,(err,result)=>{
        if(err) return res.status(500).json({
            err
        })
        if(result.length < 1){
            return res.status(404).json({message : 'NOT FOUND'})
        }
        let response = {
            count : result.length,
            contact : result.map(user =>{
                    return {
                        id : user.id,
                        state : user.state,
                        created_at : user.created_at,
                        user_id : user.user_id,
                        phone : user.phone,
                        email : user.email,
                        first_name : user.first_name,
                        last_name : user.last_name,
                        avatar : user.avatar,
                        address : user.address,
                        contact_id : user.contact_id,
                        contact_phone : user.contact_phone,
                        contact_email : user.contact_email,
                        contact_first_name : user.contact_first_name,
                        contact_last_name : user.contact_last_name,
                        contact_avatar : user.contact_avatar,
                        contact_address : user.contact_address,
                    }
                
            })
        }
        res.status(200).json(response)

    })
})
//lấy 1 contact
router.get('/:contact_id',(req,res)=>{
    let {contact_id} = req.params
    let sqlFindOne = `
    SELECT C.id,C.state,C.created_at,
    C.user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.address,
    C.contact_id,US.phone as contact_phone,US.email as contact_email,US.first_name as contact_first_name,US.last_name as contact_last_name,US.avatar as contact_avatar,US.address as contact_address
    FROM contacts C 
    JOIN users U ON U.id=C.user_id 
    JOIN users US on US.id=C.contact_id
    WHERE C.id = ${contact_id}`
    connection.query(sqlFindOne,(err,result)=>{
        if(err) return res.status(500).json({
            err
        })
        if(result.length < 1){
            return res.status(404).json({message : 'NOT FOUND'})
        }
        let response = {
            count : result.length,
            contact : result.map(user =>{
                    return {
                        id : user.id,
                        state : user.state,
                        created_at : user.created_at,
                        user_id : user.user_id,
                        phone : user.phone,
                        email : user.email,
                        first_name : user.first_name,
                        last_name : user.last_name,
                        avatar : user.avatar,
                        address : user.address,
                        contact_id : user.contact_id,
                        contact_phone : user.contact_phone,
                        contact_email : user.contact_email,
                        contact_first_name : user.contact_first_name,
                        contact_last_name : user.contact_last_name,
                        contact_avatar : user.contact_avatar,
                        contact_address : user.contact_address,
                    }
                
            })
        }
        res.status(200).json(response)

    })
})
//xóa contact
router.delete('/:contact_id',(req,res)=>{
    let {contact_id} = req.params
    let sqlFindAll = `
    DELETE FROM contacts
    WHERE id = ${contact_id}`
    connection.query(sqlFindAll,(err,result)=>{
        if(err) return res.status(500).json({
            err
        })
        res.status(200).json({
            message :  'Xóa Contact thành công',
            result
        })

    })
})
//cập nhật status để thêm bạn
router.put('/accept_contact/:idContact',(req,res)=>{
    let {idContact} = req.params
    let {contact_id} = req.body
    let sqlFindOne = `
    SELECT C.id,C.state,C.created_at,
    C.user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.address,
    C.contact_id,US.phone as contact_phone,US.email as contact_email,US.first_name as contact_first_name,US.last_name as contact_last_name,US.avatar as contact_avatar,US.address as contact_address
    FROM contacts C 
    JOIN users U ON U.id=C.user_id 
    JOIN users US on US.id=C.contact_id
    WHERE C.id = ${idContact}`
    connection.query(sqlFindOne,(err,contact)=>{
        if(err) return res.status(500).json({err})
        if(contact.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if(contact[0].contact_id == contact_id){
            let sqlUpdate = `UPDATE contacts SET state = 'accept' WHERE contacts.id = ${idContact}`;
            connection.query(sqlUpdate,(err)=>{
                if(err) return res.status(500).json({err})
                res.status(200).json({
                    message : 'thêm contact thành công',
                    contact : contact.map(user =>{
                            return {
                                id : user.id,
                                created_at : user.created_at,
                                user_id : user.user_id,
                                phone : user.phone,
                                email : user.email,
                                first_name : user.first_name,
                                last_name : user.last_name,
                                avatar : user.avatar,
                                address : user.address,
                                contact_id : user.contact_id,
                                contact_phone : user.contact_phone,
                                contact_email : user.contact_email,
                                contact_first_name : user.contact_first_name,
                                contact_last_name : user.contact_last_name,
                                contact_avatar : user.contact_avatar,
                                contact_address : user.contact_address,
                            }
                    })
                })
            })
        }
    })
})



module.exports = router;