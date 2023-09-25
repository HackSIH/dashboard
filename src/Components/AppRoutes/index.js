import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import My_profile from "../../Pages/My_profile";
import Design_curriculum from "../../Pages/Design_curriculum";
import Resources from "../../Pages/resources";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/My_profile" element={<My_profile />}></Route>
      <Route path="/Design_curriculum" element={<Design_curriculum />}></Route>
      <Route path="/resources" element={<Resources />}></Route>
    </Routes>
  );
}
export default AppRoutes;