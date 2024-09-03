import React from "react";
import "./LoginPage.css";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { useAnimateButtons } from "../useAnimateButtons";

function LoginPage() {
  const { navigateToView } = useAnimateButtons();

  function Login(e) {
    e.preventDefault();
    navigateToView("/home");
    console.log("login");
  }

  return (
    <>
      <MainLayout>
        <section className="login-header">
          <h1>PlatziMessage 💚</h1>
          <h2 className="login-header__title">Inicia Sesion con tu Cuenta !</h2>
          <p>Y empieza hablar con tus amigos !</p>
        </section>
        <section className="">
          <form className="login-form" onSubmit={Login}>
            <label htmlFor="username">Ingresa tu nombre de usuario</label>
            <input
              id="username"
              className="light-shadow"
              type="email"
              placeholder="Escribe tu nombre de usuario"
            />
            <label htmlFor="password">Ingresa tu nombre de contraseña</label>

            <input
              id="password"
              className="light-shadow"
              type="password"
              placeholder="Escribe tu contraseña"
            />

            <button className="login-button login-button__login light-shadow">
              Iniciar Sesión
            </button>
          </form>
          <hr />
          <p>¿No tienes una cuenta ? Registrate!</p>
          <button
            onClick={() => navigateToView("/register")}
            className="login-button login-button__register"
          >
            Crear cuenta
          </button>
        </section>
      </MainLayout>
    </>
  );
}

export { LoginPage };
