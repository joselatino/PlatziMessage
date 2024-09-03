import React from "react";
import "./AboutContent.css";
import { ChatReceived } from "../ChatReceived/ChatReceived";

function AboutContent() {
  return (
    <section className="about-content ">
      <h2 className="shadow">Mensajes importantes</h2>
      <section className="about-content__messages">
        <ChatReceived user={"Crhistian Vanderheitz"} />
      </section>
    </section>
  );
}

export { AboutContent };
