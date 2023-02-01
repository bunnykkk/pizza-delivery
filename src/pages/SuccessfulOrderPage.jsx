import React from "react";
import "../styles/SuccessfulOrderPage.css";
import heart from "../img/heart.png";
import Vector from "../img/Vector 6.svg";
import car from "../img/car.svg";
import Логотип from "../img/Логотип.svg";
import love from "../img/love.svg";

const SuccessfulOrderPage = () => {
  return (
    <div className="content_succ">
      <img className="heart" src={heart} alt="" />
      <div className="succ_t">
        <h1 className="title_succ">Ваш заказ оформлен</h1>
        <h3 className="h3_succ">Ожидайте звонка от нашего оператора</h3>
      </div>
      <div className="center_s">
        <img className="line_s" src={Vector} alt="" />
        <img className="car" src={car} alt="" />
      </div>
      <div className="third">
        <h3 className="h3_succ2">Приятного аппетита</h3>
        <img className="love" src={love} alt="" />
        <img className="logo_s" src={Логотип} alt="" />
      </div>
      {/* <h3 className="h3_succ2">Приятного аппетита</h3> */}
      {/* <img className="line_s" src={Vector} alt="" />
      <img className="car" src={car} alt="" /> */}
      {/* <div className="logo_s">
        <img src={Логотип} alt="" />
      </div>
      <img className="love" src={love} alt="" /> */}
    </div>
  );
};

export default SuccessfulOrderPage;
