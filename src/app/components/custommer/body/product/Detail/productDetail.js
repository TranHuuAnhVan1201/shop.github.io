import React, { Component } from 'react';
import Detail from './Detail';
import dataProduct from './../../../../../database/dataProduct.json'
export default class ProductDetail extends Component {
    render() {
        return (
            <section className="type0">
                {
                    dataProduct.map((value, key) => {
                        
                        if(value.id === parseInt(this.props.match.params.id))
                            return (
                                <Detail
                                    key={key}
                                    idRelated={value.id}
                                    categoryBeadcrumb={value.categoryBeadcrumb}
                                    companyBeadcrumb={value.companyBeadcrumb}
                                    pictures={value.pictures}
                                    price={value.price}
                                    priceSale={value.priceSale}
                                    title = {value.item_Title}
                                />
                                
                            )
                      
                    })
                }

            </section>
        );

    }
}
