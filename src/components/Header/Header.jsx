import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light green">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.imgur.com/Ayu94vl.png"
              alt=""
              width="150"
              className="ms-5"
              // height="24"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/tartas-personalizadas">
                Tartas Personalizadas
              </Link>
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
              <Link className="nav-link" to="/pedidos">
                Pedidos
              </Link>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
