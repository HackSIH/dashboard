import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Dashboard from "./Pages/Dashboard";
import AppRoutes from "./Components/AppRoutes";
import Design_curriculum from "./Pages/Design_curriculum";
import resources from "./Pages/resources";

function App() {
  return (
    <div className="App">
      <div className="image"></div>
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