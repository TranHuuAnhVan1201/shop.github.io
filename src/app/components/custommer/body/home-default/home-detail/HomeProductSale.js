/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Owl_Item from '../../product/Owl_Item'
import dataProduct from './../../../../../database/dataProduct.json'
export default class HomeProductSale extends Component {
    render() {
       
        return (
            <div>
                <section className="homeproductsale" >
                    <div id="owl-promo" className="owl-promo owl-carousel homepromo item2020  owl-theme">
                        <div className="owl-wrapper-outer">
                            <div className="owl-warpper" style={{ left: 0, display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}>
                                {
                                    dataProduct.map((value, key) => {
                                        return (
                                            <Owl_Item key={key}
                                                idProduct ={value.id}
                                                review={value.review}
                                                textBouns={value.textBouns}
                                                sale={value.sale} 
                                                priceSale={value.priceSale} 
                                                price={value.price}
                                                textkm={value.textkm}
                                                core = {value.core} 
                                                pin={value.pin}
                                                ram={value.ram} ssd={value.ssd} 
                                                item_Title= {value.item_Title} 
                                                preorder={value.preorder}
                                                picAlt={value.picAlt} 
                                                pictures={value.pictures}
                                            />
                                            
                                        )
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
        )
    }
}
