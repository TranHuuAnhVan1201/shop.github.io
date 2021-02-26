// const express = require('express');
// //khai bao router
// const router = express.Router();
// const request = require('request');
// const querystring = require('querystring');
// const connection = require('../database/connect');
// router.get('/',(req,res)=>{
// 	let sqlFindOne = `SELECT * FROM withdrawal`;
//          connection.query(sqlFindOne, null, (err, htx) => {
//             if (err) {
//                 return res.status(500).json({
//                     message: err
//                 })
//             }
//             if (htx.length < 1) return res.status(404).json({
//                 message: 'NOT FOUND'
//             })
//             return res.status(200).json({
//                 message: 'load thành công',
//                 result: htx
//             })
//         })
// })
// module.exports = router;