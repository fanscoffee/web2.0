import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="container-fluid footer">
        <div className="row text-center footer__primary">
          <div className="col-4">
            <ul className="footer__primary-list">
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/tartas-personalizadas">
                  Tartas personalizadas
                </Link>
              </li>
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="footer__primary-list">
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/pedidos">
                  Pedidos
                </Link>
              </li>
              <li className="footer__link-margin">
                <Link className="footer__link link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 footer__media container">
            <div className="row justify-content-center py-3">
              <a
                className="footer__link my-3 col-lg-2"
                href="https://www.instagram.com/fanscoffeeandbakery/"
              >
                <i className="footer__link-fontsize fab fa-instagram"></i>
              </a>
              <a
                className="footer__link my-3 col-lg-2"
                href="https://www.facebook.com/fanscoffeebakery"
              >
                <FaFacebook className='footer__link-fontsize'/>
              </a>
              <a
                href="mailto:fanscoffeebakery@gmail.com"
                className="footer__link my-3 col-lg-2"
              >
                <FaFacebook className='footer__link-fontsize'/>
              </a>
              <a
              href="#dondeestamos"
              data-bs-toggle="modal"
              data-bs-target="#dondeestamos"
              className="footer__link my-3 col-lg-2"
              >
              <i className="mx-3 fas fa-map-marker-alt footer__link-fontsize"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row footer__secondary">
          <div className="col-lg-6 footer__secondary-legal py-3">
            <Link className="footer__link text-start px-2 link" to="/privacidad">
              Politicas de privacidad
            </Link>
            |
            <Link className="footer__link px-2 link" to="/aviso-legal">
              Aviso legal
            </Link>
          </div>
          <div className="col-lg-6 footer__secondary-copyright">
            <p className="pt-3">
              &copy; 2021 FANS COFFEE & BAKERY - OSTELEA DIVERSA S.L.U. Todos los derechos reservados.
            </p>
          </div>
        </div>
        <div
          className="modal fade"
          id="dondeestamos"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Encuéntranos
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <iframe
                  title="google"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
                  width="465"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;