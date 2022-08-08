import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                VAJRO
              </NavLink>
            </li>
            
          </ul>
          <div className="buttons">
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fas fa-shopping-cart me-2"></i>Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
