import React from "react";
import "./ChatHeader.css";

import user from "../../assets/images/christian.jpg";
import { BackIcon } from "../Icons/Backicon";
import { DotIcon } from "../Icons/DotsIcon";
import { useAnimateButtons } from "../../routes/useAnimateButtons";

function ChatHeader() {
  const { navigateToView } = useAnimateButtons();

  return (
    <header className="chat-header shadow">
      <nav className="chat-header__nav">
        <button
          onClick={() => navigateToView("/home")}
          className="chat-header__button button"
        >
          <BackIcon />
        </button>
        <article className="chat-header__user">
          <div className="chat-header__user-profile">
            <img
              className="chat-header__user-image"
              src={user}
              alt="user image"
            />
            <div className="chat-header__user-dot"></div>
          </div>
          <div className="chat-header__user-info">
            <p className="chat-header__user-name">Cristian Vanderheitz</p>
            <p className="chat-header__user-status">Online</p>
          </div>
        </article>
        <button
          onClick={() => navigateToView("/about")}
          className="chat-header__about-button button"
        >
          <DotIcon />
        </button>
      </nav>
    </header>
  );
}

export { ChatHeader };
