import React from "react";
import "./project.scss";
import html from "../../assets/html.svg";
import js from "../../assets/js.png";
import cryptoImg from "../project/projectassets/crypto-analyzer/crypto.png";
import react from "../../assets/react-js.svg";
import { Link } from "react-router-dom";

const projects = [
  { name: "Shusi Restaurent", r: 25, img: react, id: 1, link : "https://crypto-analyzer-omega.vercel.app/"},
  { name: "Shoes Shopping Site", r: -15, img: js, id: 2, link : "https://crypto-analyzer-omega.vercel.app/" },
  { name: "Basket a Ball", r: 25, img: html, id: 3, link : "https://crypto-analyzer-omega.vercel.app/" },
  { name: "Crypto Currency Tracker", r: -15, img: cryptoImg, id: 4 , link : "https://crypto-analyzer-omega.vercel.app/"},
];

const Project = () => {
  return (
    <div className="contain">
      <div className="container">

        {projects.map((project) => (
          <Link to={project.link} target="_blank">
          <div className="glass" key={project.id} style={{ "--r": `${project.r}` }} data-text={project.name}>
            <button className="rotate">Info</button>
            <img src={project.img} alt="" />
          </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Project;
