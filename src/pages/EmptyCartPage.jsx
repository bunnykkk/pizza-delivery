import React from "react";
import rectangle from "../img/Rectangle2.png";
import "../styles/EmptyCart.css";
import seno from "../img/seno.png";
import { useNavigate } from "react-router-dom";

const EmptyCartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="container-cart">
        <img className="background-1" src={rectangle} alt="" />
        <h2 className="cart-text">Упс! Ваша корзина пуста</h2>
        <img id="cart-image" src={seno} alt="" />
        <h3 id="card-text-secondary">Перейдите в меню, чтобы начать заказ.</h3>
        <button onClick={() => navigate("/")} className="btn_cart">
          Заказать
        </button>
      </div>
    </>
  );
};

export default EmptyCartPage;
