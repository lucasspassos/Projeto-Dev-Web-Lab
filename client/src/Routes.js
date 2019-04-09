import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import App from "./App";
import AnotherScreen from "./AnotherScreen";
import Login from  "./Login";
import NewUser from "./NewUser";
import NewPlan from "./NewPlan";
import NewCourse from "./NewCourse"
import NewDiscipline from "./NewDiscipline"
import NewClass from "./NewClass";
import ShowUsers from "./ShowUsers";

const DefaultLayout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

const RoutesPath = ({ Layout = DefaultLayout }) => {
  return (
    <Layout>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/another_route" component={AnotherScreen} />
        <Route path="/Login" component={Login}/>
        <Route path="/newUser" component={NewUser}/>
        <Route path="/newPlan" component={NewPlan}/>
        <Route path="/newCourse" component={NewCourse}/>
        <Route path="/newDiscipline" component={NewDiscipline}/>
        <Route path="/newClass" component={NewClass}/>
        <Route path="/ShowUsers" component={ShowUsers}/>
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
