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
        <div className="min-h-[calc(100vh-376px)]">
        <Outlet />
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
