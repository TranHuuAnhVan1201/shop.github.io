import React from 'react';
import { Link } from 'react-router-dom';
import imgstart from './../../../../../img/nổi bật/lenovo-tet-2021-fix-720x333.jpg'
import './Owl_Item_Star.scss'

function Ow_Item_Star(props) {
    return (
       <li className="owl-item star">
            <div className="item" data-index={1}>
                <Link to={"/detail/"} className="vertion2020 large">
                    <Link to="/carts" className="item-carts">
                        <i class="fas fa-cart-plus"></i>
                    </Link>
                    <img src={imgstart} className="imgStar lazyloaded" alt={"123"} />
                    <div className="textStar">
                        <div>
                            <div className="result-label sale">
                                <i className="roundy">%</i>
                                <span class="text">Giảm sốc</span>
                            </div>
                            <div className="heightlabel">Trả góp 0%</div>  
                        </div>
                        <label className="preorder"> {"Đặt hàng trước ngày 12 / 01"}</label>
                        <h3>{"Lenovo IdeaPad S145 15IIL i3 1005G1 (81W8001XVN)"} </h3>
                        <div className="props">
                            <span className="dotted  ">Ram 8 GB</span>
                            <span className="dotted  ">Ssd 256 GB</span>
                            <span className="dotted  ">Core i5</span>
                            <span className="dotted  ">Pin 4H</span>
                        </div>
                        <h6 className="textkm">{ "Tết khuyến mãi" } </h6>
                        <div className="price">
                            <strong>{19000000}đ</strong>
                            <span>{180000000}đ</span>
                            <i>{5}%</i>
                        </div>
                        <div className="promo noimage">
                            <p>{"Nhận bộ quà hấp dẫn lên đến 10tr"}</p>
                        </div>
                        <div className="ratingresult">
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <span>{1000} đánh giá</span>
                        </div>
                            <input className="spInfo" data-brand="Samsung" data-cat="Điện thoại"  data-price={23490000} data-pro={3} data-version id="data220833" name="data220833" type="hidden" defaultValue={220833} />
                    </div>
                </Link>

            </div>
        </li>
    );
}

export default Ow_Item_Star;