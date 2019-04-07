import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import App from "./App";
import AnotherScreen from "./AnotherScreen";
import NewUser from "./NewUser";
import Login from  "./Login";
import NewPlan from "./NewPlan";

const DefaultLayout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

const RoutesPath = ({ Layout = DefaultLayout }) => {
  return (
    <Layout>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/another_route" component={AnotherScreen} />
        <Route path="/newUser" component={NewUser}/>
        <Route path="/Login" component={Login}/>
        <Route path="/newPlan" component={NewPlan}/>
        <Redirect from="/" to="/app" />
      </Switch>
    </Layout>
  );
};

const Routes = ({ Layout = DefaultLayout }) => {
  return (
    <BrowserRouter>
      <RoutesPath Layout={Layout} />
    </BrowserRouter>
  );
};

export default Routes;
