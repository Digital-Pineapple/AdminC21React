// Importamos las dependencias necesarias de React y React Router
import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

// Importamos los componentes que se utilizarán en las rutas
import Dashboard from "../containers/Dashboard/Dashboard"; 
import Categories from "../containers/Categories/Categories"; 
import Services from "../containers/Services/Services"; 
import Properties from "../containers/Properties/IndexProperties"; 
import SearchProperties from "../containers/SearchProperties/SearchProperties"; 
import PropertiesPending from "../containers/Properties/IndexPropertiesPending"; 
import VisitPending from "../containers/Visits/VisitPending"; 
import VisitAccept from "../containers/Visits/VisitAccept"; 
import CreateProperty from "../containers/Properties/CreateProperty"; 
import Users from "../containers/Users/Users"; 
import AseUsers from "../containers/AseUsers/Users"; 
import UsersInm from "../containers/Users/UsersInm"; 
import Perfil from "../containers/Users/Perfil";
import EditProperty from "../containers/Properties/EditProperty"; 
import DetailProperty from "../containers/Properties/DetailProperty"; 
import DetailVisits from "../containers/Visits/DetailVisits"; 
import SoldProperties from "../containers/Properties/SoldProperties"; 
import RentProperties from "../containers/Properties/RentProperties"; 

// Definimos el componente que contiene todas las rutas para el panel de administración
const AdminRoutes = () => {
  return (
    // Usamos 'Switch' para asegurarnos de que solo se renderice la primera ruta coincidente
    <Switch>
      {/* Rutas para las diferentes vistas del panel de administración */}
      <Route exact path="/" component={Dashboard} /> {/* Ruta para el dashboard */}
      <Route exact path="/Categories" component={Categories} /> {/* Ruta para las categorías */}
      <Route exact path="/Services" component={Services} /> {/* Ruta para los servicios */}
      <Route exact path="/PropertiesPending" component={PropertiesPending} /> {/* Ruta para propiedades pendientes */}
      <Route exact path="/Properties" component={Properties} /> {/* Ruta para las propiedades */}
      <Route exact path="/SoldProperties" component={SoldProperties} /> {/* Ruta para propiedades vendidas */}
      <Route exact path="/RentProperties" component={RentProperties} /> {/* Ruta para propiedades en renta */}
      <Route exact path="/SearchProperties" component={SearchProperties} /> {/* Ruta para búsqueda de propiedades */}
      <Route exact path="/VisitPending" component={VisitPending} /> {/* Ruta para visitas pendientes */}
      <Route exact path="/VisitAccept" component={VisitAccept} /> {/* Ruta para aceptar visitas */}
      <Route exact path="/DetailVisits/:id" component={DetailVisits} /> {/* Ruta para ver detalles de una visita */}
      <Route exact path="/CreateProperty" component={CreateProperty} /> {/* Ruta para crear una propiedad */}
      <Route exact path="/EditProperty/:id" component={EditProperty} /> {/* Ruta para editar una propiedad */}
      <Route exact path="/Propertydetail/:id" component={DetailProperty} /> {/* Ruta para ver detalles de una propiedad */}
      <Route exact path="/Users" component={Users} /> {/* Ruta para gestionar usuarios */}
      <Route exact path="/AseUsers" component={AseUsers} /> {/* Ruta para gestionar usuarios ASE */}
      <Route exact path="/UsersInm/:id" component={UsersInm} /> {/* Ruta para gestionar usuarios inmobiliarios */}
      <Route exact path="/Perfil" component={Perfil} /> {/* Ruta para ver el perfil del usuario */}
    </Switch>
  );
};

// Exportamos el componente con las rutas configuradas
export default AdminRoutes;
