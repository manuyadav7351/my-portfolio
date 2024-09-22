import { useState } from "react";
import "./home.scss";
import { useEffect } from "react";

const Home = () => {
  const words = ["M", "a", "n", "u Y", "a", "d", "a", "v"];
  const subtitle = ["Working as a Software Developer at payNways"];

  const [dragging , setDragging] = useState(false);
  const [position , setPosition] = useState(0);
  const [lightOn, setLightOn] = useState(false);
  //console.log(lightOn); 
  const maxDragDistance = 40;

  const handleMouseDown = () => {
    setDragging(true);
  }

  const handleMouseUp = () => {
    setDragging(false);
    if (position === maxDragDistance) {
      setLightOn(true);  // Turn on the light if fully dragged
    } else {
      setLightOn(false); // Turn off the light if not fully dragged
    }
  }

  const handleMouseMove = (e) => {
    const newPosition =  e.clientY - 100;
    const constrainedPosition = Math.min(newPosition, maxDragDistance);  // Limit drag to 40px
    setPosition(constrainedPosition > 0 ? constrainedPosition : 0);
  }

  useEffect(()=>{
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      // Remove the event listeners when the drag ends
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  },[dragging,position]);

  return (
    <>
      <div className="lightCord">
        <div className="lightCordRope" style={{ transform  :`translateY(${position}px)` }}></div>
        <div className="lightCordHandle" style={{ transform  :`translateY(${position}px)` }} onMouseDown={handleMouseDown}></div>
        <div className="lightCordHandle1" style={{ transform  :`translateY(${position}px)` }} onMouseDown={handleMouseDown}></div>
        <div className="lightCordHandle2" style={{ transform  :`translateY(${position}px)` }} onMouseDown={handleMouseDown}></div>
        { !lightOn ? <div className="lightMessage" >
          Please Pull Down
        </div> : '' }
      </div>
      <div className="home">
        <div className={`${lightOn ? "home_title_border" : ""}`}>
          <div className={`${lightOn ? "home_title_top" : ""}`}>
            {words.map((words, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.4}s` }}
                className={`${lightOn ? "home_title" : ""}`}
              >
                {words}
              </span>
            ))}
          </div>
        </div>
        <div className={`${lightOn ? "home_title_border" : ""}`}>
          <div className={`${lightOn ? "home_subtitle_top" : ""}`}>
            {subtitle.map((word, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.4}s` }}
                className={`${lightOn ? "home_subtitle" : ""}`}
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
