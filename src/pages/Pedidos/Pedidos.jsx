import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Helmet from "react-helmet";
import Swal from "sweetalert2";
import "./Pedidos.scss";

function Pedidos() {
  const [Check, setCheck] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41jd8bu",
        "template_z4kvmeo",
        e.target,
        "user_VaLr7BsCt78q4iYCxk1Mo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const check = () => {
    let agree = document.querySelector("#contactFormAgree");

    let status = agree.checked ? true : false;
    setCheck(status);
  };

  const showAlert = () => {
    if (Check) {
      Swal.fire({
        title: "Confirmado",
        text: "Hemos recibido tu mensaje, revisaremos la información y estaremos en contacto pronto.",
        icon: "success",
        button: "OK",
        timer: "3000",
        timerProgressBar: "true",
      });
    } else {
      Swal.fire({
        title: "Espera",
        text: "Tienes que terminar de rellenar la información.",
        icon: "info",
        button: "OK",
        timer: "3000",
        timerProgressBar: "true",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Pedidos - Fans Coffee & Bakery</title>
        <meta name="title" content="Pedidos - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Deste esta pagina puedes hacer pedidos personalizados desde formulario o ir directamente a Glovo."
        />
        <link rel="canonical" href="https://fanscoffeebakery.com/pedidos" />
      </Helmet>
      <div className="pedidos">
        <div className="row">
          <div className="col-lg-6 col-md-12 pedidos__first">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <h3>PEDIDO PARA RECOGER EN TIENDA</h3>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    id="nombre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    className="form-control"
                    id="telefono"
                    required
                  />
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Pedido
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="3"
                  required></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="contactFormAgree"
                  onChange={check}
                  required
                />
                <label className="form-check-label" htmlFor="contactFormAgree">
                  Doy mi consentimiento para el tratamiento de los datos
                  personales que facilito. He leído y acepto la{" "}
                  <a href="./aviso-legal" className="pedidos__first-link">
                    Política de privacidad
                  </a>
                  .
                </label>
              </div>
              <button type="submit" className="button" onClick={showAlert}>
                ENVIAR
              </button>
            </form>
          </div>

          <div className="col-lg-6 col-md-12 pedidos__second">
            <h3>PEDIDOS ONLINE </h3>
            <a href="https://glovoapp.com/es/es/madrid/fans-coffee-and-bakery-madrid/">
              <img
                src="https://i.imgur.com/3K4mZZM.png"
                alt="palmeras"
                className="pedidos__second-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
