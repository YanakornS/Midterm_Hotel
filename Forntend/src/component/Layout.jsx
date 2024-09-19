// src/component/Layout.jsx
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Contexts/AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <>
      <Navbar />
 
      <div className="h-screen flex flex-col">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
 </>
  );
};

export default Layout;
