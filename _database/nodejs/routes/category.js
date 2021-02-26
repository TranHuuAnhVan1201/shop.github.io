const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/', (req, res) => {
    let sqlFind = 'SELECT * FROM category where isDeleted = 1';
    connection.query(sqlFind,null,(err, category) => {
        if(category.length < 0) return res.status(404).json({message : 'NOT FOUND'});
        if (err) throw err;
        let response = {
            message: 'load sucessful',
            category: category
        }
        res.status(200).json(response)
    })
});
router.get(`/one/:id`,(req,res)=>{
    let sqlFind = `SELECT * FROM category where id =${req.params.id}`;
    connection.query(sqlFind,(err,result)=>{
        if(result.length < 0) {
            res.status(200).json({
                message:"NOT FOUND"
            })
        }
        if (err) throw err;
        res.status(200).json({
            message:"Load succes",
            result:result[0]
        })

    })
})
router.post('/add', (req, res)=>{
    let sqlCreate = `INSERT INTO category SET ?`
    let data = {
        cate_name : req.body.cate_name
    }
    connection.query(sqlCreate,data,(err,result)=>{
        if(result.length < 1) return res.status(404).json({message : 'NOT FOUND'})
        if (err) throw err;
        res.status(200).json({
            message: 'Thêm mới thành công',
            result : result
        })
    })
})
router.put('/update/:id',(req,res)=>{
    let sqlFind = `UPDATE category SET ? WHERE id = ${req.params.id} `;
      let data = {
       cate_name: req.body.cate_name
    }
    connection.query(sqlFind,[data],(err,result)=>{
        if (err) throw err;
        res.status(200).json({
            message:"cập nhật thành công"
        })
    })

})
router.put('/delete/:id',(req,res)=>{
    let sqldelete = `UPDATE category SET ? WHERE id = ${req.params.id}`;
    let data = {
        isDeleted : 0
    }
    connection.query(sqldelete,[data],(err,result)=>{
        if (err) throw err;
        res.status(200).json({
            message:"xóa thành công"
        })
    })
})
module.exports = router;