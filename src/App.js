import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
const defaultPage = React.lazy(() => import('./app/pages/custommer-page/default-pages/defaultPage'));
const LoginPage = React.lazy(() => import('./app/pages/login-page/LoginPage'));
const LoginTestPage = React.lazy(() => import('./app/components/register/login/Login'));
const RegisterPage = React.lazy(() => import('./app/components/register/register/Register'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path={"/login"} exact component={LoginPage} />
          <Route path={"/loginTest"} exact component={LoginTestPage} />
          <Route path={"/register"} exact component={RegisterPage} />
          <Route path="/" component={defaultPage} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;



