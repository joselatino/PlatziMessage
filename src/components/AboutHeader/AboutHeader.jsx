import React from "react";
import cris from "../../assets/images/christian.jpg";

import "./AboutHeader.css";
import { BackIcon } from "../Icons/Backicon";
import { useNavigate } from "react-router-dom";
import { useAnimateButtons } from "../../routes/useAnimateButtons";
function AboutHeader() {
  const navigate = useNavigate();

  const { navigateToView } = useAnimateButtons();
  return (
    <header className="about-header">
      <button
        onClick={() => navigateToView("/chat")}
        className="chat-header__button button"
      >
        <BackIcon />
      </button>
      <figure className="about-header__user">
        <div className="about-header__user-profile">
          <img className="about-header__user__image" src={cris} alt="usuario" />
          <div className="about-header__user-dot"></div>
        </div>
        <figcaption>
          <h2>Christian Vanderheitz</h2>
          <p className="about-header__user__status">Online</p>
          <p>Soy un desarrollador web</p>
        </figcaption>
      </figure>
    </header>
  );
}

export { AboutHeader };
