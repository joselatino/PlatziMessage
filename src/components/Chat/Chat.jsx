import React from "react";
import "./Chat.css";
import user from "../../assets/images/christian.jpg";
import user2 from "../../assets/images/freddy.jpg";
import { ChatReceived } from "../ChatReceived/ChatReceived";
import { ChatSend } from "../ChatSend/ChatSend";
function Chat() {
  return (
    <section className="chat">
      <div className="chat__container">
        <ChatReceived user={user} />
        <ChatSend user2={user2} />
      </div>
    </section>
  );
}

export { Chat };
