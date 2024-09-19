// src/Routers/Router.jsx

import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../component/Layout"));







import { createBrowserRouter } from "react-router-dom";
// import Layout from "../component/Layout";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddHotel from "../pages/AddHotel";
import AdminPage from "../pages/AdminPage";
import NotAllowed from "../pages/NotAllowed";
import UsePage from "../pages/UsePage";
import UserProfile from "../pages/UserProfile";

import LandingPage from "../pages/LandingPage";
// import Home from './../pages/Home';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "",
        element:<LandingPage />

      },
      {
        path: "/Home", // เส้นทางนี้จะเป็นเส้นทางหลัก
        element:<UsePage><Home /></UsePage> ,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      { 
        path: "AddHotel",
        element: <AdminPage><AddHotel /></AdminPage>,
      },
      {
        path:"NotAllowed",
        element:  <NotAllowed />
      },
      {
        path: "UserProfile",
        element: <UsePage><UserProfile /></UsePage> ,
      },
    
      
    ],
  },
]);

export default router;
