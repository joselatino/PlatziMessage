import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { LoginPage } from "./LoginPage/LoginPage";
import { ChatPage } from "./ChatPage/ChatPage";
import { AboutPage } from "./AboutPage/AboutPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { NewContactPage } from "./NewContactPage/NewContactPage";
import { UserPage } from "./UserPage/UserPage";

function Router() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-contact" element={<NewContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/me" element={<UserPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export { Router };
