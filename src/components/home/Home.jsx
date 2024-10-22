//import { useState } from "react";
//import { useEffect } from "react";
import "./home.scss";

const Home = () => {
  const words = ["M", "a", "n", "u Y", "a", "d", "a", "v"];
  const subtitle = ["Working as a Software Developer at payNways"];

  //const [touch , setTouch] = useState(false);
  //const [dragging , setDragging] = useState(false);
  // const [position , setPosition] = useState(0);
  //const [lightOn, setLightOn] = useState(true);
  //console.log(lightOn); 
  //const maxDragDistance = 40;



  return (
    <>
      <div className="home">
        <div className="home_title_border">
          <div className="home_title_top">
            {words.map((words, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.4}s` }}
                className="home_title"
              >
                {words}
              </span>
            ))}
          </div>
        </div>
        <div className="home_title_border">
          <div className="home_subtitle_top">
            {subtitle.map((word, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.4}s` }}
                className="home_subtitle"
              >
                {word}
              </span>
            ))}
          </div>
          {/* <div className="home_subtitle_top">
            <span className="home_subtitle" data-text={subtitle} >
              {subtitle}
            </span>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
