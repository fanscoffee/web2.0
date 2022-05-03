import React from "react";
import Helmet from "react-helmet";
import {Link} from 'react-router-dom';

function Privacy() {
  return (
    <div className="container-fluid mb-5 maxWidth margin-header">
      <Helmet>
        <title>Privacy Policy - PM Garcia Gonzalez</title>
        <meta name="title" content="Privacy Policy - PM GARCIA GONZALEZ" />
        <meta
          name="description"
          content="An overview of the privacy policies of PM Garcia Gonzalez with information on their website. By visiting this website, you accept following Terms of Use"
        />
        <link rel="canonical" href="https://pmgarciagonzalez.com/privacy" />
      </Helmet>
      <h1 className="text-center my-5">POLITICAS DE PRIVACIDAD</h1>
      <p>
        Fans Coffee & Bakery reconoce la necesidad de proteger toda la
        información considerada personal y privada, y requiere como una cuestión
        de política que cualquier y toda la información enviada en línea, tales
        como nombre, empresa, correo electrónico, teléfono, etc. sea utilizada
        únicamente con el propósito expreso de responder a su consulta. Toda la
        información personal es confidencial y sólo se comparte sólo se comparte
        con su consentimiento expreso. No es nuestra política enviar no
        solicitados, y todos los usuarios pueden darse de baja de nuestra lista
        de de correo electrónico en cualquier momento.
      </p>

      <p>
        Adicionalmente, es política de Fans Coffee & Bakery prohibir la venta
        y/o cualquier otra distribución de información personal a terceras
        empresas, y Fans Coffee & Bakery hará cumplir todos los acuerdos de
        privacidad para proteger la información de nuestros clientes.
      </p>

      <p>
        Fans Coffee & Bakery se compromete a proteger su privacidad y todas las
        personas con cualquier preocupación o pregunta sobre la privacidad se
        les pide que se pongan en contacto con Fans Coffee & Bakery para una
        mayor aclaración.
      </p>

      <div className="text-center">
        <Link to="/contacto" className="button">
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Privacy;
