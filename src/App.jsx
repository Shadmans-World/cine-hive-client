import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DynamicTitle from "./Dynamic Title/DynamicTitle";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
      <DynamicTitle />
        <Navbar />
        <Outlet />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
