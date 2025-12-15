import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-4 fixed-top w-100 bg-color-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <h2 className="text fw-bold">START FRAMEWORK</h2>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-2">
              <NavLink
                to="/about"
                className={({isActive})=>"nav-link text-white "+ (isActive ? "active" : "")}
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item ms-2">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item ms-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

