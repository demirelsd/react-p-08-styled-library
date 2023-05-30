import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import { GlobalStyles } from "../styles/Global.styles";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import { useState } from "react";

const AppRouter = ({ myTheme, setMyTheme }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user") || false
  );
  return (
    <BrowserRouter>
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/register" element={<Register />} />
        {/* <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}
        <Route path="" element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer myTheme={myTheme} setMyTheme={setMyTheme} />
    </BrowserRouter>
  );
};

export default AppRouter;
