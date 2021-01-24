/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
import imgRight390x80 from './../../../../../../../img/right-intel-390x80.png';
import imgRight390x802 from './../../../../../../../img/right-win-390x80.png';
import home800x170 from './../../../../../../../img/800-170-800x170-43.png';
import home2800x170 from './../../../../../../../img/800-170-800x170-41.png';
//banner =>> gồm owl home( 800x170 ) và right (390 x 170)
//-owl-home
// => div ảnh ( chứa ảnh nằm dưới cùng )
// => div chứa ( owl-wrapper-outer - bên ngoài - làm gốc - hiển thị = 800px)
//      => div rộng, chứa tất cả hình ( owl-wrapper - click sẽ đổi ảnh hoặc auto
//      => div controls => nút tròn dưới cùng - click sẽ sang.
//                      => next- pre -> 2 bên.

function Banner(props) {
    return (
        <div className="banner">
                <div id="owl-home" className="owl-carousel owl-theme">
                    <div className="owl-wrapper-outer">
                        <div className="owl-wrapper">
                            <div className="owl-item800">
                                <Link to="/laptopsale">
                                    <img src={home800x170} alt="laptopsale"></img>
                                </Link>
                            </div>
                            <div className="owl-item800">
                                <Link to="/laptop-lenovo-sale">
                                    <img src={home2800x170} alt="laptopsale"></img>
                                </Link>
                            </div>
                            <div className="owl-item800">
                                <Link to="/laptop-lenovo-sale">
                                    <img src={home2800x170} alt="laptopsale"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="owl-controls">
                        <div className="owl-buttons">
                            <div className="owl-prev owl-btns">‹</div>
                            <div className="owl-next owl-btns">›</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Link to="/intel-11" class="right-height80">
                        <img src={imgRight390x80}></img>
                    </Link>
                    <Link to="/windowns-10-ban-quyen" class="right-height80">
                        <img src={imgRight390x802}></img>
                    </Link>
                </div>
                <div className="clr"></div>
        </div>
    );
}

export default Banner;