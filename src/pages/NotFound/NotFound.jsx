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
        <title>404 Not Found - PM GARCIA GONZALEZ</title>
        <meta name="title" content="404 Not Found - PM GARCIA GONZALEZ" />
        <meta
          name="description"
          content="If you are seeing this message it means that you have not chosen the right path, you can go back to the home page."
        />
      </Helmet>
      <h1 className="mx-auto ">Error 404</h1>
      <p className="notFound__sentence">
      Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <div className="container">
        <Link to="/">
          <img
            className="notFound__img"
            src="https://i.imgur.com/WYPT13x.png"
            alt="404"
          />
        </Link>
      </div>
      <Link className="button" to="/contact">
        Contact Page
      </Link>
    </div>
  );
}