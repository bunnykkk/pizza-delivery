import React from "react";
import rectangle from "../img/Rectangle2.png";
import "../styles/HomePage.css";
import mainhome from "../img/mainhome.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="background" src={rectangle} alt="" />
      <div className="homet">
        <h1 className="h1_home">Italia в Твоем доме</h1>
        <h3 className="h3_home">В один клик</h3>
        <button className="btn_home">Заказать</button>
      </div>
      <div className="homeblock">
        <img className="mainhome_img" src={mainhome} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
