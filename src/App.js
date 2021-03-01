import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const defaultPage = React.lazy(() => import('./app/pages/custommer-page/default-pages/defaultPage'));
const LoginNghiaPage = React.lazy(() => import('./app/pages/login-page/LoginPage'));
const LoginPage = React.lazy(() => import('./app/components/register/login/Login'));
const Register = React.lazy(() => import('./app/components/register/register/Register'));
const AdminRouter = React.lazy(() => import('./app/components/admin/AdminRouter'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
function checkConnect() {
  alert("connect success");
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path={"/loginNghia"} exact component={LoginNghiaPage} />
            <Route path={"/login"} exact component={LoginPage} />
            <Route path={"/register"} exact component={Register} />
            <Route path={"/admin"} component={AdminRouter} />
            <Route path={"/"} component={defaultPage} />
           

            <LoginPage check={()=> checkConnect()} />
          </Switch>
        </React.Suspense>
      </ScrollToTop>
      
    </HashRouter>
  );
}

export default App;



