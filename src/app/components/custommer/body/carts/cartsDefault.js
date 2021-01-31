import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './carts.scss';
import *as actions from '../../../../actions/custommer/products/Product';
function CartsDefault(props) {
    const listCarts = useSelector(state => state.GetCarts);
    const dispatch = useDispatch();
    const deleteProductInCart = (item) => {
        dispatch(actions.deleteProductInCart(item));
    }
    const Increase_Quantity = (increase) => {
        dispatch(actions.getIncrease_Quantity(increase));
    }
    const Decrease_Quantity = (decrease) => {
        dispatch(actions.getDecrease_Quantity(decrease));
    }

    return (
        <section>
            <div className="carts">
                <h2 className="text-center">Giỏ hàng của bạn</h2>
                <div className="cart-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá </th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                listCarts.items.map((value, key) => {
                                    return(
                                        <tr key={key}>
                                            <td><img src={value.url} alt={123}></img>
                                            </td>
                                            <td>{value.title}</td>
                                            <td className="td-group">
                                                <span onClick={() => Decrease_Quantity(key)}>-</span>
                                                <span>{value.quantity}</span>
                                                <span onClick={() => Increase_Quantity(key)}>+</span>
                                            </td>
                                            <td>{value.price} đ</td>
                                            <td>1000000 đ</td>
                                            <td onClick={() => deleteProductInCart(key)}>xóa</td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}>Tổng cộng: </td>
                                <td>180.0000 đ</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="btn-carts">
                    <Link to="/" className="btn-back link">
                        <i className="fas fa-long-arrow-alt-left"></i>Tiếp tục mua sắm
                    </Link>
                    <Link to="/checkout" className="btn-checkout link">
                        <i className="fas fa-long-arrow-alt-right"></i> Thanh toán
                    </Link>

                </div>
            </div>
        </section>


    );
}

export default CartsDefault;