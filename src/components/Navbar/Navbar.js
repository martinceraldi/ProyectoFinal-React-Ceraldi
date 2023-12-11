import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar has-background-primary-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="http://localhost:3000/images/logonegro.png" alt="logo" />
          </Link>

          <a
            href="#"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a href="#" className="navbar-link">
                Categorias
              </a>

              <div className="navbar-dropdown">
                <Link to="/category/electronics" className="navbar-item">
                  Electronics
                </Link>
                <Link to="/category/jewelery" className="navbar-item">
                  jewelery
                </Link>
                <Link to="/category/men's clothing" className="navbar-item">
                  men's clothing
                </Link>
                <Link to="/category/women's clothing" className="navbar-item">
                  women's clothing
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
        <section className="hero is-success">
          <div className="hero-body">
            <h1 className="title">Bienvenidos a TAKE IT </h1>
          </div>
        </section>
      </div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="mx-2" to="/">
            Home
          </Link>
          <Link className="mx-2" to="/category/electronics">
            electronics
          </Link>
          <Link className="mx-2" to="/category/jewelery">
            jewelery
          </Link>
          <Link className="mx-2" to="/category/men's clothing">
            men's clothing
          </Link>
          <Link className="mx-2" to="/category/women's clothing">
            women's clothing
          </Link>
        </div>
        <CartWidget />
      </nav> */}
    </>
  );
};

export default NavBar;
