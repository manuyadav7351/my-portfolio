import React from "react";
import "./skill.scss";
import html from "../../assets/html.svg";
import js from "../../assets/js.png";
import css from "../../assets/css.svg";
import react from "../../assets/react-js.svg";
import java from "../../assets/java.svg";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux.svg"
import angular from "../../assets/angularjs.svg"

const skills = [
  {name : "React JS" , img : react, id : 1},
  {name : "Angular JS", img : angular, id : 2},
  {name : "JS" , img : js, id : 3},
  {name : "Redux" , img : redux, id : 4},
  {name : "HTML" , img : html, id : 5},
  {name : "CSS" , img : css , id : 6},
  {name : "Java" , img : java, id : 7},
]

const Skills = () => {
  return (
    <div className="skill">
      {skills.map((skill)=>(
        <div className={`skill_cube cube-${skill.id}`}
          key={skill.id} 
          id={skill.id}
          style={{ animationDelay: `${skill.id * 1}s` }}
          >
        <div className="skill_top"><img key={skill.id} src={skill.img} alt="" /></div>
        <div className="skill_cube_inner">
          {[0, 1, 2, 3].map((index) => (
            <span style={{ "--i": index }} key={index}>
              {skill.name}
            </span>
          ))}
        </div>
        <div className="skill_down"></div>
      </div>
      ))}
    </div>
  );
};

export default Skills;
