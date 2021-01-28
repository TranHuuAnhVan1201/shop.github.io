import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const defaultPage = React.lazy(() => import('./app/pages/custommer-page/default-pages/defaultPage'));
const LoginPage = React.lazy(() => import('./app/pages/login-page/LoginPage'));
const LoginTestPage = React.lazy(() => import('./app/components/register/login/Login'));
const Register = React.lazy(() => import('./app/components/register/register/Register'));

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
            <Route path={"/login"} exact component={LoginPage} />
            <Route path={"/loginTest"} exact component={LoginTestPage} />
            <Route path={"/register"} exact component={Register} />
            <Route path="/" component={defaultPage} />

            <LoginTestPage check={()=> checkConnect()} />
          </Switch>
        </React.Suspense>
      </ScrollToTop>
      
    </HashRouter>
  );
}

export default App;



