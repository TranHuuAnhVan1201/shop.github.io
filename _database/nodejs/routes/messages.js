const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
router.get('/convesation/:convesation_id', (req, res) => {
    const page = parseInt(req.query.page)  || 1;
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = (page - 1) * limit
    const endIndex = page * limit    
    let sqlFindAll = `SELECT M.*,U.id as sender_id,U.phone,U.email,U.first_name,U.last_name,U.avatar 
    FROM messages M JOIN users U on M.sender_id = U.id  
    WHERE conversation_id = "${req.params.convesation_id}" 
    ORDER BY M.created_at DESC;`
    connection.query(sqlFindAll, null, (err, messages) => {
        if (err) throw err;
        let result = messages.slice(startIndex,endIndex)
        result.sort((a, b) => a.created_at - b.created_at)
        let response = {
            total: messages.length,
            messages: result.map(message => {
                return {
                    id: message.id,
                    conversation_id: message.conversation_id,
                    message_type: message.message_type,
                    message: message.message,
                    message_type: message.message_type,
                    recieverHasRead : message.recieverHasRead,
                    created_at: message.created_at,
                    deleted_at: message.deleted_at,
                    sender: {
                        id: message.sender_id,
                        phone: message.phone,
                        email: message.email,
                        first_name: message.first_name,
                        last_name: message.last_name,
                        avatar: message.avatar
                    }

                }
            })
        }
        res.status(200).json(response)
    })
})

router.post('/', (req, res) => {
    let SqlCreateMessage = 'INSERT INTO messages SET ?'
    let message = {
        conversation_id: req.body.conversation_id,
        sender_id: req.body.sender_id,
        message_type: req.body.message_type,
        message: req.body.message
    }
    console.log(message)
    connection.query(SqlCreateMessage, message, (err, result) => {
        if (err) throw err
        let sqlFindSender = `SELECT M.*,U.id as sender_id,U.phone,U.email,U.first_name,U.last_name,U.avatar FROM messages M JOIN users U on M.sender_id = U.id  WHERE M.id = "${result.insertId}"`
        connection.query(sqlFindSender, null, (err, message) => {
            if (err) throw err
            res.status(200).json({
                message: 'Them thanh cong',
                messageChat: {
                    id: message[0].id,
                    conversation_id: message[0].conversation_id,
                    message_type: message[0].message_type,
                    message: message[0].message,
                    message_type: message[0].message_type,
                    created_at: message[0].created_at,
                    deleted_at: message[0].deleted_at,
                    recieverHasRead: message[0].recieverHasRead,
                    
                    sender: {
                        id: message[0].sender_id,
                        phone: message[0].phone,
                        email: message[0].email,
                        first_name: message[0].first_name,
                        last_name: message[0].last_name,
                        avatar: message[0].avatar
                    }
                }

            })

        })
    })
})

router.put('/UpdateMessageHasRead',(req,res)=>{
    let {sender_id,conversation_id} = req.body
    let updateSql = `Update messages set recieverHasRead = true 
    Where sender_id = ${sender_id} 
    AND conversation_id = ${conversation_id} 
    AND recieverHasRead = false `
    connection.query(updateSql,(err,result) => {
        if(err) return res.status(500).json({err})
        res.status(200).json({
            message : 'cập nhật thành công',
            success : true
        })
    })
})
module.exports = router;