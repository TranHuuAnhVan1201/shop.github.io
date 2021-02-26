const express = require('express');
//khai bao router
const router = express.Router();
const connection = require('../database/connect')
router.get('/product/:product_id/', (req, res) => {
    let GetComment = () => {
        return new Promise(async(resolve, reject) => {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const startIndex = (page - 1) * limit;
            console.log(startIndex);
            let { product_id } = req.params
            let sqlFind = `SELECT c.*,users.last_name,users.avatar FROM comment c
                            INNER JOIN users on users.id = c.user_id
                            WHERE entity_id = ${product_id} AND entity_type = 'product' 
                            ORDER BY created_at DESC 
                            LIMIT ${limit} OFFSET ${startIndex}`
            let sqlCount = `SELECT COUNT(id) as count FROM comment WHERE entity_id = ${product_id} AND entity_type = 'product'`

            connection.query(sqlFind, (err, comments) => {
                if (err) reject(err);
                connection.query(sqlCount, (err, total) => {
                    if (err) reject(err);
                    resolve({total : total[0].count,comments})
                })
            })
        })
    }
    let GetImage = (comments) => {
        return new Promise((resolve, reject) => {
            // res.status(200).json(comments)
            var Arr = new Array();
            comments.forEach(comment => {
                let sqlFind = `SELECT * FROM image_comment IC 
                    JOIN image I ON i.id = IC.image_id 
                    WHERE IC.comment_id=${comment.id}`
                connection.query(sqlFind, (err, image) => {
                    if (err) return reject({ err })
                    Arr.push({
                        comment, imageArr: image
                    })
                    if (Arr.length === comments.length) {
                        resolve(Arr)
                    }
                })
            });
        })
    }

    GetComment().then(resultCmt => {
        GetImage(resultCmt.comments).then(resultImg => {
            res.status(200).json({
                total : resultCmt.total,
                comments: resultImg
            }
            )
        }).catch(err => {
            res.status(500).json({ err })
        })
    }).catch(err => {
        res.status(500).json({ err })
    })
});
router.get('/article/:article_id/', (req, res) => {
    let GetComment = () => {
        return new Promise(async (resolve, reject) => {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const startIndex = (page - 1) * limit
            let { article_id } = req.params
            let sqlFind = `SELECT c.*,users.last_name FROM comment c
            INNER JOIN users on users.id = c.user_id
            WHERE entity_id = ${article_id} AND entity_type = 'article' 
            ORDER BY created_at DESC
            LIMIT ${limit} OFFSET ${startIndex}`

            let sqlCount = `SELECT COUNT(id) as count FROM comment WHERE entity_id = ${article_id} AND entity_type = 'article'`

            connection.query(sqlFind, (err, comments) => {
                if (err) reject(err);
                if(comments.length < 1) return res.status(404).json({ message: 'NOT FOUND' })
                connection.query(sqlCount, (err, total) => {
                    if (err) reject(err);
                    resolve({ total: total[0].count, comments })
                })
            })

        })
    }
    let GetImage = (comments) => {
        return new Promise((resolve, reject) => {
            // res.status(200).json(comments)
            var Arr = new Array();
            comments.forEach(comment => {
                let sqlFind = `SELECT * FROM image_comment IC 
                    JOIN image I ON i.id = IC.image_id 
                    WHERE IC.comment_id=${comment.id}`
                connection.query(sqlFind, (err, image) => {
                    if (err) return reject({ err })
                    Arr.push({
                        comment, imageArr: image
                    })
                    if (Arr.length === comments.length) {
                        resolve(Arr)
                    }
                })
            });
        })
    }

    GetComment().then(resultCmt => {
        GetImage(resultCmt.comments).then(resultImg => {
            res.status(200).json({
                total: resultCmt.total,
                comments: resultImg
            }
            )
        }).catch(err => {
            res.status(500).json({ err })
        })
    }).catch(err => {
        res.status(500).json({ err })
    })
});

router.post('/', (req, res) => {
    let addImage = (imgArr) => {
        return new Promise((resolve, reject) => {
            let sqlInsert = 'INSERT INTO image SET ?';
            var a = Array()
            imgArr.map(image => {
                let data = {
                    type: image.type,
                    url: image.url
                }
                connection.query(sqlInsert, data, (err, result) => {
                    if (err) return reject(err);
                    let sqlFindOne = `SELECT * FROM image WHERE id = ${result.insertId}`
                    connection.query(sqlFindOne, null, (err, img) => {
                        if (err) throw err;
                        let ob = {
                            id: img[0].id,
                            type: img[0].type,
                            url: img[0].url,
                        }
                        a.push(ob)
                        if (a.length === imgArr.length) {
                            resolve(a)
                        }
                    })
                })
            })
        })
    }

    let addComment = (comment) => {
        return new Promise((resolve, reject) => {
            let sqlInsert = 'INSERT INTO comment SET ?';
            connection.query(sqlInsert, comment, (err, result) => {
                if (err) return reject(err)
                let sqlFindOne = `SELECT * FROM comment WHERE id = ${result.insertId}`
                connection.query(sqlFindOne, null, (err, res_comment) => {
                    if (err) return reject(err)
                    resolve(res_comment)
                })
            })
        })
    }
    let addImgComment = (comment, imgArr) => {
        return new Promise(async (resolve, reject) => {
            let sqlInsert = 'INSERT INTO image_comment (image_id,comment_id) VALUES ?';
            let data = [];
            await imgArr.forEach(image => {
                data.push([image.id, comment[0].id])
            })
            connection.query(sqlInsert, [data], (err) => {
                if (err) return reject(err);
                resolve(true)

            })
        })
    }

    let { comment, imgArr } = req.body
    addComment(comment).then(result_cmt => {
        if (imgArr) {
            addImage(imgArr).then(result_img => {
                addImgComment(result_cmt, result_img).then(result => {
                    if (result) {
                        res.status(200).json({
                            message: `Bạn đã gửi đánh giá sản phẩm thành công`,
                            comment: result_cmt,
                            arrImage: result_img
                        })
                    }

                })
            })
        } else {
            res.status(200).json({
                message: `Bạn đã gửi đánh giá sản phẩm thành công`,
                comment: result_cmt
            })
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})


router.delete("/:comment_id", (req, res) => {
    let { comment_id } = req.params
    let sqlDelete = `DELETE FROM comment WHERE id = ${comment_id}`;
    connection.query(sqlDelete, null, (err, result) => {
        if (err) res.status(500).json({ err })
        res.status(200).json({
            message: "xóa sản phẩm thành công"
        })
    });
})

module.exports = router;