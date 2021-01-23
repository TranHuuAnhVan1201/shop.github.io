import React from 'react';

import HomeProductSale from './home-detail/HomeProductSale'
import HomeProduct from './home-detail/HomeProduct'
import TitlePictures from './home-detail/TitlePictures';
import Banner from './home-detail/banner/Banner';
import Filter from './home-detail/filter/Filter';
function homeDefault(props) {
    return (
        <section>
            <Banner />
            <Filter/>
            <TitlePictures/>
            <HomeProductSale />
            <HomeProduct/>
        </section>
    );
}

export default homeDefault;