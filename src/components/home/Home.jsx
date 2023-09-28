import "./home.scss";

const Home = () => {
  const words = ["M", "a", "n", "u Y","a", "d", "a", "v"];
  const subtitle = ["I a", "m a R", "eact Js D", "eveloper"];

  return (
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
  );
};

export default Home;
