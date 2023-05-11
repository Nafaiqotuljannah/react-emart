import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

const Header = () => {
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
    window.location.reload()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
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
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              APPLE MART
            </NavLink>
            {user ? (
              <>
                <div style={{ marginRight: '7px' }}>{user.name}</div>
                { "  " }
                <button onClick={handleLogout} className="btn btn-danger mr-2">Logout</button>
              </>
            ) : (
              <>
                <Login />
                <Signup />
              </>
            )}
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
