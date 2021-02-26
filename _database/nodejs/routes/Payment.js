//crtl shift f
const express = require("express");
//khai bao router
const router = express.Router();
const connection = require("../database/connect");
//get theo sản phẩm category
const paypal = require('paypal-rest-sdk');
var first_config = {
  'mode': 'sandbox',
  'client_id': 'AfkjloctDQ-rwzMwxDtz7YHydhDeP6ba--RLqRCfh5w2ioKgoOzUJQpZwEiO7m5SJde2IjfONt4pAsUy',
  'client_secret': 'EM6U8vs6RUvrVB3SSjZC8yfqKQXyQ2pUvQQtTZqlGQfMHvyWIhImT-xilWWZxzbTY97n2fVAS0ApXT81'
};
paypal.configure(first_config);

var request = require('request');

router.post("/buy", (req, res) => {
  let {
    item_list,
    items,
    amount,
    total,
    description
  } = req.body;
  paypal.configure(first_config);
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal",
    },
    "redirect_urls": {
     "return_url": "http://localhost:4333/success",
     "cancel_url": "http://localhost:4333/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": item_list.items.map(value => {
          return value
        })
      },
      "amount": {
        "currency": "USD",
        "total": amount.total
      },
    }]
  };
// console.log(JSON.stringify(create_payment_json));
  paypal.payment.create(JSON.stringify(create_payment_json), function(error, payment) {
    if (error) {
     return res.status(500).json({
       message : error
     })
    } else {
      console.log(payment);
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          return res.status(200).json({
            link : payment.links[i].href
           })
        }
      }
    }
  });
 // router.post("/paymentID")

  // const payerId = req.query.PayerID;
  // const paymentId = req.query.paymentId;
  // console.log(payerId);
  // console.log(paymentId);
  // const exucute_payment_json = {
  //   "payer_id" : payerId,
  //   "transactions":[{
  //     "amount": {
  //       "currency": "USD",
  //       "total":  amount.total
  //     }
  //   }]
  // }
  // paypal.payment.execute(paymentId,exucute_payment_json,function(err, payment){
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.redirect('http://localhost:3000/PagementSuccess');
  //     // console.log("Get Pay ment");
  //     // console.log((JSON.stringify(payment)));
  //   }
  // })
});
router.post('/',(req, res) => {
  let {receiver,value,sender_batch_id} = req.body;
  paypal.configure(first_config);
    var create_payout_json = {
        sender_batch_header: {
            sender_batch_id: sender_batch_id,
            email_subject: "You have a payment",
        },
        items: [
            {
                recipient_type: "EMAIL",
                amount: {
                    value:value,
                    currency: "USD",
                },
                receiver: receiver,
                note: `Travelory đã chuyển cho bạn 3USD`,
                // sender_item_id: "item_3",
            },
        ],
    };  
    console.log(JSON.stringify(create_payout_json));
    paypal.payout.create(JSON.stringify(create_payout_json), false, function (
        error,
        payout
    ) {
        if (error) {
           res.status(500).json({
              message:"ERR",
              payout_batch_id:error
            })
           
        } else {
            res.status(200).json({
              message:"Create Single Payout Response",
              payout_batch_id:payout.batch_header.payout_batch_id
            })

        }
    });
});
module.exports = router;