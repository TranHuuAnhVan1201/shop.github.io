const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect');
router.get('/', (req, res) => {
    let sqlFind = 'SELECT * FROM suggestions';
    connection.query(sqlFind, null, (err, htx) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (htx.length < 0) return res.status(404).json({
            message: 'NOT FOUND'
        });

        let response = {
            message: 'load sucessful',
            htx: htx
        }
        return res.status(200).json(response)
    })
});
router.get('/thanhtoan/:id', (req, res) => {
    let sql = `SELECT SUM(suggestions.money_send) as tongtien from suggestions WHERE suggestions.status = 1 AND suggestions.user_id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result[0]
        })

    })
})

router.get('/tongtien/:id', (req, res) => {
    let sqlFind = `SELECT SUM(bill.total_price) as TongTien FROM bill 
WHERE bill.Withdrawal=1 AND bill.status="đã thanh toán" AND bill.user_id=${req.params.id}`;
    connection.query(sqlFind, null, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result[0]
        })
    })

})
router.get('/bill/:id', (req, res) => {
    let sqlFindAll = `SELECT * FROM bill 
WHERE bill.Withdrawal=1 AND bill.status="đã thanh toán" AND bill.user_id=${req.params.id}`
    connection.query(sqlFindAll, null, (err, result) => {
        if (err) return res.status(500).json({
            err
        })
        if (result.length < 0) {
            return res.status(404).json({
                message: 'NOT FOUNT'
            })
        }
        res.status(200).json({
            count: result.length,
            bills: result
        })
    })
})
router.get('/nowDate/:id', (req, res) => {
    let sql = `SELECT * FROM bill
WHERE bill.status="đã thanh toán" AND bill.user_id=${req.params.id} AND bill.Withdrawal = 1 AND bill.created_at BETWEEN '${req.body.dateStart}' AND '${req.body.dateEnd}';`;
    connection.query(sql, null, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (data.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        return res.status(200).json({
            message: 'load thành công',
            result: data
        })

    })


})
router.get('/status/:id', (req, res) => {
    let sqlFindOne = `SELECT * FROM suggestions WHERE suggestions.status=1 AND suggestions.user_id = ${req.params.id}`;
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
    let sqlFindOne = `SELECT * FROM suggestions WHERE suggestions.status=3 AND suggestions.user_id = ${req.params.id}`;
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
router.put('/status/:id', (req, res) => {
    let sql = `UPDATE suggestions SET suggestions.status=1 where suggestions.id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        return res.status(200).json({
            message: 'cập nhật thành công',
            htx: result
        })
    })
})
router.put('/moneySend/:id', (req, res) => {
    let sql = `UPDATE suggestions SET suggestions.money_send=${req.body.money_send} where suggestions.id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        return res.status(200).json({
            message: 'cập nhật thành công',
            htx: result
        })
    })
})
router.post('/', (req, res) => {
    let sqlInsert = `INSERT INTO suggestions(content,user_id,email,status,tygia,money_request) 
    VALUES("${req.body.content}","${req.body.user_id}","${req.body.email}","${req.body.status}","${req.body.tygia}","${req.body.money_request}") `;
    connection.query(sqlInsert, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        let response = {
            message: 'Post sucessful',
            result: result
        }
        return res.status(200).json(response)
    })

    // connection.query()
});

module.exports = router;