import { useAuth } from "../context/auth.context";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { user } = useAuth();
  return (
    <footer className="border-top pt-3 py-2 text-center bg-dark-subtle">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0 d-flex flex-row justify-content-center gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-cards">
                My Cards
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <span>
      <i className="bi bi-briefcase-fill"></i> Biz<span className="mx-1">2</span>Biz
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
