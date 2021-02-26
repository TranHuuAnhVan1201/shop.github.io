const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const server = require('http').createServer(app)
var io = require('socket.io')(server);
const mysql = require('mysql')

require('dotenv').config();


//create connecttion
// var db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'error500',
//   port: '9000'
// });
// //connect


io.on('connection', function(socket) {

  console.log('new connection');

});

var fileupload = require("express-fileupload");
app.use(fileupload({
  useTempFiles: true // này để hiện thị đường dẫn  tempFilePath trong file
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors())

//to not get any deprecation warning or error { type: 'application/*+json' }
//support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
// app.use(bodyParser.json());



app.use(cookieParser());


// app.use('/api/users', require('./routes/users'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.get('/createdb', (req, res) => {
  let sql = `SELECT * FROM user WHERE Email = "${req.body.email}"`
  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    res.send(result)
  })
})

const userRoutes = require('./routes/user');

app.use('/users/', userRoutes);
app.use('/conversations', require('./routes/conversation'));
app.use('/location', require('./routes/location'));
app.use('/address', require('./routes/address'));
app.use('/category', require('./routes/category'));
app.use('/image', require('./routes/image'));
app.use('/image_product', require('./routes/image_product'));
app.use('/product', require('./routes/Product'));
app.use('/payment', require('./routes/Payment'));
app.use('/htx', require('./routes/htx'));
app.use('/cart', require('./routes/cart'));
app.use('/card', require('./routes/card.js'));
app.use('/xavien', require('./routes/xavien.js'));
app.use('/bill', require('./routes/bill'));
app.use('/comment',require('./routes/comment'));
app.use('/group',require('./routes/group'));
app.use('/participants',require('./routes/participantsgroup'));
app.use('/article',require('./routes/article'));
app.use('/sendgrid',require('./routes/sendgrid'));
app.use('/withDrawal',require('./routes/withDrawal'));
app.use('/suggestions',require('./routes/suggestions'));
// app.use('/view',require('./routes/view'));
app.use('/ship', require('./routes/shipping_address'));
var paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AcY7QtukoIhaIF_p-OOsIiaplcbB58vVM2E3vzZo2XEgM_NOXDyDnNrVOnUuknR4_ziLclMWdpWamWs3',
  'client_secret': 'ED_iP3Joa3rq9miAXfqoXPCwUnCxaeWzRXDiQdl3nKkTL4Ty2zIX_w8KAld4GkgfD0PA9Er_BM5HmECS'
});
app.get('/success', (req, res) => {

  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  paypal.payment.get(paymentId, function(error, payment) {
    if (error) {
      return res.status(500).json({
        message: error
      })
    } else {
      payment.transactions.forEach(value => {
        const exucute_payment_json = {
          "payer_id": payerId,
          "transactions": [{
            "amount": {
              "currency": "USD",
              "total": value.amount.total
            }
          }]
        }
        paypal.payment.execute(paymentId, exucute_payment_json, function(err, payment) {
          if (err) {
           return res.status(500).json({
              message: error
            })
          } else {
            res.redirect('http://localhost:3000/PagementSuccess');
          }
        })
      })



    }

  });

})
// app.get('/success', (req, res) => {
//   res.redirect('http://localhost:3000/ContactPage');
//   const payerId = req.query.PayerID;
//   const paymentId = req.query.paymentId;
// res.status(200).json({
//   payerId: payerId,
//   paymentId: paymentId
// })

// })
app.get('/cancel', (req, res) => console.log("cancel"));
const port = process.env.PORT || 4333;
server.listen(port);