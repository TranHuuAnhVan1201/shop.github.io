const express = require('express');
//khai bao router
const router = express.Router();
const request = require('request');
const querystring = require('querystring');
const connection = require('../database/connect');
router.get('/', (req, res) => {
	let sqlFindOne = `SELECT * FROM withdrawal where withdrawal.status=3`;
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
			message: 'load thành công',
			result: htx
		})
	})
})

router.get('/:id', (req, res) => {
	let sqlFindOne = `SELECT * FROM withdrawal WHERE id = ${req.params.id}`;
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
			message: 'load thành công',
			result: htx[0]
		})
	})
})
router.put('/money/:id', (req, res) => {
	let data = {
		money_send,
		status
	} = req.body;
	console.log(req.body.money_send)
	let update = `UPDATE withdrawal SET withdrawal.status=1,
	withdrawal.content_admin="Chuyển xong rồi",withdrawal.money_send=${money_send} WHERE withdrawal.id=${req.params.id}`
	connection.query(update, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		return res.status(200).json({
			message: 'cập nhật thành công',
			htx: result
		})

	});


})
router.post('/', (req, res) => {
	let data = {
		email_paypal,
		money_receive,
		status,
		tygia,
		user_id,
		content_maneger,
        id_suggestions
	} = req.body;
	let sqlInsert = `INSERT INTO withdrawal(email_paypal,money_receive,status,tygia,user_id,content_maneger,id_suggestions) 
	VALUES("${email_paypal}","${money_receive}","${status}"," ${tygia}","${user_id}","${content_maneger}","${id_suggestions}")`;
	connection.query(sqlInsert, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		let sqlFindOne = `SELECT * FROM withdrawal WHERE id = ${result.insertId}`;
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

	});

})
module.exports = router;