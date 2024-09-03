import React, { Component } from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";

import freddy from "../../assets/images/freddy.jpg";
import "./UserPage.css";
import { BackIcon } from "../../components/Icons/Backicon";
import { useAnimateButtons } from "../useAnimateButtons";
function UserPage() {
  const { navigateToView } = useAnimateButtons();
  return (
    <MainLayout>
      <button
        onClick={() => navigateToView("/home")}
        className="chat-header__button button"
      >
        <BackIcon />
      </button>
      <figure className="user-page__profile">
        <img className="user-page__image" src={freddy} alt="logo" />
        <figcaption>
          <h1>
            <input
              className="user-page__name"
              type="text"
              placeholder="Freddy"
            />
          </h1>
          <input
            className="user-page__bio"
            type="text"
            placeholder="Desarrollador Web en busca de empleo"
          />
        </figcaption>
      </figure>
    </MainLayout>
  );
}

export { UserPage };
