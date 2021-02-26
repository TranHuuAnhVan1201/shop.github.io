const express = require('express');
const router = express.Router();
const connection = require('../database/connect')

router.get('/', (req, res) => {
	let sqlFind = `   SELECT cart_item.id,product.name,users.email,cart_item.quantity,image.url,
cart_item.in_cart
FROM cart_item
INNER JOIN product on cart_item.product_id = product.id
INNER JOIN image_product on product.id = image_product.product_image
INNER JOIN cart on cart.id = cart_item.cart_id
INNER JOIN users ON cart.user_id = users.id
INNER JOIN image on image.id = image_product.image_id
WHERE image_product.main_image=true AND cart_item.isDeleted = true
ORDER BY cart_item.cart_id ASC`;
	connection.query(sqlFind, (err, result) => {
		if (result.length < 0) {

			res.status(200).json("NOT")
		}
		if (err) throw err;

		let data = {
			message: "thành công",
			result: result
		}
		res.status(200).json(data)


	})
})

router.put('/delete/:id', (req, res) => {
	let sql = `UPDATE cart_item SET cart_item.isDeleted=false WHERE cart_item.id=${req.params.id}`;
	connection.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (result.length < 1) {
			res.status(200).json("NOT")
		} else {
			let data = {
				message: "xóa thành công",
				result: result
			}
			return res.status(200).json(data);
		}

	})

})
router.get('/item/:id', (req, res) => {
	let item = `SELECT cart_item.id,cart_item.quantity,cart_item.product_id,cart_item.cart_id,image.url,users.avatar,users.email
				FROM cart_item 
				INNER JOIN product on cart_item.product_id = product.id
				INNER JOIN cart on cart.id = cart_item.cart_id
				INNER JOIN users ON cart.user_id = users.id
				INNER JOIN image_product on product.id = image_product.product_image
				INNER JOIN image on image.id = image_product.image_id
				WHERE image_product.main_image=true AND cart_item.id =${req.params.id}`;
	connection.query(item, (err, result) => {
		if (result.length < 1) {
			res.status(200).json("NOT")
		}
		if (err) throw err;
		let data = {
			message: "Load thành công",
			result: result[0]
		}
		res.status(200).json(data);
	})
})



router.get('/xavien', (req, res, next) => {
	let sqlFind = `
	SELECT users.id,users.avatar,users.email
	FROM users
	WHERE users.role=3`
	connection.query(sqlFind, (err, xavien) => {
		if (xavien.length < 0) {

			res.status(200).json("NOT")
		}
		if (err) throw err;
		let data = {
			result: xavien.map(xavien => {
				return {
					id: xavien.id,
					email: xavien.email,
					avatar: xavien.avatar,
					sanpham: []
				}
			})
		}
		res.status(200).json(data)
	})
})
router.get('/cart', (req, res, next) => {
	let sqlFind = `
		SELECT cart_item.id,cart_item.quantity,product.user_id,cart_item.cart_id,cart_item.product_id,product.price
FROM cart_item
INNER JOIN product ON product.id=cart_item.product_id
WHERE cart_item.in_cart = true`;
	connection.query(sqlFind, (err, xavien) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (xavien.length < 0) {

			res.status(200).json("NOT")
		} else {
			let data = {
				result: xavien
			}
			return res.status(200).json(data)
		}


	})
})
router.put('/cart_item/:id_product', (req, res) => {
	let sqlFind = `UPDATE cart_item
SET cart_item.bill_id = ${req.body.bill_id},cart_item.in_cart=false
WHERE cart_item.in_cart = true AND cart_item.product_id =${req.params.id_product}  AND cart_item.cart_id=${req.body.cart_id}`
	connection.query(sqlFind, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		let data = {
			message: "cập nhật thành công",
			result: result
		}
		return res.status(200).json(data)
	})
})
router.put('/cart_item1/:id_product', (req, res) => {
	let sqlFind = `UPDATE cart_item
SET cart_item.bill_id = ${req.body.bill_id},cart_item.in_cart=false,cart_item.isDeleted=false
WHERE cart_item.in_cart = true AND cart_item.product_id =${req.params.id_product}  AND cart_item.cart_id=${req.body.cart_id}`
	connection.query(sqlFind, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		let data = {
			message: "cập nhật thành công",
			result: result
		}
		return res.status(200).json(data)
	})
})
module.exports = router;