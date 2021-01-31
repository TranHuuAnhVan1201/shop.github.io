import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.scss'

function checkoutDefault(props) {
    return (
        <div className="checkout">
            <section>
                <form id="form" className="form">
                    <div className="column about">
                        <h2>Thông tin khách hàng</h2>
                        <div className="sex">
                            <div className="form-control radio">
                                <input type="radio" id="male" name="sex" defaultValue="male" defaultChecked />
                                <label htmlFor="male">Anh</label>
                            </div>
                            <div className="form-control radio">
                                <input type="radio" id="femail" name="sex" defaultValue="female" />
                                <label htmlFor="female">Chị</label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="fullName">Họ và tên</label>
                            <input type="text" id="fullName" placeholder="Nhập họ và tên"/>
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="phone">Số điện thoại</label>
                            <input type="text" id="phone" placeholder="Nhập số điện thoại" />
                            <small>Error message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="address">Địa chỉ</label>
                            <input type="text" id="address" placeholder="Nhập địa chỉ chi tiết" />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="city">Tỉnh / Thành phố</label>
                            <input type="text" id="city" placeholder="Nhập địa Tỉnh / Thành phố" />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="district">Quận / Huyện</label>
                            <input type="text" id="district" placeholder="Nhập địa chỉ Quận / Huyện" />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="ward">Phường / Xã</label>
                            <input type="text" id="ward" placeholder="Nhập địa chỉ Phường / Xã" />
                            <small>Error message</small>
                        </div>

                    </div>
                    <div className="column dividing">
                        <h2>Vận chuyển</h2>
                        <div className="form-control">
                            <label htmlFor="dividing">Chọn phương thức vận chuyển</label>
                            <input type="text" id="dividing" placeholder="Chọn phương thức vận chuyển"/>
                            <small>Error message</small>
                        </div>

                        <h2>Thanh toán</h2>
                        <div className="form-control radio">
                            <input type="radio" id="shipcod" name="pay" defaultValue="shipcod" defaultChecked />
                            <label htmlFor="shipcod">Thanh toán khi nhận hàng (COD)</label>
                        </div>
                        <div className="form-control radio">
                            <input type="radio" id="" name="pay" defaultValue="other" />
                            <label htmlFor="other">Chuyển khoản qua ngân hàng</label>
                        </div>
                    </div>
                    <div className="column order">
                        <h2>Đơn hàng</h2>
                        <div className="wrap-order">
                            <div className="products">
                                <div className="cols">        
                                    <div className="left title">Sản phẩm 2</div>
                                    <div className="right price ">200000 đ</div>
                                </div>
                                <div className="cols">        
                                    <div className="left title">Sản phẩm 2</div>
                                    <div className="right price ">200000 đ</div>
                                </div>
                            </div>
                            <div className="dividing">
                                <div className="cols">
                                    <div className="left">Phí vận chuyển</div>
                                    <div className="right">10000 đ</div>
                                </div>
                            </div>
                            <div className="sum">
                                <div className="cols">
                                    <div className="left">Thành tiền</div>
                                    <div className="right">10000 đ</div>
                                </div> 
                            </div>
                            
                        </div>
                        <button className="submit order" type="">
                             <Link to="/" className="link">
                                Đặt hàng
                            </Link>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default checkoutDefault;