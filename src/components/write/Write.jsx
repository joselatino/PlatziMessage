import React from "react";
import "./Write.css";
import { SendIcon } from "../Icons/SendIcon";

function Write() {
  return (
    <section>
      <article className="write__container">
        <input type="text" placeholder="Escribe aquí..." />
        <button className="write__send button">
          <SendIcon />
        </button>
      </article>
    </section>
  );
}

export { Write };
