import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import FooterComponent from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
