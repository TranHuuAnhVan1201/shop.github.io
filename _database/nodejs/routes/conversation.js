const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
router.post('/', (req, res, next) => {
    let sendFirstMessage = (message, conversation) => {
        return new Promise((resolve, reject) => {
            console.log(conversation[0].id)
            let SqlCreateMessage = 'INSERT INTO messages SET ?'
            let message_data = {
                conversation_id: conversation[0].id,
                sender_id: conversation[0].creator.id,
                message_type: message.message_type,
                message: message.message
            }
            connection.query(SqlCreateMessage, message_data, (err, result) => {
                if (err) return reject(err)
                resolve(conversation)
            })
        })
    }
    let addConversation = () => {
        return new Promise((resolve, reject) => {
            let sqlCreateConversation = `INSERT INTO conversation SET ?`
            let data = {
                title: req.body.title || null,
                creator_id: req.body.creator_id,
            }
            connection.query(sqlCreateConversation, data, (err, result) => {
                if (err) return reject(err)
                let conversation_id = result.insertId
                let sqlFindAll = `SELECT conversation.*,users.id as user_id,users.phone,users.email,users.first_name,users.last_name,users.role 
                FROM conversation 
                JOIN users ON  conversation.creator_id = users.id 
                where conversation.id = "${conversation_id}"`
                connection.query(sqlFindAll, null, (err, conversations) => {
                    if (err) return reject(err);
                    let response = {
                        count: conversations.length,
                        conversation: conversations.map(conversation => {
                            return {
                                id: conversation.id,
                                title: conversation.title,
                                created_at: conversation.created_at,
                                updated_at: conversation.updated_at,
                                creator: {
                                    id: conversation.creator_id,
                                    phone: conversation.phone,
                                    email: conversation.email,
                                    first_name: conversation.first_name,
                                    last_name: conversation.last_name,
                                    role: conversation.role,
                                }
                            }
                        })
                    }
                    resolve(response)
                })
            })
        })
    }
    let addParticipants = (UserArr, conversation) => {
        return new Promise((resolve, reject) => {
            let sqlInsert = `INSERT INTO participants (conversation_id,users_id,type) VALUES ?`
            let data = UserArr.map(user => {
                return ([
                    conversation.conversation[0].id,
                    user.id,
                    user.type || 'single'
                ])
            })
            connection.query(sqlInsert, [data], (err) => {
                if (err) return reject(err)
                resolve(conversation)
            })
        })
    }
    let userArr = req.body.userArr
    let message = req.body.message
    addConversation().then(result => {
        addParticipants(userArr, result).then((response) => {
            sendFirstMessage(message, response.conversation).then((responeFinal) => {
                res.status(200).json(responeFinal)

            }).catch(err => {
                res.status(500).json({ err: err + " " })
            })
        }).catch(err => {
            res.status(500).json({ err: err + " " })
        })
    }).catch(err => {
        console.log(err + ' ')

    })
});
router.get('/', (req, res) => {
    let sqlFindAll = `SELECT conversation.*,users.id as user_id,users.phone,users.email,users.first_name,users.last_name,users.role FROM conversation JOIN users ON  conversation.creator_id = users.id`
    connection.query(sqlFindAll, null, (err, conversations) => {
        if (err) throw err;
        let response = {
            count: conversations.length,
            conversation: conversations.map(conversation => {
                return {
                    id: conversation.id,
                    title: conversation.title,
                    created_at: conversation.created_at,
                    updated_at: conversation.updated_at,
                    creator: {
                        id: conversation.creator_id,
                        phone: conversation.phone,
                        email: conversation.email,
                        first_name: conversation.first_name,
                        last_name: conversation.last_name,
                        role: conversation.role,
                    }
                }
            })
        }
        res.status(200).json(response)
    })
})
router.get('/:conversation_id', (req, res) => {
    let conversation_id = req.params.conversation_id
    let sqlFindAll = `SELECT conversation.*,users.id as user_id,users.phone,users.email,users.first_name,users.last_name,users.role FROM conversation JOIN users ON  conversation.creator_id = users.id where conversation.id = "${conversation_id}"`
    connection.query(sqlFindAll, null, (err, conversations) => {
        if (err) throw err;
        let response = {
            count: conversations.length,
            conversation: conversations.map(conversation => {
                return {
                    id: conversation.id,
                    title: conversation.title,
                    created_at: conversation.created_at,
                    updated_at: conversation.updated_at,
                    creator: {
                        id: conversation.creator_id,
                        phone: conversation.phone,
                        email: conversation.email,
                        first_name: conversation.first_name,
                        last_name: conversation.last_name,
                        role: conversation.role,
                    }
                }
            })
        }
        res.status(200).json(response)
    })
})
router.get('/user/:user_id', (req, res) => {
    let GetConversation = (iduser) => {
        return new Promise((resolve, reject) => {
            let sqlFindAll = `SELECT C.*, U.id as user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.is_blocked 
            FROM participants P 
            JOIN conversation C ON C.id = P.conversation_id 
            JOIN users U ON P.users_id = U.id 
            where P.users_id = "${iduser}"`
            connection.query(sqlFindAll, null, (err, conversations) => {
                if (err) throw err;
                let response = {
                    conversation: conversations.map(conversation => {
                        return {
                            id: conversation.id,
                            title: conversation.title,
                            created_at: conversation.created_at,
                            updated_at: conversation.updated_at,
                            creator: conversation.creator_id,
                        }
                    })
                }
                resolve(response.conversation)
            })
        })
    }

    let GetUser = (result) => {
        return new Promise((resolve, reject) => {
            var a = Array()
            result.map(item => {
                let sqlGetUserInRoom = `SELECT U.* FROM participants P 
                    JOIN conversation C ON C.id = P.conversation_id 
                    JOIN users U ON P.users_id = U.id 
                    where P.conversation_id=${item.id}`
                connection.query(sqlGetUserInRoom, null, (err, users) => {
                    if (err) throw err
                    let object = {
                        conversationInfor: item, users
                    }
                    a.push(object);
                    if (a.length === result.length) {
                        resolve(a)
                    }
                })
            })
        })
    }
    let getLastestMessage = (conversation) => {
        return new Promise((resolve, reject) => {
            var a = Array()
            conversation.map(item => {
                let sqlGetLastestMessage = `SELECT * FROM messages WHERE conversation_id = ${item.conversationInfor.id} AND created_at = (SELECT MAX(created_at) FROM messages WHERE conversation_id = ${item.conversationInfor.id})`
                connection.query(sqlGetLastestMessage, null, (err, result) => {
                    if (err) throw err
                    let object = {
                        conversation: item, lastestMessage: result
                    }
                    a.push(object)
                    if (a.length === conversation.length) {
                        resolve(a)
                    }
                })
            })
        })
    }
    let user_id = req.params.user_id
    GetConversation(user_id).then(result => {
        GetUser(result).then(response => {
            getLastestMessage(response).then(lastResponse => {
                let a = lastResponse.filter(item => {
                    return item.lastestMessage.length > 0
                }).sort((a, b) => b.lastestMessage[0].created_at - a.lastestMessage[0].created_at)
                res.status(200).json(a)
            })
        })
    })
})
router.get('/detail/:conversation_id', (req, res) => {
    let GetConversation = (conversation_id) => {
        return new Promise((resolve, reject) => {
            let conversation_id = req.params.conversation_id
            let sqlFindAll = `SELECT conversation.*,users.id as user_id,users.phone,users.email,users.first_name,users.last_name,users.role FROM conversation JOIN users ON  conversation.creator_id = users.id where conversation.id = "${conversation_id}"`
            connection.query(sqlFindAll, null, (err, conversations) => {
                if (err) throw err;
                let response = {
                    conversation: conversations.map(conversation => {
                        return {
                            id: conversation.id,
                            title: conversation.title,
                            created_at: conversation.created_at,
                            updated_at: conversation.updated_at,
                            creator: {
                                id: conversation.creator_id,
                                phone: conversation.phone,
                                email: conversation.email,
                                first_name: conversation.first_name,
                                last_name: conversation.last_name,
                                role: conversation.role,
                            }
                        }
                    })
                }
                resolve(response.conversation[0])
            })
        })
    }

    let GetUser = (result) => {
        return new Promise((resolve, reject) => {
                let sqlGetUserInRoom = `SELECT U.* FROM participants P 
                    JOIN conversation C ON C.id = P.conversation_id 
                    JOIN users U ON P.users_id = U.id 
                    where P.conversation_id=${result.id}`
                connection.query(sqlGetUserInRoom, null, (err, users) => {
                    if (err) throw err
                    let object = {
                        conversationInfor: result, users
                    }
                        resolve(object)
                
                })
            })
    }
    let getLastestMessage = (conversation) => {
        return new Promise((resolve, reject) => {
                let sqlGetLastestMessage = `SELECT * FROM messages WHERE conversation_id = ${conversation.conversationInfor.id} AND created_at = (SELECT MAX(created_at) FROM messages WHERE conversation_id = ${conversation.conversationInfor.id})`
                connection.query(sqlGetLastestMessage, null, (err, result) => {
                    if (err) throw err
                    let object = {
                        conversation: conversation, lastestMessage: result
                    }
                    resolve(object)
            })
        })
    }
    let conversation_id = req.params.conversation_id
    GetConversation(conversation_id).then(result => {
        console.log(result)
        GetUser(result).then(response => {
            
            getLastestMessage(response).then(lastResponse => {
                res.status(200).json(lastResponse)
            })
        })
    })
})
module.exports = router;