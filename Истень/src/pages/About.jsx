import React from "react";
import FooterLinks from "../Elements/FooterLinks";
import Header from "../Elements/Header";
import Nav_main from "../Elements/Nav_main";
import TextAbout from "../Elements/Sub-elements/TextAbout";
 
const About = () => {
  return ( 
    <div className="container">
      <Header />
      <Nav_main />
      <TextAbout/>
      <FooterLinks />
    </div>
  );
};

export default About;
