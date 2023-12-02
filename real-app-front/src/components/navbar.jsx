import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import DarkMode from "./darkMode";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-warning-subtle shadow-md mb-2"
      aria-label="Third navbar example"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/about" style={{ marginLeft: '20px' }} >
                About
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

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="sign-out">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <DarkMode />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
