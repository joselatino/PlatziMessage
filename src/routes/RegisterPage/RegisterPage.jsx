import React from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";

import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useAnimateButtons } from "../useAnimateButtons";

function RegisterPage() {
  const { navigateToView } = useAnimateButtons();

  function Create(e) {
    navigateToView("/login");
  }
  return (
    <MainLayout>
      <section className="register-header">
        <h1>Registrate ! </h1>
        <p>Crea una cuenta para chatear con tus amigos !</p>
      </section>
      <section className="register-form">
        <form className="register-form__form">
          <label htmlFor="username">Crea tu nombre de usuario</label>
          <input
            id="username"
            className="light-shadow"
            type="email"
            placeholder="Escribe tu nombre de usuario"
          />
          <label htmlFor="password">Crea tu contraseña</label>

          <input
            id="password"
            className="light-shadow"
            type="password"
            placeholder="Escribe tu contraseña"
          />
          <label htmlFor="password-repeat">
            Escribe nuevamente tu contraseña
          </label>

          <input
            id="password-repeat"
            className="light-shadow"
            type="password"
            placeholder="Escribe tu contraseña"
          />
          <button
            onClick={Create}
            className="login-button login-button__login light-shadow"
          >
            Crear cuenta
          </button>
        </form>
      </section>
    </MainLayout>
  );
}

export { RegisterPage };
