import { useAuth } from "../context/auth.context";
import { NavLink } from "react-router-dom";

const Footer = ({ img }) => {
  const { user } = useAuth();
  return (
    <footer className="border-top pt-3 py-2 text-center bg-warning-subtle text-dark">
      <div className="container d-flex flex-column align-items-center">
        <ul className="navbar-nav  d-flex flex-row justify-content-center gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <p className="mx-2 mt-2">|</p>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          {user?.biz && (
            <>
              <li className="nav-item">
                <p className="mx-2 mt-2">|</p>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-cards">
                  Support
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="d-flex align-items-center">
          <span>
            <img
              src={img}
              alt="gift"
              style={{ height: "1.5em", width: "auto" }}
              className="mr-2 mb-2 img-fluid"
            />

            <span className="mx-1 mt-2">The Perfect Gift</span>
          </span>
          <span className="mx-1">&copy;</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="mx-2">
            Designed and written with a lot of love by programmer Gil Shterman
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
