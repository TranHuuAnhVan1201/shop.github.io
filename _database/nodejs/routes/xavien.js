const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/tongtien/:id', (req, res) => {
	let sql = `SELECT b.*,cart_item.quantity,product.name as name_product,product.description,product.price,product.quantity_in_stock,image.url,htx.name
FROM bill b
INNER JOIN cart_item on b.id = cart_item.bill_id
INNER JOIN product on cart_item.product_id = product.id
INNER JOIN image_product on image_product.product_image = product.id
INNER JOIN image on image.id = image_product.image_id
INNER JOIN htx on htx.id = product.htx_id
WHERE 
b.status="đã thanh toán" AND cart_item.in_cart=false AND image_product.main_image = true AND
b.user_id=${req.params.id}`;
	connection.query(sql, (err, xavien) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (xavien.length < 1) {
			res.status(200).json("NOT")
		}

		let data = {
			message: "Load succsess",
			xavien: xavien
		}
		res.status(200).json(data)
	})
})
router.get(`/charjs/:id`, (req, res) => {
	let sql = `SELECT bill.id,cart_item.product_id,SUM(cart_item.quantity) as soluong,product.name
FROM bill
INNER JOIN cart_item ON cart_item.bill_id = bill.id
INNER JOIN product on product.id = cart_item.product_id
WHERE bill.status="đã thanh toán" AND cart_item.isDeleted=true AND bill.user_id=${req.params.id}
GROUP BY cart_item.product_id
ORDER by soluong ASC LIMIT 5`;
	connection.query(sql, (err, xavien) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (xavien.length < 1) {
			res.status(200).json("NOT")
		}

		let data = {
			message: "Load succsess",
			xavien: xavien
		}
		res.status(200).json(data)
	})
})
router.get('/sum/:id', (req, res) => {
	let sql = `SELECT bill.total_price from bill WHERE bill.user_id=${req.params.id} AND bill.status="đã thanh toán"`;
	connection.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: err
			})
		}
		if (result.length < 1) {
			return res.status(200).json("NOT")
		} else {
			let data = {
				message: "Load succsess",
				xavien: result
			}
			return res.status(200).json(data)
		}


	})
})
module.exports = router;