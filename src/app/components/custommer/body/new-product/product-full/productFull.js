import React from 'react';
import Owl_Item from '../../product/Owl_Item';

function productFull(props) {
    return (
       <section className="homeproductsale" >
            <div id="owl-promo" className="owl-promo owl-carousel homepromo item2020  owl-theme">
                <div className="owl-wrapper-outer">
                    <div className="owl-warpper" style={{ left: 0, display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}>
                        <Owl_Item_Star_Full/>
                        <Owl_Item_Full/>
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
    );
}

export default productFull;