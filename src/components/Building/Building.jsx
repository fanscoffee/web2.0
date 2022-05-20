import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container-fluid my-5 text-center maxWidth">
      <h1 className="mx-auto">En Construcción</h1>
      <p className="notFound__sentence">
      Nuestra pagina esta bajo construccion, sabiendo esto aun puedes contactarte con nosotros a travez de nuestra pagina de contacto rellenando el formulario y te atenderemos tan pronto como sea posible.
      </p>

      <div className="container mb-3">
        <Link to="/">
          <img
            className="notFound__img "
            src="https://i.imgur.com/qIufhof.png"
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