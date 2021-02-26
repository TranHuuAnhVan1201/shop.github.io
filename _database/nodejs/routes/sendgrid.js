const express = require('express');
//khai bao router
const router = express.Router();
const request = require('request');
const querystring = require('querystring');
const connection = require('../database/connect');
router.post('/', (req, res) => {
	const axios = require('axios');
	const SENDGRID_API_KEY = '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';
	const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(SENDGRID_API_KEY);
	let {
		email,
		total,
		items,
		address,
		address1,
		address2,
		address3,
		dynamic_template_data,
		price,
		personalizations
	} = req.body;
	// var url = 'https://api.sendgrid.com/v3/mail/send';
	var headers = {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + SENDGRID_API_KEY
	}
	var emailForm = "huunghia131097@gmail.com";
	var template_id = "d-fafbdf3fc51e4e3480f0c23bea607527";
	let data = {
		from: {
			email: emailForm
		},
		personalizations: [{
			to: [{
				email: personalizations[0].to[0].email
			}],
			dynamic_template_data: {
				subject: "Hóa đơn đã thanh toán nha",
				total: personalizations[0].dynamic_template_data.total,
				items: personalizations[0].dynamic_template_data.items.map(val => {
					return {
						image: val.image,
						productName: val.productName,
						quantity: val.quantity,
						price:val.price
					} 
				}),
				receipt: true,
				 email:"huunghia131097@gmail.com",
				name: personalizations[0].dynamic_template_data.name,
				address: personalizations[0].dynamic_template_data.address,
				address1: personalizations[0].dynamic_template_data.address1,
				address2: personalizations[0].dynamic_template_data.address2,
				address3: personalizations[0].dynamic_template_data.address3,
			}
		}],
	template_id: template_id	
	}
	axios({
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + SENDGRID_API_KEY
		},
		url: "https://api.sendgrid.com/v3/mail/send",
		data: JSON.stringify(data),

	}).then(res => {
		return res.status(200).json({
			message: "sending email"
		})
	}).catch(err => {
		return res.status(200).json({
			message: "sending email"
		})
	})
});
module.exports = router;