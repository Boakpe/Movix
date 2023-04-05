import { NavLink } from "react-router-dom";
import SearcForm from "./SearcForm";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiar bg-1 px-4 sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">
          <strong>Movix</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white"
                aria-current="page"
                to="/add-movie"
              >
                Add a movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <SearcForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
