import React from "react";
import FooterLinks from '../Elements/FooterLinks';
import Header from "../Elements/Header";
import Nav_main from "../Elements/Nav_main";
import Contact from "../Elements/Sub-elements/Contact";

const Contacts = () => {
  return (
    <div className="container">
      <Header />
      <Nav_main />
      <Contact/>
      <FooterLinks />
    </div>
  );
};

export default Contacts;
