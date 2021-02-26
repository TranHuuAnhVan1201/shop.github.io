const express = require('express');
//khai bao router
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'tr-n-h-u-ngh-a-khu-d-n-c-91b-nguy-n-v-n-linh',
    api_key: '546597688533694',
    api_secret: 'S2c8Rby6v0RmpxrwmcD312V-YGg',
    enhance_image_tag: true,
    static_file_support: false
})
const connection = require('../database/connect');
//update hình
router.post('/uploads', (req, res, next) => {
    var file = req.files.img;
    cloudinary.uploader.upload(file.tempFilePath,
        function(error, result) {
            if (error) {
                return res.status(500).json({
                    message: "Chưa up ảnh đại diện thành công"
                })
            } else {
                return res.status(200).json({
                    message: 'update success',
                    img: result
                })
            }

        });

})
//add admin
router.get('/all/admin', (req, res) => {
    let sql = "SELECT * FROM users WHERE users.role=1 AND users.isDeleted=1";
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (result.length < 1) {
            res.status(404).json("NOT")
        } else {
            let data = {
                message: "Load thành công",
                result: result
            }
            return res.status(200).json(data);
        }

    })
})
//all quanly htx
router.get('/all/quanly', (req, res) => {
    let sql = "SELECT * FROM users WHERE users.role=4 AND users.isDeleted=1";
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (result.length < 1) {
            res.status(404).json("NOT")
        } else {
            let data = {
                message: "Load thành công",
                result: result
            }
            return res.status(200).json(data);
        }

    })
})
// get all xavien
router.get('/all/xavien', (req, res) => {
    let sql = "SELECT * FROM users WHERE users.role=3 AND users.isDeleted=1";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length < 1) {
            return res.status(200).json("NOT")
        } else {
            let data = {
                message: "Load thành công",
                result: result
            }
            return res.status(200).json(data);
        }


    })
})
// get all khách hàng
router.get('/all/custommer', (req, res) => {
    let sql = "SELECT * FROM users WHERE users.role=2 AND users.isDeleted = 1";
    connection.query(sql, (err, result) => {
        if (result.length < 1) {
            res.status(200).json("NOT")
        }
        if (err) throw err;
        let data = {
            message: "Load thành công",
            result: result
        }
        res.status(200).json(data);
    })
})
router.get('/getone/all/:id', (req, res) => {
    let data = `SELECT *from users where users.id =${req.params.id} `;
    connection.query(data, (err, result) => {
        if (result.length < 1) {
            res.status(200).json("NOT")
        }
        if (err) throw err;
        let data = {
            message: "Load thành công",
            result: result[0]
        }
        res.status(200).json(data);
    })
})
router.put('/delete/all/:id', (req, res) => {

    let update = `UPDATE users SET users.isDeleted = false where users.id = ${req.params.id}`;
    connection.query(update, (err, result) => {
        if (err) throw err
        res.status(200).json({
            message: 'delete thành công',
            result: result
        })
    })
})
// code mới xét duyệt hợp tác xã
router.put(`/update/all/:id`, (req, res) => {
    let data1 = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    }
    console.log(data1)
    let sqlUpdate = `UPDATE users SET ? WHERE users.id=${req.params.id}`;
    connection.query(sqlUpdate, [data1], (err, result) => {
        if (result.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (err) throw err
        res.status(200).json({
            message: 'cập nhật thành công',
            result: result
        })
    })
})
//dang ky htx 
router.put('/register_htx/:user_id', (req, res) => {
    let {
        user_id
    } = req.params;
    let sqlFind = `SELECT * FROM users WHERE id=${user_id}`
    connection.query(sqlFind, null, (err, user) => {
        if (user.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (user[0].htx_id !== null) return res.status(401).json({
            message: 'Bạn đã thuộc 1 htx khác'
        })
        if (err) throw err
        let {
            htx_id
        } = req.body
        let sqlUpdate = `
            UPDATE users SET htx_id = '${htx_id}' WHERE users.id = ${user_id}`
        connection.query(sqlUpdate, null, err => {
            if (err) throw err
            return res.status(200).json({
                message: 'cập nhật thành công',
                user: {
                    id: user_id,
                    htx_id: htx_id,
                }
            })
        })
    })
})
//admin htx check user đăng ký, nếu check_htx === fasle thì user đó chưa thuộc htx
router.put('/check_htx/:user_id', (req, res) => {
    let {
        user_id
    } = req.params;
    let sqlFind = `SELECT * FROM users WHERE id=${user_id}`
    connection.query(sqlFind, null, (err, user) => {
        if (user.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (user[0].htx_id === null) return res.status(401).json({
            message: 'User chưa đăng ký không thể check'
        })
        if (err) throw err
        let {
            check_htx
        } = req.body
        let sqlUpdate = `
            UPDATE users SET check_htx = '${check_htx}' WHERE users.id = ${user_id}`
        connection.query(sqlUpdate, null, err => {
            if (err) throw err

            return res.status(200).json({
                message: 'cập nhật thành công',
                user: {
                    id: user_id,
                    check_htx: check_htx,
                }
            })
        })
    })
})
//đăng ký moi
router.post('/signup', (req, res, next) => {
    let sqlFind = `SELECT * FROM users WHERE email = "${req.body.email}"`
    connection.query(sqlFind, (err, result) => {
        if (result.length == 0) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                let userData = {
                    email: req.body.email,
                    password: hash,
                    role: req.body.role,
                    avatar: req.body.avatar,
                    phone: req.body.phone,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    htx_id: req.body.htx_id
                }
                if (err) {
                    return res.status(500).json({
                        message: err
                    });
                }
                let sqlSignup = 'INSERT INTO users SET ?'
                connection.query(sqlSignup, userData, (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            message: err
                        })
                    }
                    return res.status(200).json({
                        message: 'dang ky thanh cong',
                        user: result
                    })
                })

            })
        } else {
            return res.status(409).json({
                message: 'Email đã tồn tại!!'
            });
        }
    })
});
// đăng ký hợp tác xã
router.post('/signup/htx', (req, res, next) => {
    let sqlFind = `SELECT * FROM users WHERE email = "${req.body.email}"`
    connection.query(sqlFind, (err, result) => {
        if (result.length == 0) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                let userData = {
                    email: req.body.email,
                    password: hash,
                    role: req.body.role,
                    avatar: req.body.avatar,
                    phone: req.body.phone,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    htx_id: req.body.htx_id
                }
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    let sqlSignup = 'INSERT INTO users SET ?'
                    connection.query(sqlSignup, userData, (err, resutl) => {
                        if (err) throw err
                        res.status(200).json({
                            message: 'thanhcong',
                            user: resutl
                        })
                    })
                }
            })
        } else {
            return res.status(409).json({
                error: 'Email đã tồn tại!!'
            });
        }
    })
});
//đăng nhập htx 
router.put('/register_htx/:user_id', (req, res) => {
    let {
        user_id
    } = req.params;
    let sqlFind = `SELECT * FROM users WHERE id=${user_id}`
    connection.query(sqlFind, null, (err, user) => {
        if (user.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (user[0].htx_id !== null) return res.status(401).json({
            message: 'Bạn đã thuộc 1 htx khác'
        })
        if (err) throw err
        let {
            htx_id
        } = req.body
        let sqlUpdate = `
            UPDATE users SET htx_id = '${htx_id}' WHERE users.id = ${user_id}`
        connection.query(sqlUpdate, null, err => {
            if (err) throw err
            return res.status(200).json({
                message: 'cập nhật thành công',
                user: {
                    id: user_id,
                    htx_id: htx_id
                }
            })
        })
    })
})
//get các xã viên chợ duyệt xác nhận vào hợp tác xã
router.get('/xetduyet/htx', (req, res, next) => {
    let sqlFind = `SELECT u.* ,htx.name from users u
      INNER JOIN htx on u.htx_id = htx.id
      WHERE u.role = 3 AND u.check_htx = false`;
    connection.query(sqlFind, null, (err, user) => {
        if (user.length < 0) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (err) throw err
        let data = {
            message: "Load susscess",
            xetduyet: user
        }
        res.status(200).json(data)
    })

});
//admin htx check user đăng ký, nếu check_htx === fasle thì user đó chưa thuộc htx
router.put('/check_htx/:user_id', (req, res) => {
    let {
        user_id
    } = req.params;
    let sqlFind = `SELECT * FROM users WHERE id=${user_id}`
    connection.query(sqlFind, null, (err, user) => {
        if (user.length < 1) return res.status(404).json({
            message: 'NOT FOUND'
        })
        if (user[0].htx_id === null) return res.status(401).json({
            message: 'User chưa đăng ký không thể check'
        })
        if (err) throw err
        let {
            check_htx
        } = req.body
        let sqlUpdate = `
            UPDATE users SET check_htx = '${check_htx}' WHERE users.id = ${user_id}`
        connection.query(sqlUpdate, null, err => {
            if (err) throw err

            return res.status(200).json({
                message: 'cập nhật thành công',
                user: {
                    id: user_id,
                    check_htx: check_htx,
                    role: role
                }
            })
        })
    })
})
//xavien này hiển thị trong giỏ hàng lúc vào danh sách sản phẩm
router.get('/xavien', (req, res, next) => {
    let sqlFind = 'SELECT users.id,users.email,users.phone,role.roleName from users  INNER JOIN role on users.role=role.id WHERE users.role=3';
    connection.query(sqlFind, (err, xavien) => {
        if (xavien.length < 1) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        }
        if (err) throw err;
        // console.log(xavien)
        let response = {
            message: "Load Success",
            xavien: xavien.map(xavien => {
                return {
                    id: xavien.id,
                    name: xavien.email,
                    phone: xavien.phone,
                    result: []
                }
            })
        }
        res.status(200).json(response)

    })
})
router.get('/xavien/cart_item', (req, res, next) => {
    let sqlFind = 'SELECT users.id,users.email,users.phone,role.roleName from users  INNER JOIN role on users.role=role.id WHERE users.role=3';
    connection.query(sqlFind, (err, xavien) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (xavien.length < 1) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        } else {
            let response = {
                message: "Load Success",
                xavien: xavien.map(xavien => {
                    return {
                        id: xavien.id,
                        name: xavien.email,
                        phone: xavien.phone,
                        result: []
                    }
                })
            }
            return res.status(200).json(response)
        }



    })
})
router.get('/xavien/:id', (req, res) => {
    let sqlFind = `SELECT u.*,htx.name,image.url as image_htx FROM users u
INNER JOIN htx ON htx.id = u.htx_id
INNER JOIN image ON htx.avatar = image.id
WHERE u.id =${req.params.id}`;
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
                message: "load success",
                result: result[0]
            }
            return res.status(200).json(data);
        }

    })
})
router.get('/admin/:id', (req, res, next) => {
    let {
        id
    } = req.params;
    let sqlFind = `SELECT * from users WHERE role = 1 AND  id=${id} `;
    connection.query(sqlFind, (err, resutl) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (resutl.length < 1) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        } else {
            let response = {
                message: "Load Success",
                admin: resutl[0]
            }
            return res.status(200).json(response)
        }

    })
})
router.get('/quanly/:id', (req, res, next) => {
    let {
        id
    } = req.params;
    let sqlFind = `SELECT * from users WHERE role = 4 AND  id=${id} `;
    connection.query(sqlFind, (err, resutl) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (resutl.length < 1) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        } else {
            let response = {
                message: "Load Success",
                admin: resutl[0]
            }
            return res.status(200).json(response)
        }

    })
})
router.get('/custommerdetail/:id', (req, res, next) => {
    let {
        id
    } = req.params;
    let sqlFind = `SELECT * from users WHERE role = 2 AND  id=${id} `;
    connection.query(sqlFind, (err, resutl) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (resutl.length < 0) {
            res.status(404).json({
                message: "NOT FOUND"
            })
        } else {
            let response = {
                message: "Load Success",
                custommer: resutl[0]
            }
            return res.status(200).json(response)
        }

    })
})

// router.get('/all_custommer', (req, res, next) => {
//     let sqlFind = 'SELECT users.id,users.email,role.roleName from users  INNER JOIN role on users.role=role.id WHERE users.role=2';
//     connection.query(sqlFind, (err, xavien) => {
//         if (xavien.length < 1) {
//             return res.status(404).json({
//                 message: "NOT FOUND"
//             })
//         }
//         if (err) throw err;
//         let response = {
//             message: "Load Success",
//             custommer: xavien
//         }
//         res.status(200).json(response)

//     })
// })
router.get('/all', (req, res, next) => {
    let sqlFind = 'SELECT users.id,users.email,role.roleName from users  INNER JOIN role on users.role=role.id WHERE users.role=2';
    connection.query(sqlFind, (err, xavien) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (xavien.length < 1) {
            return res.status(404).json({
                message: "NOT FOUND"
            })
        } else {
            let response = {
                message: "Load Success",
                custommer: xavien
            }
            return res.status(200).json(response)
        }



    })
})
router.post('/login', (req, res, next) => {
    // console.log(process.env.JWT_KEY)

    let sqlFind = `SELECT users.*,role.roleName,role.description, role.id as idRole FROM users JOIN role ON users.role = role.id WHERE email = "${req.body.email}"`
    // console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(sqlFind);
    connection.query(sqlFind, (err, users) => {
        if (users.length < 1) {
            return res.status(404).json({
                message: 'Tên đăng nhập hoặc mật khẩu không đúng'
            });
        } else {
            // console.log(users[0].password);
            bcrypt.compare(req.body.password, users[0].password, (err, result) => {
                if (err) {
                    console.log(err + ' ')
                    return res.status(401).json({
                        message: 'auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            Email: users[0].email,
                            Id: users[0].id,
                            address: users[0].address,
                            RoleName: users[0].roleName,
                        },
                        // "jessica",
                        process.env.JWT_KEY, {
                            expiresIn: '1h'
                        }
                    );
                    return res.status(200).json({
                        message: 'auth sucessful',
                        token: token
                    })
                } else {
                    return res.status(401).json({
                        message: 'mật khâu không đúng rồi'
                    });
                };
                return res.status(401).json({
                    message: 'auth failed'
                });

            })
        }



    })
});
router.get('/htx', (req, res, next) => {
    let sqlFind = `SELECT U.*,R.roleName,H.name as htx_name,H.address_id as htx_address_id,A.chitiet,A.xaid
    FROM users U JOIN role R ON U.role = R.id 
    JOIN htx H ON H.id = U.htx_id 
    JOIN address A On A.id = U.address 
    WHERE htx_id IS NOT NULL and check_htx = true`
    connection.query(sqlFind, (err, users) => {
        console.log(users)
        if (err) throw err
        if (users.length < 1) {
            return res.status(404).json({
                message: 'not found'
            });
        } else {
            const response = {
                count: users.length,
                users: users.map(user => {
                    return {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        phone: user.phone,
                        password: user.password,
                        avatar: user.avatar,
                        address: {
                            id: user.address,
                            chitiet: user.chitiet,
                            xaid: user.xaid
                        },
                        htx: {
                            id: user.htx_id,
                            htx_name: user.htx_name,
                            htx_address_id: user.htx_address_id
                        },
                        create_at: user.create_at,
                        update_at: user.update_at,
                        role: {
                            id: user.role,
                            roleName: user.roleName,
                        },
                        request: {
                            type: 'GET',
                            URL: 'http://localhost:3000/users/' + user.id
                        }

                    }

                })
            }
            res.status(200).json(response);
        }
    })
});
router.get('/customer', (req, res, next) => {
    let sqlFind = `SELECT U.*,R.roleName,A.chitiet,A.xaid FROM users U 
    JOIN role R ON U.role = R.id 
    JOIN address A On A.id = U.address 
    WHERE htx_id IS NULL OR check_htx = false`
    connection.query(sqlFind, (err, users) => {

        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (users.length < 1) {
            return res.status(404).json({
                message: 'not found'
            });
        } else {
            const response = {
                count: users.length,
                users: users.map(user => {
                    return {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        phone: user.phone,
                        password: user.password,
                        avatar: user.avatar,
                        address: {
                            id: user.address,
                            chitiet: user.chitiet,
                            xaid: user.xaid
                        },
                        create_at: user.create_at,
                        update_at: user.update_at,
                        role: {
                            id: user.role,
                            roleName: user.roleName,
                        },
                        request: {
                            type: 'GET',
                            URL: 'http://localhost:3000/users/' + user.id
                        }

                    }

                })
            }
            res.status(200).json(response);
        }
    })
});

router.get('/htx/:userId', (req, res, next) => {
    let sqlFind = `SELECT U.*,R.roleName,H.name as htx_name,H.address_id as htx_address_id,A.chitiet,A.xaid
    FROM users U JOIN role R ON U.role = R.id 
    JOIN htx H ON H.id = U.htx_id
    JOIN address A On A.id = U.address
    WHERE U.id =${req.params.userId}`
    // console.log(sqlFind)
    connection.query(sqlFind, (err, users) => {
        if (err) {
            return res.status(500).json({
                message: err
            })
        }
        if (users.length < 1) {
            return res.status(404).json({
                message: 'not found'
            });
        } else {
            const response = {
                count: users.length,
                users: users.map(user => {
                    return {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        phone: user.phone,
                        password: user.password,
                        avatar: user.avatar,

                        address: {
                            id: user.address,
                            chitiet: user.chitiet,
                            xaid: user.xaid
                        },
                        htx: {
                            id: user.htx_id,
                            htx_name: user.htx_name,
                            htx_address_id: user.htx_address_id
                        },
                        create_at: user.create_at,
                        update_at: user.update_at,
                        role: {
                            id: user.role,
                            roleName: user.roleName,
                        },
                        request: {
                            type: 'GET',
                            URL: 'http://localhost:3000/users/' + user.id
                        }

                    }

                })
            }
            res.status(200).json(response);
        }
    })
});

router.get('/customer/:userId', (req, res, next) => {
    let sqlFind = `SELECT U.*,R.roleName,A.chitiet,A.xaid
    FROM users U JOIN role R ON U.role = R.id 
    JOIN address A On A.id = U.address
    WHERE U.id =${req.params.userId}`
    connection.query(sqlFind, (err, users) => {
        if (err) throw err
        if (users.length < 1) {
            return res.status(404).json({
                message: 'not found'
            });
        } else {
            const response = {
                count: users.length,
                users: users.map(user => {
                    return {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        phone: user.phone,
                        password: user.password,
                        avatar: user.avatar,
                        address: {
                            id: user.address,
                            chitiet: user.chitiet,
                            xaid: user.xaid
                        },
                        create_at: user.create_at,
                        update_at: user.update_at,
                        role: {
                            id: user.role,
                            roleName: user.roleName,
                        },
                        request: {
                            type: 'GET',
                            URL: 'http://localhost:3000/users/' + user.id
                        }

                    }

                })
            }
            res.status(200).json(response);
        }
    })
});

module.exports = router;