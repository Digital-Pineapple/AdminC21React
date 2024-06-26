import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../containers/Dashboard/Dashboard";
import Categories from "../containers/Categories/Categories";
import Services from "../containers/Services/Services";
import Properties from "../containers/Properties/IndexProperties";
import SearchProperties from "../containers/SearchProperties/SearchProperties";
import PropertiesPending from "../containers/Properties/IndexPropertiesPending";
import VisitProperty from "../containers/Visits/VisitProperty";
import CreateProperty from "../containers/Properties/CreateProperty";
import Users from "../containers/Users/Users";
import AseUsers from "../containers/AseUsers/Users";
import Perfil from "../containers/Users/Perfil";
import EditProperty from "../containers/Properties/EditProperty";
import DetailProperty from "../containers/Properties/DetailProperty";
import DetailVisits from "../containers/Visits/DetailVisits";
const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Categories" component={Categories} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/PropertiesPending" component={PropertiesPending} />
      <Route exact path="/Properties" component={Properties} />
      <Route exact path="/SearchProperties" component={SearchProperties} />
      <Route exact path="/Visit" component={VisitProperty} />
      <Route exact path="/DetailVisits/:id" component={DetailVisits} />
      <Route exact path="/CreateProperty" component={CreateProperty} />
      <Route exact path="/EditProperty/:id" component={EditProperty} />
      <Route exact path="/Propertydetail/:id" component={DetailProperty} />
      <Route exact path="/Users" component={Users} />
      <Route exact path="/AseUsers" component={AseUsers} />
      <Route exact path="/Perfil" component={Perfil} />
    </Switch>
  );
};

export default AdminRoutes;
