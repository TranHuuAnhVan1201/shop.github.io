import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const Header = React.lazy(() => import('../../../components/custommer/header-home-custommer/HeaderHome'));

const FooterHome = React.lazy(() => import('../../../components/custommer/footer-home-custommer/FooterHome'));
const homeDefault = React.lazy(() => import('../../../components/custommer/body/home-default/homeDefault'));
const productDefault = React.lazy(() => import('../../../components/custommer/body/product-default/productDefault'));
const productDetail = React.lazy(() => import('../../../components/custommer/body/product/Detail/productDetail'));
const cartsDefault = React.lazy(()=> import('../../../components/custommer/body/carts/cartsDefault'))
const checkoutDefault = React.lazy(()=> import('../../../components/custommer/body/checkout/checkoutDefault'))
function defaultPage() {
    return (
        <HashRouter>
            <ScrollToTop>
                <React.Suspense>      
                    <Header></Header>
                    <Switch>
                        <Route path={"/"} exact component={homeDefault} />
                        <Route path={"/product"}  exact component={productDefault} />
                        <Route path={"/detail/:slug.:id"}  exact component={productDetail} />
                        <Route path={"/carts"}  exact component={cartsDefault} />
                        <Route path={"/checkout"}  exact component={checkoutDefault} />
                    </Switch>
                    <FooterHome></FooterHome>
                </React.Suspense>
            </ScrollToTop>
        </HashRouter>
    );
}

export default defaultPage;