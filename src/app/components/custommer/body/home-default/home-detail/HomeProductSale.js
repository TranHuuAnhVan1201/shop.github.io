import React from 'react';
import Owl_Item from '../../product/Owl_Item'
import Owl_Item_Star from '../../product/Ow_Item_Star'
import dataProduct from '../../../../../database/dataProduct.json'
import './HomeProductSale.scss';

function HomeProductSale(props) {
    let { value } = props;
    return (
        <div className="product-top">
            <section className="homeproductsale">
                <div
                    id="owl-promo"
                    className="owl-promo owl-carousel homepromo item2020  owl-theme"
                >
                    <div className="owl-wrapper-outer">
                        <div
                            className="owl-warpper"
                            style={{
                                left: 0,
                                display: "block",
                                transition: "all 0ms ease 0s",
                                transform: "translate3d(0px, 0px, 0px)",
                            }}
                        >
                            {dataProduct.map((value, key) => {
                                if (value.id === 1) {
                                   
                                    return (
                                        <Owl_Item_Star value={value} index={key} key={key} />
                                    );
                                }
                            })}
                            {dataProduct.map((value, key) => {
                                if ((value.id !== 1) && ((value.id < 10))) {
                                    
                                    return (
                                        <Owl_Item value={value} index={key} key={key} />
                                    );
                                }
                            })}
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

    );
}

export default HomeProductSale;