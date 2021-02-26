const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/', (req, res) => {
	let sqlFind = `SELECT participants_group.id,participants_group.group_id,participants_group.user_id,participants_group.approve,
users.email,users.avatar,group_diendan.name
FROM participants_group 
INNER JOIN group_diendan on group_diendan.id = participants_group.group_id
INNER JOIN users on users.id = participants_group.user_id
where participants_group.approve = false AND users.isDeleted = true AND group_diendan.isDeleted = true`;
	connection.query(sqlFind, null, (err, htx) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (htx.length < 1) return res.status(404).json({
			message: 'NOT FOUND'
		});

		let response = {
			message: 'load sucessful',
			htx: htx
		}
		return res.status(200).json(response)
	})
});
//get nhóm đã được duyệt
router.get('/duyet/:id', (req, res) => {
	let sqlFind = `SELECT participants_group.id,participants_group.group_id,participants_group.user_id,participants_group.approve, users.email,users.avatar,group_diendan.name,group_diendan.htx_id,group_diendan.avatar,group_diendan.cover_image FROM participants_group 
	INNER JOIN group_diendan on group_diendan.id = participants_group.group_id 
	INNER JOIN users on users.id = participants_group.user_id 
	where participants_group.approve = true AND users.isDeleted = true AND group_diendan.isDeleted = true
    AND participants_group.user_id = ${req.params.id}
	`;
	connection.query(sqlFind, null, (err, htx) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (htx.length < 1) return res.status(404).json({
			message: 'NOT FOUND'
		});

		let response = {
			message: 'load sucessful',
			htx: htx
		}
		return res.status(200).json(response)
	})
});
router.post('/', (req, res) => {

	let sql = `SELECT participants_group.group_id,participants_group.user_id from participants_group 
WHERE participants_group.group_id =${req.body.group_id}  AND participants_group.user_id = ${req.body.user_id} `;
	connection.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (result.length < 1) {
			let data = {
				group_id: req.body.group_id,
				user_id: req.body.user_id
			}

			let sqlFind = `INSERT INTO participants_group SET ? `;
			connection.query(sqlFind, [data], (err, htx) => {
				if (err) {
					return res.status(500).json({
						message: err
					})
				}

				let response = {
					message: 'thêm thành công'
				}
				return res.status(200).json(response)
			})
		} else {
			return res.status(409).json({
				message: "Đã đăng ký nhóm rồi"
			})
		}
	})

});
router.put('/:id', (req, res) => {
	let id = req.params.id
	let sqlFind = `UPDATE participants_group SET participants_group.approve=true where participants_group.id=${id}  `;
	connection.query(sqlFind, null, (err, htx) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}

		let response = {
			message: 'cập nhật thành công'
		}
		return res.status(200).json(response)
	})
});
module.exports = router;