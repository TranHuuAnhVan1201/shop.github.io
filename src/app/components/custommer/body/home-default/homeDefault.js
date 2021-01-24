import React from 'react';
import Banner from './home-detail/banner/Banner';
import Filter from './home-detail/filter/Filter';
import Need from './home-detail/need/Need';
import TitlePictures from './home-detail/TitlePictures';
import HomeProductSale from './home-detail/HomeProductSale'
import HomeProduct from './home-detail/home-product/HomeProduct';
import FilterLaptop from './home-detail/FilterLaptop/FilterLaptop';
function homeDefault(props) {
    return (
        <section>
            <Banner />
            <Filter/>
            <Need/>
            <TitlePictures />
            <HomeProductSale />
            <FilterLaptop/>
            <HomeProduct/>
        </section>
    );
}

export default homeDefault;