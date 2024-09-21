import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../component/Layout"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const AddHotel = lazy(() => import("../pages/AddHotel"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const NotAllowed = lazy(() => import("../pages/NotAllowed"));
const UsePage = lazy(() => import("../pages/UsePage"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const ProtectRegister = lazy(() => import("../pages/ProtectRegister"));








// import Layout from "../component/Layout";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import AddHotel from "../pages/AddHotel";
// import AdminPage from "../pages/AdminPage";
// import NotAllowed from "../pages/NotAllowed";
// import UsePage from "../pages/UsePage";
// import UserProfile from "../pages/UserProfile";
// import LandingPage from "../pages/LandingPage";




import { createBrowserRouter } from "react-router-dom";
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
        element: <ProtectRegister><Register /></ProtectRegister>,
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
