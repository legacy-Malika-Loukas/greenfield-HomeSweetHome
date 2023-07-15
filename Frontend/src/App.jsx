import "./App.css";
// import SignupLoginPage from "./pages/Signup-login";
import HomePage from "./pages/HomePage";
import CreateHome from "./pages/CreateHome";
import { Routes, Route } from "react-router-dom";
import UpdateHome from "./pages/UpdateHome";
import Navbar from "./components/Navbar";
import SlideNavbar from './components/SlideNavbar';
import AdminSlideNav from "./components/AdminSlideNav";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<SignupLoginPage />} /> */}
        <Route path="/profile" element={<SlideNavbar/>} />
        <Route path="/admin" element={<AdminSlideNav/>} />
        <Route path="/homes" element={<HomePage />} />
        <Route path="/create" element={<CreateHome />} />
        <Route path="/update/:id" element={<UpdateHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
