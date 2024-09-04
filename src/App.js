import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* --------------------------- CSS File import---------------------------------- */

import "../src/assets/style/website.css";

/* ---------------------------Screens import----------------------------------- */
import Website from "../src/assets/pages/Website";
import Login from "../src/assets/pages/Login";
import Signup from "../src/assets/pages/Signup";
import Modal from "../src/assets/component/Modal"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
