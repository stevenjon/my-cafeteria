import { AnimatePresence } from "framer-motion";
import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import DownModal from "./Components/Modal/DownModal";
import About from "./Pages/About";
import AnimatedPage from "./Pages/AnimatedPage";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

const Layout = () => {
  const location = useLocation();
  return (
    <div style={{ backgroundColor: "#f43" }}>
      <Link to={"/app"}>app</Link>
      <DownModal></DownModal>
      {/* <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/app"
            element={
              <AnimatedPage>
                <App />
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <AnimatedPage>
                <Home></Home>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                {" "}
                <Contact></Contact>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <AnimatedPage>
                {" "}
                <About></About>
              </AnimatedPage>
            }
          ></Route>
        </Routes>
      </AnimatePresence> */}
    </div>
  );
};

export default Layout;
