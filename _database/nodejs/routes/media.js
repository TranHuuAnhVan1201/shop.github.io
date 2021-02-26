const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
router.get('/', (req, res) => {
    let sqlFind = 'SELECT * FROM image';
    connection.query(sqlFind, null, (err, img) => {
        if (img.length < 1) return res.status(404).json({ message: 'NOT FOUND' });
        if (err) throw err;
        let response = {
            message: 'load sucessful',
            img: img
        }
        res.status(200).json(response)
    })
});
router.post('/add', (req, res) => {
    let sqlFind = 'INSERT INTO image SET ?';
    let data = {
        type: req.body.image,
        name: req.body.name,
        url: req.body.url
    }
    connection.query(sqlFind, data, (err, result) => {
        if (err) throw err;
        let sqlFindOne = `SELECT * FROM image WHERE id = ${result.insertId}`
        connection.query(sqlFindOne, null, (err, img) => {
            if (img.length < 1) return res.status(404).json({ message: 'NOT FOUND' });
            if (err) throw err;
            let response = {
                message: 'Post sucessful',
                img: img
            }
            res.status(200).json(response)
        })
    })
});
module.exports = router;
