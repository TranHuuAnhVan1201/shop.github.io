/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";



function convertToSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    ;
}


function Owl_Item(props) {
  let { value } = props;
  console.log(value.id);
  return (
    <li className="owl-item">
      <div className="item">
        <Link to={"/detail/" + convertToSlug(value.item_Title) + "." + value.id }
          className="vertion2020 large"
        >
          <div className="heightlabel">Trả góp 0%</div>
          
          {/* carts */}
          <Link to="/carts" className="item-carts">
            <i className="fas fa-cart-plus"></i>
          </Link>


          
          <img
            width={180}
            height={180}
            src={value.pictures}
            className="lazyloaded"
            alt={value.picAlt}
          />
          <div className="result-label sale">
            <i className="roundy">%</i>
            <span className="text">Giảm sốc</span>
          </div>
          <label className="preorder"> {value.preorder}</label>
          <h3>{value.item_Title} </h3>
          <div className="props">
            <span className="dotted  ">Ram {value.ram}GB</span>
            <span className="dotted  ">Ssd {value.ssd}GB</span>
            <span className="dotted  ">Core {value.core}</span>
            <span className="dotted  ">Pin {value.pin}H</span>
          </div>
          <h6 className="textkm">{value.textkm} </h6>
          <div className="price">
            <strong>{value.price}đ</strong>
            <span>{value.priceSale}đ</span>
            <i>{value.sale}%</i>
          </div>
          <div className="promo noimage">
            <p>{value.textBouns}</p>
          </div>
          <div className="ratingresult">
            <i className="icontgdd-ystar" />
            <i className="icontgdd-ystar" />
            <i className="icontgdd-ystar" />
            <i className="icontgdd-ystar" />
            <i className="icontgdd-ystar" />
            <span>{value.review} đánh giá</span>
          </div>
          <img
            src="https://cdn.tgdd.vn/ValueIcons/1/Label_01-05.png"
            className="icon-imgNew cate42 left lazyloaded"
          />
        </Link>
      </div>
    </li>
  );
}


export default Owl_Item;
