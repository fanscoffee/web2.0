import React, { useEffect } from "react";
import "./NotFound.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container-fluid mb-5 text-center margin-header">
      <Helmet>
        <title>Error 404 - Fans Coffee & Bakery</title>
        <meta name="title" content="Error 404 - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Si ves este mensaje significa que no has elegido el camino correcto, debes volver a la página de inicio."
        />
      </Helmet>
      <h1 className="mx-auto ">Error 404</h1>
      <p className="notFound__sentence">
      Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <div className="container mb-3">
        <Link to="/">
          <img
            className="notFound__img"
            src="https://i.imgur.com/lDJZJoX.png"
            alt="404"
          />
        </Link>
      </div>
      <Link className="button" to="/contacto">
        Contacto
      </Link>
    </div>
  );
}