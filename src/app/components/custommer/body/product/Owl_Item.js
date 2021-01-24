import React, { Component } from 'react'
import { Link} from 'react-router-dom';
export default class Owl_Item extends Component {
        // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    
    convertSlug = (slug) => {
        //Đổi chữ hoa thành chữ thường
        slug = slug.toLowerCase();
        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    }
    render() {
       
        return (
             <li className="owl-item">
                <div className="item" data-index={1}>
                    <Link to={"/detail/" + this.convertSlug(this.props.item_Title) + "." + this.props.idProduct} className="vertion2020 large">
                        <div className="heightlabel">Trả góp 0%</div>   
                        <Link to="/carts" className="item-carts">
                            <i class="fas fa-cart-plus"></i>
                        </Link>
                        <img width={180} height={180} src={this.props.pictures} className="lazyloaded" alt={this.props.picAlt} />
                        <div className="result-label sale">
                            <i className="roundy">%</i>
                            <span class="text">Giảm sốc</span>
                        </div>
                        <label className="preorder"> {this.props.preorder}</label>
                        <h3>{this.props.item_Title} </h3>
                        <div className="props">
                            <span className="dotted  ">Ram { this.props.ram}GB</span>
                            <span className="dotted  ">Ssd {this.props.ssd}GB</span>
                            <span className="dotted  ">Core {this.props.core}</span>
                            <span className="dotted  ">Pin {this.props.pin}H</span>
                        </div>
                        <h6 className="textkm">{ this.props.textkm } </h6>
                        <div className="price">
                            <strong>{this.props.price}đ</strong>
                            <span>{this.props.priceSale}đ</span>
                            <i>{this.props.sale}%</i>
                        </div>
                        <div className="promo noimage">
                            <p>{this.props.textBouns}</p>
                        </div>
                        <div className="ratingresult">
                        <i className="icontgdd-ystar" />
                        <i className="icontgdd-ystar" />
                        <i className="icontgdd-ystar" />
                        <i className="icontgdd-ystar" />
                        <i className="icontgdd-ystar" />
                        <span>{this.props.review} đánh giá</span>
                        </div>
                        <img src="https://cdn.tgdd.vn/ValueIcons/1/Label_01-05.png" className="icon-imgNew cate42 left lazyloaded" />

                        <input className="spInfo" data-brand="Samsung" data-cat="Điện thoại"  data-price={23490000} data-pro={3} data-version id="data220833" name="data220833" type="hidden" defaultValue={220833} />
                    </Link>

                </div>
            </li>
        )
    }
}
