import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [visiblity , setVisiblity] = useState(false);

  const handleClick = () => {
    setVisiblity(!visiblity)
  }

  useEffect(()=>{

  }, [visiblity]);

  return (
    <div className="nav">
      <div className="dropdown">
        <div className="parent-drop">
        <div onClick={handleClick} className="lii">▼</div>
        <ul onClick={handleClick} className={visiblity ? "dropdown-content active" : "dropdown-content"}>
          <li><Link to="/"><div className="lii">HOME</div></Link></li>
          <li><Link to="/skills"><div className="lii">SKILLS</div></Link></li>
          <li><Link to="/projects"><div className="lii">PROJECT</div></Link></li>
          <li><Link to="/educations"><div className="lii">ABOUT ME</div></Link></li>
          <li><Link to="/contacts"><div className="lii">CONTACT ME</div></Link></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// making changes

