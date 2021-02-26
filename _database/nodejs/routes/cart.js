const express = require('express');
const router = express.Router();
const connection = require('../database/connect')
router.post('/add', (req, res) => {

    let sqlCheckPeople = `SELECT * FROM cart where id =  ${req.body.user_id}`
    connection.query(sqlCheckPeople, (err, user) => {
        if (err) return res.status(500).json({
            message: err
        })
        if (user.length > 0) {
            return res.status(401).json({
                message: 'Bạn đã có cart'
            })
        } else {
            let sqlCreate = `INSERT INTO cart SET ?`
            let data = {
                user_id: req.body.user_id,
            }
            connection.query(sqlCreate, data, (err, result) => {
                if (err) return res.status(500).json({
                    message: err
                })
                let sqlFindOne = `SELECT * FROM cart WHERE id = ${result.insertId}`
                connection.query(sqlFindOne, null, (err, cart) => {
                    if (err) return res.status(500).json({
                        message: err
                    })
                    if (cart.length < 1) {
                        return res.status(404).json({
                            message: 'NOT FOUND'
                        })
                    } else {
                        return res.status(200).json({
                            message: 'Tạo thành công',
                            cart: cart[0]
                        })
                    }

                })
            })
        }
    })
})
router.post('/add_cart', (req, res) => {
    let check_quantity = (json) => {
        return new Promise((resolve, reject) => {
            if (json.status) {
                let sqlFindOne = `SELECT * FROM product WHERE id = ${json.item[0].product_id}`
                connection.query(sqlFindOne, null, (err, doc) => {
                    if (err) return reject(err)
                    if (doc[0].quantity_in_stock < json.item[0].quantity + req.body.quantity) {
                        return reject(new Error('The product not enough!'))
                    } else {
                        resolve(json);
                    }
                })
            } else {
                let sqlFindOne = `SELECT * FROM product WHERE id = ${req.body.product_id}`
                connection.query(sqlFindOne, null, (err, doc) => {
                    if (err) return reject(err)
                    if (doc[0].quantity_in_stock < req.body.quantity) {
                        return reject(new Error('The product not enough!'))
                    } else {
                        resolve(json);
                    }
                })
            }

        })
    }
    let check_inCart = () => {
        return new Promise((resolve, reject) => {
            let {
                product_id,
                cart_id
            } = req.body;
            let sqlFindAll = `SELECT * FROM cart_item WHERE cart_id = ${cart_id} AND product_id = ${product_id} AND in_cart = true`

            connection.query(sqlFindAll, null, (err, item) => {

                if (err) return reject(err)
                if (item.length > 0) {
                    return resolve({
                        status: true,
                        item: item
                    });
                } else return resolve({
                    status: false,
                    item: null
                });
            })
        })
    }

    let updateProduct = (json) => {
        return new Promise((resolve, reject) => {
            let {
                cart_id,
                product_id
            } = req.body
            let newQuantity = json.item[0].quantity + req.body.quantity;
            let sqlUpdate = `UPDATE cart_item SET quantity = ${newQuantity} 
                WHERE cart_id = ${cart_id} AND product_id = ${product_id} AND in_cart = true`
            connection.query(sqlUpdate, (err) => {
                if (err) reject(err)
                else {
                    res.status(200).json({
                        message: 'Product is added',
                        request: {
                            type: 'GET',
                            URL: 'http://localhost:4333/cart/'
                        }
                    })
                }
            })
        })
    }
    let createNew = () => {
        return new Promise((resolve, reject) => {
            const itemAdded = {
                cart_id: req.body.cart_id,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
            }
            let sqlCreate = `INSERT INTO cart_item SET ?`
            connection.query(sqlCreate, itemAdded, (err, result) => {
                if (err) return reject(err);

                res.status(200).json({
                    message: 'Product is added',
                    id_cart: result.insertId,
                    request: {
                        type: 'GET',
                        URL: 'http://localhost:4333/cart/'
                    }
                });
            })
        })
    }
    check_inCart().then(result => {
        check_quantity(result).then(resultC => {
            if (result.status) {
                updateProduct(resultC);
            } else {
                createNew().catch(err => {
                    res.status(500).json({
                        error: err + ' '
                    })
                });
            }
        }).catch(err => {
            res.status(500).json({
                error: err + ' '
            })
        })
    }).catch(err => {
        res.status(500).json({
            error: err + ' '
        })
    })
})
//codemoiw id cart
router.get('/idCart/:user_id', (req, res, next) => {
    let sqlFind = `SELECT cart.id FROM cart WHERE user_id=${req.params.user_id}`;
    connection.query(sqlFind, (err, result) => {
        if (err) return res.status(500).json(err);
        let response = {
            message: "Load Id Cart",
            id_Cart: result[0]
        }
        res.status(200).json(response)
    })
})
router.get('/idCart', (req, res, next) => {
    let sqlFind = `SELECT cart.id,cart.user_id,users.email,users.avatar
                    FROM cart
                    INNER JOIN users on cart.user_id=users.id`;
    connection.query(sqlFind, (err, result) => {
        if (err) return res.status(500).json(err);
        let response = {
            message: "Load Id Cart",
            id_Cart: result
        }
        res.status(200).json(response)
    })
})
// router.put('/cart_item/:cart_id', (req, res) => {
//     let {
//         cart_id
//     } = req.params
//     let sqlFind = `SELECT * from cart_item WHERE cart_id=${cart_id} AND in_cart = true`;
//     connection.query(sqlFind, null, (err, items) => {
//         if (items.length < 0)
//             return res.status(404).json({
//                 message: "giỏ hàng rỗng"
//             });
//         if (err) return res.status(500).json({
//             err
//         });
//         let data = {
//             in_cart: false,
//             bill_id: req.body.bill_id
//         }
//         let sqlUpdate = `UPDATE cart_item SET ? WHERE cart_item.cart_id= ? AND in_cart = true`;
//         connection.query(sqlUpdate, [data, cart_id], (err, item) => {
//             if (err) return res.status(500).json({
//                 err
//             });
//             res.status(200).json({
//                 message: "Cập nhật cart_item thành công",
//             });
//         })
//     })
// })
//chua get cart
router.get("/cart_item/:id", (req, res) => {
    let sqlFind = `select cart.id from cart where cart.user_id=${req.params.id}`;
    connection.query(sqlFind, (err, cart) => {

        let sqlFindAll = ` 
        select cart_item.id,cart_item.quantity,product.name,product.price
        from cart_item 
        INNER JOIN product ON cart_item.product_id=product.id
        where cart_item.cart_id =${cart[0].id} and in_cart=false `;
        connection.query(sqlFindAll, (err, result) => {
            if (result.length <= 0) {
                res.status(200).json({
                    message: "NOT"
                })
            }
            if (err) throw err
            res.status(200).json({
                message: "load success",
                id_cart: cart[0].id,
                result: result
            })
        })
    })
})
router.get('/cartitem/:id_user', (req, res, next) => {
    sqlFind = `SELECT cart_item.id FROM cart
INNER JOIN cart_item ON cart.id = cart_item.cart_id
WHERE cart.user_id = ${req.params.id_user} AND in_cart = 1 `;
    connection.query(sqlFind, (err, cartitem) => {
        if (err) throw err;
        cartitem.forEach(value => {
            let data = {
                id_cart: cartitem

            }
            res.status(200).json(data);
        })
    })
})
// router.put(`/one/cart_item/:id`,(req,res)=>{
//     let data = {
//         bill_id: req.body.bill_id,
//         in_cart: false
//     }
//    let sqlUpdate = `UPDATE cart_item SET ? WHERE cart_item.id=${req.params.id}`;
//    connection.query(sqlUpdate,[data],(err,result)=>{
//          if (err) return res.status(500).json(err)
//         res.status(200).json({
//             message: 'Updated succeeded'
//         })
//    })
// })
router.put(`/one/cart_item/:id`, (req, res) => {
    // let data = {
    //     bill_id: req.body.bill_id,
    //     in_cart: false
    // }
    req.body.bill_id.forEach(value => {
        console.log(value);
        let sqlUpdate = `UPDATE cart_item SET cart_item.bill_id=${value},in_cart=0 WHERE cart_item.cart_id=${req.params.id} AND in_cart = 1`;
        connection.query(sqlUpdate, (err, result) => {
            if (err) return res.status(500).json(err)
            res.status(200).json({
                message: 'Updated succeeded'
            })
        })
    })

})

router.get('/in_cart/:cart_id', (req, res, next) => {
    let {
        cart_id
    } = req.params;
    let sqlFind = `
  SELECT CI.*, P.id as product_id,P.name,P.description,P.quantity_in_stock,
  P.price,P.htx_id,P.category_id, 
  C.cate_name, I.id as product_avatar,I.url, 
  H.name as htx_name FROM cart_item CI JOIN cart ca on ca.id = CI.cart_id 
  JOIN product P ON CI.product_id=P.id JOIN category C ON P.category_id = C.id 
  JOIN image_product IP ON IP.product_image=P.id 
  JOIN image I on I.id=IP.image_id 
  JOIN htx H ON H.id = P.htx_id 
  WHERE ca.user_id=${cart_id} AND in_cart = true AND IP.main_image=true`

    connection.query(sqlFind, (err, docs) => {
        if (err) return res.status(500).json(err)
        const response = {
            count: docs.length,
            product_list: docs.map(doc => {

                return {
                    item_id: doc.id,
                    product_id: doc.product_id,
                    name: doc.name,
                    image: {
                        id: doc.product_avatar,
                        url: doc.url
                    },
                    category: {
                        id: doc.category_id,
                        cate_name: doc.cate_name,

                    },
                    description: doc.description,
                    price: doc.price,
                    quantity_in_stock: doc.quantity_in_stock,
                    htx: {
                        id: doc.htx_id,
                        htx_name: doc.htx_name
                    },
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        URL: 'http://localhost:4333/product/' + doc.product_id
                    }
                }
            })
        }
        res.status(200).json(response);
    })
})

router.get('/', (req, res) => {
    let sqlFindAll = 'SELECT C.*,U.id as user_id,U.phone,U.email,U.first_name,U.last_name,U.avatar,U.address,U.role FROM cart C JOIN users U'
    connection.query(sqlFindAll, (err, docs) => {
        if (err) throw err
        const response = {
            count: docs.length,
            list_cart: docs.map(doc => {
                return {
                    cart_id: doc.id,
                    user_id: doc.user_id,
                    email: doc.email,
                    first_name: doc.first_name,
                    last_name: doc.last_name,
                    phone: doc.phone,
                    password: doc.password,
                    avatar: doc.avatar,
                    address: doc.address,
                    role: doc.role,
                    request: {
                        type: 'GET',
                        URL: 'http://localhost:4333/cart/' + doc.id
                    }
                }
            })
        }
        res.status(200).json(response);
    })
})

// router.get('/cartItem/:id_bill', (req, res, next) => {
//     let {
//         id_bill
//     } = req.params;
//     let sqlFind = `SELECT cart_item.id from cart_item WHERE cart_item.bill_id=${id_bill}`;
//     connection.query(sqlFind, (err, result) => {
//         if (err) return res.status(500).json(err);
//         // res.status(200).json({ message: result })
//         let sqlUpdate = `UPDATE cart_item SET in_cart=0 WHERE id = ${result[0].id}`;
//         connection.query(sqlUpdate, (err) => {
//             if (err) return res.status(500).json(err)
//             res.status(200).json({
//                 message: 'Updated succeeded'
//             })
//         })
//     })
// })

router.delete('/:cart_id', (req, res) => {
    let {
        cart_id
    } = req.params
    let sqlDelete = `DELETE FROM cart_item WHERE cart_id = ${cart_id} AND in_cart = true`
    connection.query(sqlDelete, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({
            message: 'Xóa giỏ hàng thành công',
            request: {
                type: 'GET',
                URL: 'http://localhost:4333/cart/' + cart_id
            }
        })
    })
})
router.get(`/cartDetail/:id_product/:id_cart`, (req, res) => {
    let {
        id_product,
        id_cart
    } = req.params;
    let sqlFind = `SELECT * from cart_item WHERE cart_item.product_id = ${id_product} AND cart_item.cart_id = ${id_cart}`;
    connection.query(sqlFind, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({
            message: 'load success',
            detail: result[0]
        })
    })
})
router.delete('/item/:item_id', (req, res) => {
    let {
        item_id
    } = req.params
    let sqlDelete = `DELETE FROM cart_item WHERE id = ${item_id}`
    connection.query(sqlDelete, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'Xóa sản phẩm thành công',
            request: {
                type: 'GET',
                URL: 'http://localhost:4333/cart/'
            }
        })
    })
})
//cập nhật số lượng trong giỏ hàng
router.put('/cart_item_put/:item_id', (req, res, next) => {

    let sqlUpdate = `UPDATE cart_item SET quantity= ${req.body.quantity} WHERE id = ${req.params.item_id} `
    connection.query(sqlUpdate, (err) => {
        if (err) return res.status(500).json(err)
        res.status(200).json({
            message: 'Updated succeeded'
        })
    })
})
//update cart sau khi thanh toán thành công

module.exports = router;