import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import "./Contacto.scss";

export default function Contacto() {
  const [Check, setCheck] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41jd8bu",
        "template_agt3tsi",
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
      <div className="contacto container my-3">
        <Helmet>
          <title>Contacto General - Fans Coffee & Bakery</title>
          <meta
            name="title"
            content="Contacto General - Fans Coffee & Bakery"
          />
          <meta
            name="description"
            content="Pagina de contacto donde podras encontrar la información para comunicarte con nosotros."
          />
          <link rel="canonical" href="https://fanscoffeebakery.com/contacto" />
        </Helmet>
        <div className="row">
          <div className="col-lg-6 col-md-12 contacto__first">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <h3>FORMULARIO DE CONTACTO</h3>
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
                  <div className="form-control">
                    <PhoneInput
                      international
                      defaultCountry="ES"
                      value={value}
                      onChange={setValue}
                      name="telefono"
                    />
                  </div>
                </div>
                <label htmlFor="email" className="form-label">
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
                  Consulta
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
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  id="contactFormAgree"
                  onChange={check}
                  required
                />
                <label className="form-check-label" htmlFor="contactFormAgree">
                  Doy mi consentimiento para el tratamiento de los datos
                  personales que facilito. He leído y acepto la{" "}
                  <a href="./aviso-legal" className="link">
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

          <div className="col-lg-6 col-md-12 contacto__second">
            <h3>INFORMACIÓN DE CONTACTO </h3>
            <p>
              Si deseas contactar con nosotros puede hacerlo de las formas
              habituales.{" "}
            </p>
            <p>
              <strong>Dirección:</strong> <br />
              Calle Doctor Esquerdo 180, 28007, Madrid
            </p>
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
              // width="635"
              // height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"></iframe>
            <hr />

            <p>
              <strong>Teléfono:</strong> (+34) 628 98 44 13
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
