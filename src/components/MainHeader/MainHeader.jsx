import React from "react";
import { Search } from "../Search/Search";
import "./MainHeader.css";

import user from "../../assets/images/freddy.jpg";
import { AddIcon } from "../Icons/AddIcon";
import { useAnimateButtons } from "../../routes/useAnimateButtons";

function MainHeader() {
  const { navigateToView } = useAnimateButtons();
  return (
    <>
      <header>
        <section className="header__user">
          <figure onClick={() => navigateToView("/me")} className="user">
            <img className="user__image" src={user} alt="logo" />
          </figure>
          <article className="header__button">
            <button
              onClick={() => navigateToView("/new-contact")}
              className="button__add"
            >
              <AddIcon />
            </button>
          </article>
        </section>
        <h1 className="title">PlatziMessage</h1>
        <Search />
      </header>
    </>
  );
}

export { MainHeader };
