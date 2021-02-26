const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
router.get('/tinh', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_tinhthanhpho`
        connection.query(sqlFind,null, (err, cities) => {
            if(cities.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: cities.length,
                cities
            }
            res.status(200).json(response)

        })
})
router.get('/tinh/:matp', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_tinhthanhpho where matp = ${req.params.matp}`
        connection.query(sqlFind,null, (err, cities) => {
            if(cities.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: cities.length,
                city : cities[0]
            }
            res.status(200).json(response)

        })
})
router.get('/huyen', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_quanhuyen`
        connection.query(sqlFind,null, (err, huyen) => {
            if(huyen.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: huyen.length,
                huyen : huyen
            }
            res.status(200).json(response)

        })
})
//từng huyện của từng thành phố, trung tâm
router.get('/tunghuyen/:matp',(rep,res)=>{
    let sqlFind =   `SELECT *from devvn_quanhuyen WHERE matp= ${rep.params.matp}`;
    connection.query(sqlFind,null,(err,huyen)=>{
        if(huyen.length<0){
            return res.status(404).json({message:"NOT FOUND"})
        }
        if (err) throw err;
         let response = {
                count: huyen.length,
                huyen : huyen
            }
            res.status(200).json(response)
    })
})
//tưng xã trong huyện 
router.get('/tungxa/:maqh',(rep,res)=>{
    let sqlFind =   `SELECT *from devvn_xaphuongthitran WHERE maqh= ${rep.params.maqh}`;
    connection.query(sqlFind,null,(err,xa)=>{
        if(xa.length<0){
            return res.status(404).json({message:"NOT FOUND"})
        }
        if (err) throw err;
         let response = {
                count: xa.length,
                xa : xa
            }
            res.status(200).json(response)
    })
})
router.get('/huyen/:maqh', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_quanhuyen where maqh = ${req.params.maqh}`
        connection.query(sqlFind,null, (err, huyen) => {
            if(huyen.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: huyen.length,
                huyen : huyen[0]
            }
            res.status(200).json(response)

        })
})
router.get('/huyen/tinh/:matp', (req, res) => {
    let sqlFind = `SELECT QH.* FROM devvn_tinhthanhpho TP JOIN devvn_quanhuyen QH on TP.matp=QH.matp WHERE QH.matp=${req.params.matp}`
        connection.query(sqlFind,null, (err, huyen) => {
            if(huyen.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: huyen.length,
                huyen : huyen
            }
            res.status(200).json(response)

        })
})
router.get('/xa', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_xaphuongthitran`
        connection.query(sqlFind,null, (err, xa) => {
            if(xa.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: xa.length,
                xa : xa
            }
            res.status(200).json(response)

        })
})

router.get('/xa/:xaid', (req, res) => {
    let sqlFind = `SELECT * FROM devvn_xaphuongthitran where xaid = ${req.params.xaid}`
        connection.query(sqlFind,null, (err, xa) => {
            if(xa.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: xa.length,
                xa : xa[0]
            }
            res.status(200).json(response)

        })
})
router.get('/xa/huyen/:maqh', (req, res) => {
    let sqlFind = `SELECT X.* FROM devvn_quanhuyen QH JOIN devvn_xaphuongthitran x on QH.maqh=x.maqh WHERE QH.maqh=${req.params.maqh}`
        connection.query(sqlFind,null, (err, xa) => {
            if(xa.length <1){
                return res.status(404).json({message : "NOT FOUND"})
            }
            if (err) throw err;
            let response = {
                count: xa.length,
                xa : xa
            }
            res.status(200).json(response)

        })
})

module.exports = router;