import "./App.css";
import AuthState from "./context/auth/AuthState";
import AppRouter from "./routes/AppRouter";
import CategoryState from "./context/Categories/CategoryState";
import ServicesState from "./context/Services/ServicesState";
import UsersState from "./context/Users/UsersState";
import PropertiesState from "./context/Properties/PropertiesState";
import DashboardState from "./context/Dashboard/DashboardState";
import VisitState from "./context/Visits/VisitState";
import ReportState from "./context/ReportVisits/ReportState";
function AdminApp() {
  return (
    // Encapsula la aplicación en varios proveedores de estado para manejar el estado global.
    <AuthState>
      <UsersState>
        <CategoryState>
          <ServicesState>
            <PropertiesState>
              <VisitState>
                <ReportState>
                  <DashboardState>
                    {/* Configura y renderiza las rutas dentro del panel de administración. */}
                    <AppRouter /> 
                  </DashboardState>
                </ReportState>
              </VisitState>
            </PropertiesState>
          </ServicesState>
        </CategoryState>
      </UsersState>
    </AuthState>
  );
}

export default AdminApp;
