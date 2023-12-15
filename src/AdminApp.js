import logo from "./logo.svg";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import AppRouter from "./routes/AppRouter";
import CategoryState from "./context/Categories/CategoryState";
import ServicesState from "./context/Services/ServicesState";
import UsersState from "./context/Users/UsersState";
import PropertiesState from "./context/Properties/PropertiesState";
import DashboardState from "./context/Dashboard/DashboardState";
import VisitState from "./context/Visits/VisitState";
function AdminApp() {
  return (
    <AuthState>
      <UsersState>
        <CategoryState>
          <ServicesState>
            <PropertiesState>
              <VisitState>
                <DashboardState>
                  <AppRouter />
                </DashboardState>
              </VisitState>
            </PropertiesState>
          </ServicesState>
        </CategoryState>
      </UsersState>
    </AuthState>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default AdminApp;
