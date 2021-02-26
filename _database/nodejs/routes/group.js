const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')

router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    let sqlFind = `SELECT group_diendan.id,group_diendan.htx_id,group_diendan.name,group_diendan.avatar,group_diendan.avatar,group_diendan.cover_image,group_diendan.created_at,htx.name as htx_name FROM group_diendan
INNER JOIN htx on htx.id = group_diendan.htx_id
WHERE group_diendan.isDeleted = true
ORDER BY id DESC LIMIT ${limit} OFFSET ${(page - 1) * limit}`;
    connection.query(sqlFind, null, (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.length === 0) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        }
        res.status(200).json({
            count : result.length,
            groups : result
        })
    })
});

router.post('/', (req, res) => {
    let sqlInsert = 'INSERT INTO group_diendan SET ?'
    let data = {
        htx_id: req.body.htx_id,
        name: req.body.name,
        avatar: req.body.avatar,
        cover_image: req.body.cover_image,
    }
    let create_group = () => {
        return new Promise((resolve, reject) => {
            connection.query(sqlInsert, data, (err, result) => {
                if (err) return reject(err)
                resolve(result.insertId)
            })
        })
    }
    let FindGroup = (id) => {
        return new Promise((resolve, reject) => {
            let sqlFind = `SELECT * FROM group_diendan where id = ${id}`
            connection.query(sqlFind, (err, result) => {
                if (err) return reject(err)
                resolve(result[0])
            })
        })
    }

    create_group().then(result => {
        FindGroup(result).then(group => {
            res.status(200).json({
                group
            });
        })
    }).catch(err => {
        if (err.errno === 1048) {
            return res.status(400).json({
                err
            })
        }
        return res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    let {
        id
    } = req.params
    let sqlFind = `SELECT * FROM group_diendan where id = ${id}  `
    connection.query(sqlFind, null, (err, group) => {
        if (group.length === 0) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        }
        if (err) return res.status(500).json(err)
        res.status(200).json({
            group: group[0]
        })
    })
})
// // get nhung group cua user da tham gia
// router.get('/user/:user_id', (req, res) => {
// })

router.put('/:id', (req, res) => {
    let {
        id
    } = req.params
    let data = {
        htx_id: req.body.htx_id,
        name: req.body.name,
        avatar: req.body.avatar,
        cover_image: req.body.cover_image,
    }
    let sqlUpdate = `UPDATE group_diendan set ? where id = ?`
    connection.query(sqlUpdate, [data, id], (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        res.status(200).json({
            message: 'update success',
            success: true
        })
    })
})

router.delete('/:id',(req,res)=>{
      let {
        id
    } = req.params
    let data = {
        isDeleted: false
    }
    let sqlUpdate = `UPDATE group_diendan set ? where id = ?`
    connection.query(sqlUpdate, [data, id], (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        res.status(200).json({
            message: 'update success',
            success: true
        })
    })
})

module.exports = router;