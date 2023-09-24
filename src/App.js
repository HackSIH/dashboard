import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Dashboard from "./Pages/Dashboard";
import AppRoutes from "./Components/AppRoutes";
import Design_curriculum from "./Pages/Design_curriculum";


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <AppRoutes /> 
      </div>
      <AppFooter />
    </div>
  );
}
export default App;