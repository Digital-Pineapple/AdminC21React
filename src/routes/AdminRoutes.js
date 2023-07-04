import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../containers/Dashboard/Dashboard";
import Categories from "../containers/Categories/Categories";
import Services from "../containers/Services/Services";
import Properties from "../containers/Properties/IndexProperties";
import Users from "../containers/Users/Users";
import Perfil from "../containers/Users/Perfil";
const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Categories" component={Categories} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Properties" component={Properties} />
      <Route exact path="/Users" component={Users} />
      <Route exact path="/Perfil" component={Perfil} />
    </Switch>
  );
};

export default AdminRoutes;
