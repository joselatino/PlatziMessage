import React from "react";
import "./ChatReceived.css";
function ChatReceived({ user }) {
  return (
    <article className="">
      <div className="chat__message  chat__received">
        <p>Freddy estas despedido, eres el peor empleado</p>
      </div>
      <p className="chat__message-time">
        <span>
          <img src={user} alt="" />
        </span>
        <span className="chat__message-name">Cristian</span>
        <span>10:00 AM</span>
      </p>
    </article>
  );
}

export { ChatReceived };
