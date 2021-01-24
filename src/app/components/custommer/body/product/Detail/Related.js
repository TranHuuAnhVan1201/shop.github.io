import React, { Component } from 'react';
import dataProduct from '../Data/dataProduct.json';
import HomeProductSale from '../Home/HomeProductSale';
import './../../home-default/home-detail/HomeProductSale.scss';
export default class Related extends Component {
    render() {
        return (
            <div className="related">
                {
                    dataProduct.map((value, key) => {
                        if (this.props.idRelated !== value.id) {    
                            return (
                                <div>
                                    <HomeProductSale/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
