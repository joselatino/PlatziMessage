import React from "react";
import "./ChatPage.css";

import { MainLayout } from "../../components/MainLayout/MainLayout";
import { ChatHeader } from "../../components/ChatHeader/ChatHeader";
import { Chat } from "../../components/Chat/Chat";
import { Write } from "../../components/write/Write";

function ChatPage() {
  return (
    <>
      <MainLayout>
        <section className="chat-page">
          <ChatHeader />
          <main>
            <Chat />
          </main>
          <Write />
        </section>
      </MainLayout>
    </>
  );
}

export { ChatPage };
