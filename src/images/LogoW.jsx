import React from 'react';
import EyesF from "./лого2.png";
import { Link } from "react-router-dom";

const Isten = () => {
    return <Link to="/main" className="nav_text"><img src={EyesF} className="Isten"></img></Link>
};

export default Isten;