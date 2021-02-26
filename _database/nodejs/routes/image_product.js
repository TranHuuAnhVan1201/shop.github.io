const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/', (req, res) => {
  res.json({"nghia":"ca vo"});
});
router.post('/add', (rep, res)=>{
   
})
module.exports = router;