import React from "react";
import { useAnimateButtons } from "../../routes/useAnimateButtons";
import user from "../../assets/images/christian.jpg";

function Message() {
  const { navigateToView } = useAnimateButtons();
  return (
    <article onClick={() => navigateToView("/chat")} className="message">
      <figure className="message__user">
        <img className="message__image" src={user} alt="logo" />
        <figcaption>
          <p className="message__name">Cristian Vanderheitz</p>
          <p className="message__message">
            Freddy estas despedido, eres el peor empleado
          </p>
        </figcaption>
        <div className="new-message">
          <div className="new-message__icon"></div>
        </div>
      </figure>
    </article>
  );
}

export { Message };
