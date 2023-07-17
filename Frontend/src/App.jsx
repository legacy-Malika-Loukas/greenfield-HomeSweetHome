import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import CreateHome from "./components/UserManagement/CreateHome";
import { Routes, Route } from "react-router-dom";
import UpdateHome from "./components/UserManagement/UpdateHome";
import Navbar from "./components/Navbar";
import SlideNavbar from './components/Login_Logout/SlideNavbar';
import AdminSlideNav from "./components/Login_Logout/AdminSlideNav";
import Footer from './components/FooterSection/Footer';
import AdminProfile from "./components/AdminManagement/AdminProfile";
import ExploreLibrary from "./components/ExploreLibrary";
import UserProfile from "./components/UserManagement/UserProfile";
import AddAdminForm from "./components/AdminManagement/AddAdminForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup-login" element={<SlideNavbar/>} />
        <Route path="/admin" element={<AdminSlideNav/>} />
        <Route path="/admin-profile" element={<AdminProfile/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create/:userId" element={<CreateHome />} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/homes" element={<ExploreLibrary />} />
        <Route path="/update/:id" element={<UpdateHome />} />
        <Route path="/admin-profile/admin/create" element={<AddAdminForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
