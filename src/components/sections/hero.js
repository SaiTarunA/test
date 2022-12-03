import { hero } from "../../config";
import { ReactComponent as Arrow } from "../../assets/hero_arrow.svg";
import "../../styles/hero.css";

const Hero = (props) => {
  const handleButtonClick = (url, isDownloadable) => {
    if (isDownloadable) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.replace(url);
    }
  };

  return (
    <section id="home" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="hero workspace">
        <div className="hero-left-container">
          {hero[0].show_arrow_doodle && <Arrow />}
          <div className="hero-text-container">
            <div className="hero-title">
              <h1>{hero[0].first_line}&nbsp;</h1>
              <h1 className="primary-color">{hero[0].main_line}</h1>
            </div>
            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => handleButtonClick(hero[0].primary_button_url)}
              >
                <span>{hero[0].primary_button}</span>
                {hero[0].primary_button_icon}
              </button>
              <button
                className="secondary-button"
                onClick={() =>
                  handleButtonClick(hero[0].secondary_button_url, true)
                }
              >
                <span>{hero[0].secondary_button}</span>
                {hero[0].secondary_button_icon}
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image">{hero[0].image}</div>
      </div>
    </section>
  );
};

export default Hero;
