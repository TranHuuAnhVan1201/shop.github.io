/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Link } from 'react-router-dom';
import Owl_Item from '../Owl_Item';
import dataProduct from '../../../../../database/dataProduct.json'
function Detail(props) {
    let { value } = props;
    let related = dataProduct.filter(valueRelated => ((valueRelated.id !== value.id) && (valueRelated.id !== 1)));
    let specifications = dataProduct.filter(valueSpecifications => valueSpecifications.id === value.id);

    return (
        <div>
            <ul className="breadcrumb">
                <li>
                    <Link to="/">
                        {value.categoryBeadcrumb}
                    </Link>
                    <span>›</span>
                </li>
                <li>
                    <Link to="/">
                        {value.companyBeadcrumb}
                    </Link>
                </li>
            </ul>

            <div className="rowtop">
                <h1>
                    {value.item_Title}
                </h1>
                <div className="ratingresult">
                    <span className="star"><i className="icontgdd-star" /></span>
                    <span className="star"><i className="icontgdd-star" /></span>
                    <span className="star"><i className="icontgdd-star" /></span>
                    <span className="star"><i className="icontgdd-star" /></span>
                    <span className="star"><i className="icontgdd-star" /></span>
                    <a href="#danhgia">9 đánh giá</a>
                </div>
                <div className="likeshare">
                    <div id="fb-root" className=" fb_reset"><div style={{ position: 'absolute', top: '-10000px', width: 0, height: 0 }}><div /></div></div>
                    <div className="fb-like fb_iframe_widget" data-href="/may-tinh-bang/huawei-matepad-t8" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&app_id=242045172499368&container_width=0&href=https%3A%2F%2Fwww.thegioididong.com%2Fmay-tinh-bang%2Fhuawei-matepad-t8&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true"><span style={{ verticalAlign: 'bottom', width: 150, height: 28 }}><iframe width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v8.0/plugins/like.php?action=like&app_id=242045172499368&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfaaba2507381d8%26domain%3Dwww.thegioididong.com%26origin%3Dhttps%253A%252F%252Fwww.thegioididong.com%252Ffafbbb757083d%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Fwww.thegioididong.com%2Fmay-tinh-bang%2Fhuawei-matepad-t8&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true" style={{ border: 'none', visibility: 'visible', width: 150, height: 28 }} __idm_frm__={627} className /></span></div>
                </div>
            </div>
            <div className="clr" />
            <div className="rowdetail">
                <aside className="picture">
                    <div className="icon-position">
                        <img width={400} height={400} src={value.pictures} alt="pictures" />
                        <img src="https://cdn.tgdd.vn/ValueIcons/1/Label_01-05.png" className="icon-imgNew cate522" alt="1" />
                    </div>
                    <div className="colorandpic">
                        <ul className="owl-carousel owl-theme tabscolor">
                            <li>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IPhone_11_Product_RED.jpg/800px-IPhone_11_Product_RED.jpg" className="image" alt="1" />
                                </div>
                            Xanh Dương
                        </li>
                            
                            <li className="item">
                                <div>
                                    <i className="icontgdd-video" />
                                </div>
                            Video
                        </li>
                            
                            <li className="item">
                                <div>
                                    <i className="icontgdd-box" />
                                </div>
                            Mở hộp,<br />
                            k.mãi
                        </li>
                            <li className="item">
                                <div>
                                    <i className="icontgdd-360" />
                                </div>
                            Hình 360<br />
                            độ
                        </li>
                        </ul>
                        <div className="prev hide">
                            <i className="icontgdd-prevthumd" />
                        </div>
                        <div className="next hide">
                            <i className="icontgdd-nextthumd" />
                        </div>
                    </div>
                </aside>
                <aside className="price_sale">
                    <div className="h-province dt detail scenario0" data-scenario={0} data-sv="TGDD6-15">
                        <span>Giá tại</span>
                        <b id="h-provincename" data-provinceid={3} className>Hồ Chí Minh</b>
                        <div className="area_price ">
                            <strong>{value.price}</strong>
                            <span className="hisprice">{value.priceSale}</span>
                            <i>-9%</i>
                            <span />
                        </div>

                        <div className="area_promotion   ">
                            <strong data-count={2}>Khuyến mãi <i>Giá và khuyến mãi dự kiến áp dụng đến 23:00 31/01</i></strong>
                            <div className="infopr">
                                <span className="pro613305 " data-g="WebNote" data-date="1/31/2021 11:59:00 PM" data-return data-fromvalue={0} data-tovalue={10}>
                                    Pin sạc dự phòng giảm 30% khi mua kèm.
                            <a href="https://www.thegioididong.com/tin-tuc/pin-sac-du-phong-uu-dai-1294565">(click xem chi tiết)</a>
                                </span>
                            </div>
                            <div className="notechoose" />
                            <div className="promo_BHX">
                                <div className="l1">
                                    <img src="https://www.thegioididong.com/Content/desktop/images/V4/game/Gift@2x.png" alt="1" />
                                </div>
                                <div className="l2">
                                    <span>
                                        Tặng cho khách lần đầu mua hàng online tại web <a href="https://laptopnct.com/">LaptopNCT.com</a>
                                    </span>
                                    <div className="content">
                                        <p className="first-pap"><strong>100.000đ</strong> để mua đơn hàng Laptop.NCT.com từ <b>10.000.000đ</b></p>
                                        <p> 2 lần <b>FREEship</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="area_order area_orderM">
                            <a href="/carts" className="buy_now">
                                <b>Đặt hàng</b>
                                <span>Giao hàng tận nơi hoặc nhận tại cửa hàng</span>
                            </a>
                            <a id="tra-gop" className="buy_repay " href="/tra-gop/may-tinh-bang/huawei-matepad-t8">
                                <b>Mua trả góp </b>
                                <span>Duyệt hồ sơ tại cửa hàng</span>
                            </a>
                            <a className="buy_repay s " href="/tra-gop/may-tinh-bang/huawei-matepad-t8?m=credit">
                                <b>Trả góp  qua thẻ</b>
                                <span>Visa, Master, JCB</span>
                            </a>
                        </div>
                    </div>
                </aside>
                <aside className="rightInfo">
                    <ul className="policy ">
                        <li className="inpr">
                            <span>Bộ sản phẩm gồm:
                                <a href="/banner" className="stdImg">Adapter, Sách hướng dẫn, Cáp Micro USB, Cây lấy sim, Hộp máy</a>
                            </span>
                        </li>
                        <li className="wrpr">
                            <span>
                                Bảo hành chính hãng 3 tháng.
                        </span>
                        </li>
                        <li className="chpr">
                            Lỗi là đổi mới trong 1 tháng tại thành phố HCM.
                        <a href="https://laptopnct.com/gioithieu/">Xem chi tiết</a>
                        </li>
                    </ul>
                </aside>
            </div>
            <div className="clr" />

            <div className="box_content">
                <div className="left_content products_related">
                    <div className="characteristics">
                        <h2>Đặc điểm nổi bật của Huawei MatePad T8 (Nền tảng Huawei Mobile Service)</h2>
                        <div id="owl-detail" className="owl-carousel owl-detail owl-theme" style={{ opacity: 1, display: 'block' }}>
                            <div className="owl-wrapper-outer autoHeight" style={{ height: 362 }}>
                                <div className="owl-wrapper" style={{ width: 10448, left: 0, display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)' }}>
                                    <div className="owl-item" style={{ width: 653 }}>
                                        <div className="item" data-id={95825}>
                                            <img className="lazyOwl" style={{ display: 'block' }} src="https://cdn.tgdd.vn/Products/Images/522/223131/Slider/huawei-matepad-t8-300520-0912080.jpg" />
                                            <div className="des">
                                                <p>Bộ sản phẩm chuẩn: Adapter, Sách hướng dẫn, Cáp Micro USB, Cây lấy sim, Hộp máy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="boxArticle">
                        {/* <article className="area_article " style={{ height: 'auto' }}>
                            <h2>
                                <a href="https://www.thegioididong.com/may-tinh-bang/huawei-matepad-t8" target="_blank" title="Máy tính bảng Huawei MatePad T8 tại Thế Giới Di Động" type="Máy tính bảng Huawei MatePad T8 tại Thế Giới Di Động">
                                    Huawei MatePad T8</a>&nbsp;là một trong những mẫu&nbsp;
                                <a href="https://www.thegioididong.com/may-tinh-bang" target="_blank" title="Tham khảo máy tính bảng tại Thế Giới Di Động">máy tính bảng</a> giá rẻ của&nbsp;Huawei&nbsp;có thiết kế nguyên khối cùng một cấu hình cơ bản, đủ dùng cho các tác vụ hằng ngày của mọi người dùng.
                                </h2><p dir="ltr" style={{ border: '1px dashed orange', backgroundColor: '#FFEFD5', padding: 10 }}>
                                <strong>Sản phẩm chạy hệ điều hành Android trên nền tảng Huawei Mobile Service:</strong>
                                <br />- Không có CH Play, tải ứng dụng trên cửa hàng Huawei AppGallery.
                                <br />- Không có sẵn các ứng dụng / game sử dụng dịch vụ, tài khoản Google như: Google Maps, Google Drive, Gmail, Grab,...
                                <br />- Các ứng dụng không có trên Huawei AppGallery, khách hàng có thể tìm tải qua&nbsp;kho ứng dụng của bên thứ 3&nbsp;như: Aurora Store, APK Pure,...
                                <br />(Lưu ý lựa chọn ứng dụng từ nhà phát hành uy tín để đảm bảo tính bảo mật)
                                <br />-&nbsp;<a href="https://www.thegioididong.com/tin-tuc/huong-dan-cai-dat-ung-dung-cho-huawei-mate-30-pro-ma-khong-can-tai-ch-play-store-1236086" target="_blank" title="Hướng dẫn cài đặt ứng dụng cho smartphone Huawei mà không cần tải CH Play Store" type="Hướng dẫn cài đặt ứng dụng cho smartphone Huawei mà không cần tải CH Play Store">Hướng dẫn cài đặt ứng dụng cho smartphone Huawei mà không cần tải CH Play Store</a>.</p><h3>Thiết kế nguyên khối liền mạch, màn hình viền mỏng</h3><p><a href="https://www.thegioididong.com/may-tinh-bang-huawei" target="_blank" title="Máy tính bản Huawei tại Thế Giới Di Động" type="Máy tính bản Huawei tại Thế Giới Di Động">Máy tính bảng Huawei</a> MatePad T8 mang cho mình thiết kế chắc chắn, viền màn hình 2 bên mỏng tạo cho trải nghiệm xem rộng rãi và cảm giác cầm nắm tốt.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-tgdd3.jpg" onclick="return false;"><img alt="Màn hình giải trí lớn của Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd3.jpg" className="lazy" title="Màn hình giải trí lớn của Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd3.jpg" style={{ display: 'block' }} /></a></p><p>Máy được trang bị&nbsp;màn hình&nbsp;<a href="https://www.thegioididong.com/may-tinh-bang?g=khoang-8" target="_blank" title="Máy tính bảng có kích thước màn hình 8 inch tại Thế Giới Di Động" type="Máy tính bảng có kích thước màn hình 8 inch tại Thế Giới Di Động">kích thước 8 inch</a> với độ phân giải HD 1280x800 pixel, tuy màn hình có độ phân giải không cao, nhưng vẫn đảm bảo chất lượng hiển thị tốt, màu sắc rõ ràng nhờ vào <a href="https://www.thegioididong.com/hoi-dap/man-hinh-ips-lcd-la-gi-905752" target="_blank" title="Màn hình IPS LCD là gì?">công nghệ màn hình IPS</a>.</p><h3>Cấu hình khá tốt trong tầm giá</h3><p>Huawei MatePad T8 sở hữu vi xử lý MediaTek MT8768 8 nhân, RAM 2 GB giúp chiếc <a href="https://www.thegioididong.com/may-tinh-bang" target="_blank" title="Tham khảo máy tính bảng chính hãng, giá rẻ tại Thế Giới Di Động" type="Tham khảo máy tính bảng chính hãng, giá rẻ tại Thế Giới Di Động">máy tính bảng</a> này có thể đáp ứng tốt các nhu cầu cơ bản như lướt web, xem phim hay chơi một số các tựa game nhẹ.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-292020-102043.jpg" onclick="return false;"><img alt="Thiết kế tràn viền của máy tính bảng Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-292020-102043.jpg" className="lazy" title="Thiết kế tràn viền của máy tính bảng Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-292020-102043.jpg" style={{ display: 'block' }} /></a></p><p>Máy có bộ nhớ trong 32 GB, tuy bộ nhớ không quá nhiều nhưng vẫn đủ để bạn có thể lưu trữ hay tải nhiều ứng dụng. Nếu bạn muốn có thêm không gian lưu trữ thì máy vẫn có hỗ trợ <a href="https://www.thegioididong.com/the-nho-dien-thoai" target="_blank" title="Tham khảo thẻ nhớ kinh doanh tại Thế Giới Di Động">thẻ nhớ</a> ngoài Micro SD dung lượng 512 GB, giúp bạn không phải lo lắng về khả năng lưu trữ của máy.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-tgdd4.jpg" onclick="return false;"><img alt="Thời lượng pin lớn của Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd4.jpg" className="lazy" title="Thời lượng pin lớn của Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd4.jpg" style={{ display: 'block' }} /></a></p><p>Thời lượng <a href="https://www.thegioididong.com/pin" target="_blank" title="Tham khảo pin các loại kinh doanh tại Thế Giới Di Động">pin</a> của máy rất ấn tượng khi được trang bị viên pin 5100 mAh, cho thời gian sử dụng cả một ngày dài chỉ với 1 lần sạc.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-tgdd7.jpg" onclick="return false;"><img alt="Cổng sạc của Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd7.jpg" className="lazy" title="Cổng sạc của Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd7.jpg" style={{ display: 'block' }} /></a></p><p>Hơn thế nữa, máy còn hỗ trợ Nano SIM kết nối 4G giúp kết nối internet dễ dàng khi không có Wi-Fi. Ngoài ra Huawei MatePad T8 còn hỗ trợ Bluetooth 5.0, kết nối OTG tiện lợi để có thể kết hợp với <a href="https://www.thegioididong.com/ban-phim" target="_blank" title="Tham khảo bàn phím kinh doanh tại Thế Giới Di Động">bàn phím</a>, <a href="https://www.thegioididong.com/chuot-may-tinh" target="_blank" title="Tham khảo chuột máy tính kinh doanh tại Thế Giới Di Động">chuột</a> hay các phụ kiện hỗ trợ khác.</p><p>Tuy MatePad T8 không hỗ trợ Google, nhưng bạn có thể tải ứng dụng qua HUAWEI APPGallery có sẵn trên máy với kho ứng dụng đa dạng, phong phú.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-292020-102026.jpg" onclick="return false;"><img alt="Giao diện màn hình của Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-292020-102026.jpg" className="lazy" title="Giao diện màn hình của Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-292020-102026.jpg" style={{ display: 'block' }} /></a></p><p>Huawei MatePad T8 còn được bổ sung thêm tính năng dành cho trẻ em, giao diện được tuỳ biến để dễ dàng thao tác sử dụng, đi kèm một số tính năng quản lý thông minh giúp các bậc phụ huynh có thể kiểm soát được hoạt động hằng ngày trên máy tính bảng này.</p><h3>Hỗ trợ ứng dụng&nbsp;Petal Search, cho phép tìm kiếm thông tin, ứng dụng dễ dàng</h3><p>Với khả năng tổng hợp được nhiều nguồn ứng dụng và thông tin khác nhau, trên giao diện đơn giản, dễ sử dụng,&nbsp;Petal Search là công cụ cho phép người dùng vừa tìm kiếm được thông tin, vừa tìm kiếm được ứng dụng nhanh chóng, dễ dàng.
                                </p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-tgdd1.jpg" onclick="return false;"><img alt="Hỗ trợ ứng dụng Petal Search | Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd1.jpg" className="lazy" title="Hỗ trợ ứng dụng Petal Search | Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd1.jpg" style={{ display: 'block' }} /></a>
                            </p>
                            <p>Công cụ hỗ trợ cài đặt và sử dụng được nhiều ứng dụng khác của Google và hoạt động khá ổn định như:
                            Chrome, Google Dịch, Google Maps,...
                            mang lại trải nghiệm tiện lợi hơn cho người dùng.
                                </p>
                            <p>Xem thêm:&nbsp;
                                <a href="https://www.thegioididong.com/hoi-dap/tim-hieu-cong-cu-tim-kiem-petal-search-cua-huawei-1278627" target="_blank" title="Tìm hiểu công cụ tìm kiếm Petal Search phát triển bởi Huawei">Tìm hiểu công
                                    cụ tìm kiếm Petal Search phát triển bởi Huawei</a>
                            </p>
                            <h3>Camera tốt, đáp ứng nhu cầu chụp, quay đơn giản
                                </h3>
                            <p>Camera
                            không phải là điểm nhấn trên chiếc máy khi camera trước chỉ 2 MP và camera sau 5 MP. Chất lượng không quá xuất sắc
                                nhưng vẫn sẽ đáp ứng đủ nhu cầu cơ bản như chụp ảnh, quay video Full HD 30 fps.</p><p><a className="preventdefault" href="https://www.thegioididong.com/images/522/223131/huawei-matepad-t8-tgdd5.jpg" onclick="return false;">
                                <img alt="Thiết kế camera của Huawei MatePad T8" data-original="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd5.jpg" className="lazy" title="Thiết kế camera của Huawei MatePad T8" src="https://cdn.tgdd.vn/Products/Images/522/223131/huawei-matepad-t8-tgdd5.jpg" style={{ display: 'block' }} /></a>
                            </p>
                            <p>Với cấu hình và những tính năng trên, cùng với mức giá bán tốt thì Huawei MatePad T8 hoàn toàn đáp ứng tốt nhu cầu
                            sử dụng cơ bản và đặc biệt phù hợp cho các bật phụ huynh muốn mua cho con em mình một thiết bị phù hợp để giải trí, học tập nhưng
                                vẫn có thể kiểm soát một cách hiệu quả.</p>
                        </article> */}
                    </div>

                    <div className="related">
                        <section className="homeproductsale" >
                            <div id="owl-promo" className="owl-promo owl-carousel homepromo item2020  owl-theme">
                                <div className="owl-wrapper-outer">
                                    <div className="owl-warpper" style={{ left: 0, display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)' }}>
                                        {
                                            related.map((value, key) => {
                                                if (value.id !== value.idRelated) {
                                                    return (
                                                        <Owl_Item value={value} key ={key} index={key}
                                                        />
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="clr" />
                                    <div className="owl-controls clickable">
                                        <div className="owl-buttons">
                                            <div className="owl-prev">&lt;</div>
                                            <div className="owl-next">&gt;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
                <div className="right_content">
                    <div className="tableparameter">
                        <h2>Thông số kỹ thuật</h2>
                        <ul className="parameter ">
                            {         
                                specifications.map((value, key) => {
                                return (
                                    <div>
                                        <li className="p223131 g2439_2440"><span>CPU:</span>
                                            <div><a href="#" target="_blank"></a>{value.cpuDetail}</div>
                                        </li>
                                        <li className="p223131 g2477"><span>RAM:</span><div>{value.ramDetail}</div>
                                        </li>
                                        <li className="p223131 g5039"><span>Ổ cứng:</span><div>{value.ssdDetail}</div>
                                        </li>
                                        <li className="p223131 g3059"><span>Màn hình:</span><div>{value.lcdDetail}</div>
                                        </li>
                                        <li className="p223131 g3060"><span>Card màn hình:</span><div>{value.vgaDetail}</div>
                                        </li>
                                        <li className="p223131 g2445"><span>Cổng kết nối:</span><div>{value.inputDetail}</div>
                                        </li>
                                        <li className="p223131 g2444"><span>Hệ điều hành:</span><div>{value.winDetail}</div>
                                        </li>
                                        <li className="p223131 g25459"><span>Thiết kế:</span>
                                            <div><a href="#" target="_blank"></a>{value.settingDetail}</div>
                                        </li>
                                        <li className="g2460"><span>Kích thước:</span>
                                            <div className="isim">
                                                <a href="#" target="_blank">
                                                </a>{value.sizeDetail}</div>
                                            <div className="ibsim"><b className="h">Nặng</b>
                                                <a href="#">2 Ký</a>
                                            </div>
                                        </li>
                                        <li className="p223131 g7839"><span>Thời điểm ra mắt:</span><div>{value.years}</div>
                                        </li>
                                    </div>
                                    )

                                })
                            }

                        </ul>
                        <button type="button" className="viewparameterfull" onclick="getFullSpec(223131,)">Xem thêm cấu hình chi tiết</button>
                    </div>
                </div>
                <div className="clr"></div>
            </div>

        </div>
    );
}

export default Detail;