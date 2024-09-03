import React from "react";
import "./ChatSend.css";
function ChatSend({ user2: user }) {
  return (
    <article>
      <p className="chat__message  chat__send">
        Gracias a php ! Debo confesar Christian que siempre te he odiado
      </p>
      <p className="chat__message-time chat__send-time">
        <span>10:01 AM</span>
        <span className="chat__message-name">you</span>
        <span>
          <img src={user} alt="" />
        </span>
      </p>
    </article>
  );
}

export { ChatSend };
