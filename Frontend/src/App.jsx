import "./App.css";
import HomePage from "./pages/HomePage";
import CreateHome from "./pages/CreateHome";
import { Routes, Route } from "react-router-dom";
import UpdateHome from "./pages/UpdateHome";
import Navbar from "./components/Navbar";
import SlideNavbar from './components/SlideNavbar';
import AdminSlideNav from "./components/AdminSlideNav";
import Footer from './components/Footer';
import AdminProfile from "./components/AdminProfile";
import ExploreLibrary from "./pages/ExploreLibrary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<SlideNavbar/>} />
        <Route path="/admin" element={<AdminSlideNav/>} />
        <Route path="/admin-profile" element={<AdminProfile/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateHome />} />
        <Route path="/homes" element={<ExploreLibrary />} />
        <Route path="/update/:id" element={<UpdateHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
