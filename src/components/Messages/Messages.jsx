import React from "react";

import "./Messages.css";
import { useAnimateButtons } from "../../routes/useAnimateButtons";
import { Message } from "../Message/Message";

function Messages() {
  return (
    <section className="messages-container">
      <Message />
      <Message />
      <Message />
    </section>
  );
}

export { Messages };
