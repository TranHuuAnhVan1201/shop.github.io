import React from 'react';
import Banner from './home-detail/banner/Banner';
import Filter from './home-detail/filter/Filter';
import FilterLaptop from './home-detail/FilterLaptop/FilterLaptop';
import Need from './home-detail/need/Need';
import TitlePictures from './home-detail/TitlePictures';
import ProductBestSale from './home-detail/product/product-best-sale/ProductBestSale';
import ProductDefault from './home-detail/product/product-default/ProductDefault'



function homeDefault(props) {
    return (
        <section>
            <Banner />
            <Filter/>
            <Need/>
            <TitlePictures />
            <ProductBestSale/>
            <FilterLaptop />
            <ProductDefault/>
           
           
        </section>
    );
}

export default homeDefault;