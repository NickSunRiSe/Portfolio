import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Main from "../pages/Main";
import Music from "../pages/Music";

const Menu_Nav = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/music" element={<Music/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
};

export default Menu_Nav;
