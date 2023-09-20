import React from "react";
import "./project.scss";
import html from "../../assets/html.svg";
import js from "../../assets/js.png";
import css from "../../assets/css.svg";
import react from "../../assets/react-js.svg";

const projects = [
  { name: "Shusi Restaurent", r: 25, img: react, id: 1 },
  { name: "Shoes Shopping Site", r: -15, img: js, id: 2 },
  { name: "Basket a Ball", r: 25, img: html, id: 3 },
  { name: "Picture TakeUp", r: -15, img: css, id: 4 },
];

const Project = () => {
  return (
    <div className="contain">
      <div className="container">

        {projects.map((project) => (
          <div className="glass" key={project.id} style={{ "--r": `${project.r}` }} data-text={project.name}>
            <button className="rotate">Info</button>
            <img src={project.img} alt="" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;
