import React from 'react';
import { Link } from 'react-router-dom';
import './carts.scss';

function cartsDefault(props) {
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
                            <tr>
                                <td>img</td>
                                <td>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                <td>1</td>
                                <td>10000000 đ</td>
                                <td>1000000 đ</td>
                                <td>xóa</td>
                            </tr>
                            <tr>
                                <td>img</td>
                                <td>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                <td>1</td>
                                <td>10000000 đ</td>
                                <td>1000000 đ</td>
                                <td>xóa</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="4">Tổng cộng: </td>
                                <td>180.0000 đ</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="btn-carts">
                    <Link to="/" className="btn-back link">
                        <i class="fas fa-long-arrow-alt-left"></i>Tiếp tục mua sắm
                    </Link>
                    <Link to="/checkout" className="btn-checkout link">
                        <i class="fas fa-long-arrow-alt-right"></i> Thanh toán
                    </Link>
                
                </div>
                 </div>
            </section>
            
       
    );
}

export default cartsDefault;