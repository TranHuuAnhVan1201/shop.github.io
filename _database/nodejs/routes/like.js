const express = require('express');
const router = express.Router();
const connection = require('../database/connect')

router.post('/', (req, res) => {
    let sqlInsert = 'INSERT INTO likes SET ? like_article'
    connection.query(sqlInsert, null, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'Insert thành công',
            success: true
        })
    })
})



router.get('/article/:id', (req, res) => {
    let { id } = req.params
    let sqlSelect = `SELECT * FROM like_article WHERE article_id = ${id}`
    connection.query(sqlSelect, null, (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.length < 1) return res.status(404).json({ message: 'NOT FOUND' })
        res.status(200).json({
            count: result.length,
            likes: result
        })
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    let sqlDelete = `DELETE FROM like_article WHERE id = ${id}`;
    connection.query(sqlDelete, null, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'delete success',
            success: true
        })
    })
})



module.exports = router;