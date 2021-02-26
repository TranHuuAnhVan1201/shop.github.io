const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/', (req, res) => {
    let sqlFind = 'SELECT * FROM htx where htx.isDeleted = 1';
    connection.query(sqlFind, null, (err, htx) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (htx.length < 0) return res.status(404).json({
            message: 'NOT FOUND'
        });

        let response = {
            message: 'load sucessful',
            htx: htx
        }
        return res.status(200).json(response)
    })
});
//ngan
router.post('/', (req, res) => {
    let sqlCreate = `INSERT INTO htx SET ?`
    let data = {
        name: req.body.name,
        address_id: req.body.address_id,
        avatar: req.body.avatar
    }

    connection.query(sqlCreate, [data], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        let sqlFindOne = `SELECT * FROM htx WHERE id = ${result.insertId}`
        connection.query(sqlFindOne, null, (err, htx) => {
            if (err) {
                return res.status(500).json({
                    message: err
                })
            }
            if (htx.length < 1) return res.status(404).json({
                message: 'NOT FOUND'
            })
            return res.status(200).json({
                message: 'Thêm mới thành công',
                htx: htx[0]
            })
        })
    })
});
router.get('/all', (req, res) => {
    let sqlFind = `SELECT H.*,A.chitiet,A.xaid,I.url  
        FROM htx H 
        JOIN image I on H.avatar = I.id 
        JOIN address A on H.address_id=A.id where H.isDeleted = 1`
    connection.query(sqlFind, null, (err, htx) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (htx.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })



        const response = {
            count: htx.length,
            htx: htx.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    avatar: {
                        id: user.avatar,
                        url: user.url
                    },
                    address: {
                        id: user.address,
                        chitiet: user.chitiet,
                        xaid: user.xaid
                    },
                    create_at: user.create_at,
                    update_at: user.update_at,
                    request: {
                        type: 'GET',
                        URL: 'http://localhost:3000/htx/' + htx.id
                    }
                }

            })
        }
        res.status(200).json(response)

    })
})
router.get('/one/:htx_id', (req, res) => {
    let {
        htx_id
    } = req.params
    let sqlFind = `
    SELECT H.*,A.chitiet,A.xaid,I.url  
    FROM htx H 
    JOIN image I on H.avatar = I.id 
    JOIN address A on H.address_id=A.id WHERE H.id = ${htx_id}`
    connection.query(sqlFind, null, (err, htx) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (htx.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        const response = {
            count: htx.length,
            htx: {
                id: htx[0].id,
                name: htx[0].name,
                avatar: {
                    id: htx[0].avatar,
                    url: htx[0].url
                },
                address: {
                    id: htx[0].address_id,
                    chitiet: htx[0].chitiet,
                    xaid: htx[0].xaid
                },
                created_at: htx[0].created_at,
                updated_at: htx[0].updated_at,
                request: {
                    type: 'GET',
                    URL: 'http://localhost:3000/htx/' + htx[0].id
                }
            }
        }
       return res.status(200).json(response)

    })
})

router.put('/update_htx/:htx_id', (req, res) => {

    let {
        htx_id
    } = req.params;
    let {
        name,
        avatar,
        address_id
    } = req.body
    let update = {
        name: name,
        avatar: avatar,
        address_id: address_id,
    }
    let sqlUpdate = `UPDATE htx SET ? WHERE id = ?`;
    connection.query(sqlUpdate, [update, htx_id], (err, result) => {
        if (err) throw err;
        let data1 = {
            message: "cập nhật thành công"
        }
        res.status(200).json(data1);
    })
})
router.put('/delete/:htx_id', (req, res) => {
    let data = {
        isDeleted: 0
    }
    let sqlUpdate = `UPDATE htx 
        SET  ? WHERE id = ${req.params.htx_id}`;
    connection.query(sqlUpdate, [data], (err, result) => {
        if (err) throw err;
        let data1 = {
            message: "xóa thành công"
        }
        res.status(200).json(data1);
    })

})

router.delete('/:htx_id', (req, res) => {
    let htx_id = req.params.htx_id
    let sqlDelete = `DELETE FROM address WHERE id = ${htx_id}`
    let sqlFind = `SELECT * FROM address WHERE id=${htx_id}`
    connection.query(sqlFind, null, (err, htx) => {
        if (htx.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (err) throw err
        connection.query(sqlDelete, null, (err) => {
            if (err) return err
            return res.status(200).json({
                message: 'Xóa thành công'
            })
        })
    })

})
module.exports = router;