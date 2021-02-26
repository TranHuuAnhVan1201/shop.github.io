const express = require("express");
//khai bao router
const router = express.Router();
const connection = require("../database/connect");
//get sản phẩm mới đăng
router.get("/all/max", (req, res) => {
  let data = `SELECT product.id,product.name,product.price,product.description,product.quantity_in_stock,image.url
              FROM product
              INNER JOIN image_product on image_product.product_image= product.id
              INNER JOIN image on image_product.image_id = image.id
              WHERE image_product.main_image = true AND product.isDeleted = true
              ORDER BY product.id DESC
              LIMIT 8`;
  connection.query(data, (err, result) => {
    if (err) return res.status(500).json({
      message: err
    })

    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      })
    } else {
      return res.status(200).json({
        message: "Load Cuccess",
        result: result
      })
    }
  })
})
router.get("/all/most", (req, res) => {
  let data = `SELECT cart_item.product_id,SUM(cart_item.quantity) as soluongban,product.name,product.price,image.url
from cart_item
INNER JOIN bill on bill.id = cart_item.bill_id
INNER JOIN product on product.id= cart_item.product_id
INNER JOIN image_product on image_product.product_image= product.id
INNER JOIN image on image_product.image_id = image.id
WHERE bill.status="đã thanh toán" AND cart_item.isDeleted= true AND image_product.main_image = true AND product.isDeleted = true
GROUP BY cart_item.product_id
ORDER BY soluongban DESC
LIMIT 5`;
  connection.query(data, (err, result) => {
    if (err) return res.status(500).json({
      message: err
    })


    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      })
    } else {
      return res.status(200).json({
        message: "Load Cuccess",
        result: result
      })
    }
  })
})

//get theo sản phẩm category
router.get("/:id", (req, res) => {
  let sqlFind = `SELECT product.id,product.name,product.quantity_in_stock,product.price,product.description,product.category_id,product.htx_id,image.url FROM product
  INNER JOIN image_product ON product.id = image_product.product_image
  INNER JOIN image ON image_product.image_id = image.id
  WHERE  image_product.main_image=1 AND category_id=${req.params.id}`;
  connection.query(sqlFind, null, (err, result) => {
    if (result.length < 0)
      return res.status(404).json({
        message: "NOT FOUND"
      });
    if (err) throw err;
    let response = {
      message: "load sucessful",
      result: result,
    };
    res.status(200).json(response);
  });
});


//get tất cả sản phẩm
router.post("/search", (req, res) => {
  let { productName} = req.body;
  let sqlsearch = `SELECT 
  product.id,product.name,product.quantity_in_stock,product.price,product.description,product.isDeleted,
  image.url,users.id as id_xavien,users.email,htx.name as name_htx,category.cate_name FROM product 
  INNER JOIN image_product ON product.id = image_product.product_image 
  INNER JOIN image ON image.id = image_product.image_id 
  INNER JOIN users ON product.user_id=users.id INNER JOIN htx ON product.htx_id=htx.id 
  INNER JOIN category on product.category_id=category.id
WHERE product.name LIKE '%${req.body.productName}%' AND product.isDeleted = 1 AND image_product.main_image=1`;
  connection.query(sqlsearch, null, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });
    } else {
      let response = {
        message: "load sucessful",
        result: result,
      };
      return res.status(200).json(response);
    }


  });

});

//get tất cả sản phẩm
router.get("/", (req, res) => {
  let sqlFind = `SELECT 
  product.id,product.name,product.quantity_in_stock,product.price,product.description,product.isDeleted,
  image.url,users.id as id_xavien,users.email,htx.name as name_htx,category.cate_name FROM product 
  INNER JOIN image_product ON product.id = image_product.product_image 
  INNER JOIN image ON image.id = image_product.image_id 
  INNER JOIN users ON product.user_id=users.id INNER JOIN htx ON product.htx_id=htx.id 
  INNER JOIN category on product.category_id=category.id WHERE image_product.main_image=1 && product.isDeleted=1
  `;
  connection.query(sqlFind, null, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });
    } else {
      let response = {
        message: "load sucessful",
        result: result,
      };
      return res.status(200).json(response);
    }


  });
});
//get tất cả sản phẩm
router.get("/one_xavien/:id", (req, res) => {
  let sqlFind = `SELECT 
  product.id,product.name,product.quantity_in_stock,product.price,product.description,product.isDeleted,
  image.url,users.id as id_xavien,users.email,htx.name as name_htx,category.cate_name FROM product 
  INNER JOIN image_product ON product.id = image_product.product_image 
  INNER JOIN image ON image.id = image_product.image_id 
  INNER JOIN users ON product.user_id=users.id INNER JOIN htx ON product.htx_id=htx.id 
  INNER JOIN category on product.category_id=category.id 
  WHERE image_product.main_image=1 && product.isDeleted=1 AND product.user_id=${req.params.id}`;
  connection.query(sqlFind, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });
    } else {
      let response = {
        message: "load sucessful",
        result: result,
      };
      return res.status(200).json(response);
    }


  });
});
//get xã viên trong billage
router.get(`/getone/id_xavien/:id_khachhang`, (req, res) => {

  let sqlFind = `SELECT product.price,cart_item.quantity,product.user_id,cart_item.cart_id
from cart_item 
INNER JOIN product on cart_item.product_id = product.id
INNER JOIN cart on cart.id = cart_item.cart_id
WHERE in_cart = true AND cart.user_id = ${req.params.id_khachhang}`;

  connection.query(sqlFind, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });
    } else {
      let response = {
        message: "load sucessful",
        result: result,
      };
      return res.status(200).json(response);
    }


  })
})
router.get(`/cart_item/one/xavien/:id_xavien`, (req, res) => {
  let sqlFind = `SELECT cart_item.id,product.name,cart_item.quantity,product.price
FROM cart_item 
INNER JOIN product on product.id = cart_item.product_id
WHERE product.user_id =${req.params.id_xavien} AND in_cart = true`;
  connection.query(sqlFind, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });
    } else {
      let response = {
        message: "load sucessful",
        result: result
      };
      return res.status(200).json(response);
    }


  })
})
//get tất cả sản phẩm của xã viên đã bán
router.get("/all/xavien/:id", (req, res) => {
  let sqlFind = `SELECT p.*,cart_item.quantity,cart_item.bill_id,bill.total_price,bill.status,image.url,
shipping_address.name as customer,shipping_address.phone,htx.name as name_htx
from product p
INNER JOIN cart_item on cart_item.product_id = p.id
INNER JOIN bill on cart_item.bill_id = bill.id
INNER JOIN image_product on p.id = image_product.product_image
INNER JOIN image on image.id = image_product.image_id
INNER JOIN shipping_address on shipping_address.id=bill.shipping_address_id
INNER JOIN htx on htx.id=p.htx_id
WHERE p.user_id = ${req.params.id} AND p.isDeleted = 1 AND image_product.main_image=1 AND bill.status = "đã thanh toán"`;
  connection.query(sqlFind, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      })
    }
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      })
    } else {
      let data = {
        message: "Load success",
        result: result
      }
      return res.status(200).json(data);
    }



  })

})


//post sản phẩm
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
          if (err) {
            return res.status(500).json({
              message: err
            })
          }
          let sqlFindOne = `SELECT * FROM image WHERE id = ${result.insertId}`
          connection.query(sqlFindOne, null, (err, img) => {
            if (err) {
              return res.status(500).json({
                message: err
              })
            }
            if (img.length < 1) {
              return res.status(404).json({
                message: "NOT FOUND"
              })
            } else {
              let ob = {
                id: img[0].id,
                type: img[0].type,
                url: img[0].url,
                main_image: image.main_image ? true : false
              }
              a.push(ob)
              if (a.length === imgArr.length) {
                resolve(a)
              }
            }


          })
        })
      })
    })
  }
  let addProduct = (product) => {
    return new Promise((resolve, reject) => {
      let sqlInsert = 'INSERT INTO product SET ?';
      connection.query(sqlInsert, product, (err, result) => {
        if (err) return reject(err)
        let sqlFindOne = `SELECT * FROM product WHERE id = ${result.insertId}`
        connection.query(sqlFindOne, null, (err, res_product) => {
          if (err) return reject(err)
          if (res_product.length < 1) reject(new Error('NOT FOUND'));
          resolve(res_product)
        })
      })
    })
  }
  let addImgProd = (product, imgArr) => {
    return new Promise((resolve, reject) => {
      let sqlInsert = 'INSERT INTO image_product SET ?';
      imgArr.map(image => {
        let data = {
          image_id: image.id,
          product_image: product[0].id,
          main_image: image.main_image
        }
        connection.query(sqlInsert, data, (err) => {
          if (err) return reject(err);
          resolve(true)

        })
      })
    })
  }
  let {
    product,
    imgArr
  } = req.body
  Promise.all([addProduct(product), addImage(imgArr)]).then(value => {
    addImgProd(value[0], value[1]).then(result => {
      if (result) {
        return res.status(200).json({
          product: value[0],
          imgArr: value[1]
        })
      }

    }).catch(err => {
      return res.status(500).json(err)
    })
  }).catch(err => {
    res.status(500).json(err)
  })
})
//put sản phẩm
router.put('/:product_id', (req, res) => {
  let {
    product_id
  } = req.params
  let {
    name,
    quantity_in_stock,
    price,
    description,
    category_id,
    htx_id,
    user_id
  } = req.body
  let sqlUpdate = `
    UPDATE product 
    SET name=${name},quantity_in_stock=${quantity_in_stock},
    price=${price},description=${description},category_id=${category_id},
    htx_id=${htx_id},user_id=${user_id} 
    WHERE id = ${product_id}`
  connection.query(sqlUpdate, (err) => {
    if (err) return res.status(500).json({
      message: err
    })
    return res.status(200).json({
      message: 'cập nhật thông tin sản phẩm thành công'
    })
  })
})

//get chi tiết sản phẩm
router.get("/detail/:id", (req, res) => {

  let sqlFind = `SELECT  product.id,product.name,product.quantity_in_stock,product.price,
    product.description,product.category_id,product.htx_id,image.id as imgage_id,image.url,image_product.main_image,
    users.email,users.phone,users.avatar,users.id as id_xavien,
    htx.name as namehtx,
    category.cate_name,
    address.chitiet
    FROM product 
    INNER JOIN image_product ON product.id = image_product.product_image 
    INNER JOIN image ON image_product.image_id=image.id
    INNER JOIN users ON product.user_id=users.id
    INNER JOIN address on users.address =address.id
    INNER JOIN htx on product.htx_id = htx.id
    INNER JOIN category ON product.category_id= category.id
    WHERE product.id=${req.params.id}`;
  connection.query(sqlFind, null, (err, result) => {
    if (err) return res.status(500).json({
      message: err
    })
    if (result.length < 1) {
      return res.status(404).json({
        message: "NOT FOUND"
      });

    } else {
      let response = {
        message: "load sucessful",
        product: {
          product_detail: {
            "id": result[0].id,
            "name": result[0].name,
            "price": result[0].price,
            "quantity_in_stock": result[0].quantity_in_stock,
            "url_product": result[0].url,
            "description": result[0].description,
            "category_id": result[0].category_id,
            "htx_id": result[0].htx_id,
            "id_xavien": result[0].id_xavien,
            "namehtx": result[0].namehtx,
            "cate_name": result[0].cate_name,
            "email": result[0].email,
            "phone": result[0].phone,
            "avatar": result[0].avatar,
            "address": result[0].address
          },
          imgArr: result.map(image => {
            return {
              imgage_id: image.imgage_id,
              url: image.url,
              main_image: image.main_image
            }
          })
        }

      };
      return res.status(200).json(response);
    }


  });
});
// router.get("/detail/:id", (req, res) => {
//   let sqlFind = `SELECT product.id,product.name,product.quantity_in_stock,product.description,product.category_id,product.htx_id,image.url
//   FROM product 
//   INNER JOIN image_product ON product.id = image_product.product_image 
//   INNER JOIN image ON image_product.image_id=image.id
//   WHERE product.id=${req.params.id}`;
//   connection.query(sqlFind, null, (err, result) => {
//     if (result.length < 0)
//       return res.status(404).json({ message: "NOT FOUND" });
//     if (err) throw err;
//     let response = {
//       message: "load sucessful",
//       result: result,
//     };
//     res.status(200).json(response);
//   });
// });
//khai bao router

router.delete("/:product_id", (req, res) => {
  let sqlDelete = `SELECT *from product WHERE id=${req.params.product_id}`;
  connection.query(sqlDelete, null, (err, product) => {
    if (err) return res.status(500).json({
      message: err
    })
    if (product.length < 0) {
      return res.status(404).json({
        message: "NOT FOUND"
      });

    }

    let updateProduct = {
      id: product[0].id,
      name: product[0].name,
      quantity_in_stock: product[0].quantity_in_stock,
      price: product[0].price,
      description: product[0].description,
      category_id: product[0].category_id,
      htx_id: product[0].htx_id,
      user_id: product[0].user_id,
      isDeleted: 0
    }
    let sqlUpdate = `UPDATE product SET ? WHERE id= ?`;
    connection.query(sqlUpdate, [updateProduct, product[0].id], (err, update) => {
      if (err) return res.status(500).json({
        message: err
      })
      return res.status(200).json({
        message: "xóa sản phẩm thành công",
      });
    })
  })
});
router.put("/update_product/:product_id", (req, res) => {
  let {
    product_id
  } = req.params;
  let {
    name,
    quantity_in_stock,
    price,
    description,
    category_id,
    htx_id,
    user_id,
  } = req.body;
  let data = {
    name: name,
    quantity_in_stock: quantity_in_stock,
    price: price,
    description: description,
    category_id: category_id,
    htx_id: htx_id,
    user_id: user_id,
  }
  console.log(product_id)
  let sqlUpdate = `
    UPDATE product
    SET  ?
    WHERE id = ?`;

  connection.query(sqlUpdate, [data, product_id], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({
      message: "cập nhật thông tin sản phẩm thành công",
    });
  });
});
router.put("/update_quatity_in_stock/:id", (req, res) => {
  let data = {
    "quantity_in_stock": req.body.quantity_in_stock
  }
  let sqlFind = `UPDATE product
    SET  ?
    WHERE id = ${req.params.id}`;
  connection.query(sqlFind, [data], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({
      message: "cập nhật thông tin sản phẩm thành công",
    });
  })
})
module.exports = router;