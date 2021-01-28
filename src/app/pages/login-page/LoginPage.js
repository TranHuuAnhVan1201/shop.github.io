import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const login = React.lazy(() => import('../../components/login/Login'));

function LoginPage(props) {
    return (
        <HashRouter>
            <ScrollToTop>
                <React.Suspense>
                    <Switch>
                        <Route path={"/login"} component={login} />
                    </Switch>
                </React.Suspense>
            </ScrollToTop>
        </HashRouter>
    );
}

export default LoginPage;