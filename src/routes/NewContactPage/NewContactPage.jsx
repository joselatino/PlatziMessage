import React from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";

import "./NewContactPage.css";
import { BackIcon } from "../../components/Icons/Backicon";
import { useAnimateButtons } from "../useAnimateButtons";

function NewContactPage() {
  const { navigateToView } = useAnimateButtons();
  return (
    <MainLayout>
      <section className="new-contact">
        <button
          onClick={() => navigateToView("/")}
          className="button new-contact__back-button"
        >
          <BackIcon />
        </button>
        <section>
          <h1>Agregar amigo</h1>
          <p>
            Pidele a tu amigo su id para poder agregarlo a tu lista de contactos
          </p>
        </section>
        <form>
          <label htmlFor="Buscar"></label>
          <input type="text" placeholder="Introduce el id de tu amigo" />
          <button
            onClick={() => navigateToView("/chat")}
            className="new-contact__search"
          >
            Agregar
          </button>
        </form>
      </section>
    </MainLayout>
  );
}

export { NewContactPage };
