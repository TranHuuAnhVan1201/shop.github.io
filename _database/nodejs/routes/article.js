const express = require('express');
const router = express.Router();
const connection = require('../database/connect')
router.post('/', (req, res) => {
    let create_article = () => {
        return new Promise((resolve, reject) => {
            let sqlInsert = `INSERT INTO article SET ?`
            let data = req.body.article
            // {
            //     article_body: req.body.article_body,
            //     group_id: req.body.group_id,
            //     user_id: req.body.user_id,
            // }
            connection.query(sqlInsert, data, (err, result) => {
                if (err) return reject(err)
                // console.log(result)
                let sqlFindOne = `SELECT * FROM article WHERE id = ${result.insertId}`
                connection.query(sqlFindOne, null, (err, article) => {
                    if (err) return reject(err)
                    resolve(article)
                })
            })

        })
    }

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
    let addImgArticle = (article, imgArr) => {
        return new Promise(async (resolve, reject) => {
            let sqlInsert = 'INSERT INTO image_article (article_id,image_id) VALUES ?';
            var data = []
            await imgArr.forEach((image) => {
                data.push([article[0].id, image.id])
            })
            connection.query(sqlInsert, [data], (err, result) => {
                if (err) return reject(err)
                resolve(true)
            })
        })
    }

    let {
        imgArr
    } = req.body
    create_article().then(result => {
        if (imgArr) {
            addImage(imgArr).then(result_img => {
                addImgArticle(result, result_img).then(result_img_article => {
                    if (result_img_article) {
                        res.status(200).json({
                            message: `insert success`,
                            article: result,
                            arrImg: result_img
                        })
                    }
                })
            })
        } else {
            res.status(200).json({
                message: 'isnert success',
                article: result
            })
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})
// lay article trong 1 group, co phan trang r
router.get('/group/:groupId', (req, res) => {
    let getArticle = () => {
        return new Promise((resolve, reject) => {
            let limit = req.query.limit || 10;
            let page = req.query.page || 1
            let {
                groupId
            } = req.params


            let sqlFind = ` SELECT a.*,users.email,users.avatar,users.first_name,users.last_name FROM article a
 INNER JOIN users ON users.id = a.user_id
 WHERE  a.approve = true  AND a.group_id =${groupId} 
            ORDER BY a.created_at DESC LIMIT ${limit} OFFSET ${(page - 1) * limit}`
            connection.query(sqlFind, (err, result) => {
                if (err) return res.status(500).json({
                    err
                })
                if (result.length === 0) return res.status(404).json({
                    message: 'NOT FOUND'
                })
                resolve(result)
            })
        })
    }
    let GetImage = (article) => {
        return new Promise(async (resolve, reject) => {
            var Arr = new Array()
            await article.forEach(element => {
                let sqlFind = `SELECT I.* FROM image_article IA LEFT 
                JOIN image I ON I.id = IA.image_id 
                WHERE IA.article_id = ${element.id}`
                connection.query(sqlFind, null, (err, result) => {
                    if (err) return reject(err)
                    if (result.length < 1) {
                        Arr.push({
                            article: element
                        })
                    } else {
                        Arr.push({
                            article: element,
                            imgArr: result
                        })
                    }
                    if (Arr.length === article.length) {
                        resolve(Arr)
                    }
                })
            });
        })
    }
    getArticle().then(result_article => {
        GetImage(result_article).then(imgArr => {
            res.status(200).json(imgArr);
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})
router.get(`/xetduyet`, (req, res) => {
    let sqlFind = ` SELECT a.*,users.email,users.avatar,users.first_name,users.last_name,group_diendan.name
FROM article a
INNER JOIN group_diendan on group_diendan.id = a.group_id
INNER JOIN users ON users.id = a.user_id
 WHERE  a.approve = false`;
    connection.query(sqlFind, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (result.length < 1) {
            return res.status(404).json({
                message: "Not Found"
            });
        } else {
            let data = {
                message: "success",
                result: result
            }
            return (res.status(200).json(data));


        }

    })
})

router.put('/:article_id', (req, res) => {
    let update_article = function(article, article_id) {
        return new Promise((resolve, reject) => {
            let sqlUpdate = ` UPDATE article SET ? WHERE id= ?`
            connection.query(sqlUpdate, [article, article_id], (err) => {
                if (err) return reject(err)
                let sqlFind = ` SELECT * from article WHERE id =${article_id}`
                connection.query(sqlFind, NULL, (err, result) => {
                    if (err) return reject(err)
                    resolve(result[0])
                })
            })
        })
    }
    let {
        article_id
    } = req.params
    let article = req.body.article
    //     article_body: req.body.article_body,
    //     group_id: req.body.group_id,
    //     user_id: req.body.user_id,
    update_article(article, article_id).then(result => {
        res.status(200).json({
            article
        })
    })
})
router.put('/xetduyet/:article_id', (req, res) => {
    let sqlUpdate = `UPDATE article SET article.approve=true WHERE id = ${req.params.article_id}`;
    connection.query(sqlUpdate, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        return res.status(200).json({
            message: "duyệt thành công"
        })
    })
})

router.delete('/image_article/:image_id', (req, res) => {
    sqlDelete = `DELETE FROM image WHERE id = ${req.params.image_id}`
    connection.query(sqlDelete, null, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'delete success',
            success: true
        })
    })
})
router.post('/image_article', (req, res) => {
    let insertImage = () => {
        return new Promise((resolve, reject) => {
            let {
                image
            } = req.body
            //image : {
            //     url : ...,
            //     type : image
            // }
            sqlInsert = 'INSERT INTO image SET ?'
            connection.query(sqlInsert, image, (err, result) => {
                let sqlFindOne = `SELECT * FROM image WHERE id = ${result.insertId}`
                if (err) return reject(err)
                connection.query(sqlFindOne, null, (err, result_image) => {
                    if (err) return reject(err)
                    resolve(result_image)
                })

            })
        })
    }
    let insert_image_article = (image) => {
        return new Promise((resolve, reject) => {
            let {
                article_id
            } = req.body
            // console.log(image)
            sqlInsert = ' INSERT INTO image_article set ?'
            connection.query(sqlInsert, {
                image_id: image[0].id,
                article_id
            }, (err) => {
                if (err) return reject(err)
                resolve(true)
            })
        })
    }
    insertImage().then(image => {
        insert_image_article(image).then(result => {
            if (result === true) {
                res.status(200).json({
                    message: 'Image successfully inserted',
                    image: image[0],
                    article_id: req.body.article_id
                });
            }
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:article_id', (req, res) => {
    let article_id = req.params.article_id
    let sqlDelete = `DELETE FROM article WHERE id = ${article_id}`
    connection.query(sqlDelete, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'delete success',
            success: true
        })
    })
})



module.exports = router;