import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const HeaderAdmin = React.lazy(() => import('../../components/admin/header/HeaderAdmin'));
const FooterAdmin = React.lazy(() => import('../../components/admin/footer/FooterAdmin'));
const HomeAdmin = React.lazy(() => import('./HomeAdmin'));
const ADMIN_USER = React.lazy(() => import('./body/_user/USER'));

function AdminRouter(props) {
    return (
        <HashRouter>
            <ScrollToTop>
                <React.Suspense>
                        <HeaderAdmin></HeaderAdmin>
                            <Switch>
                                <Route path={"/admin"} exact component={HomeAdmin} />
                                <Route path={"/admin/user"} exact component={ADMIN_USER} />
                            </Switch>
                        <FooterAdmin></FooterAdmin>
                </React.Suspense>
            </ScrollToTop>
        </HashRouter>
    );
}

export default AdminRouter;