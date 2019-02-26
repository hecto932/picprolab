import React from 'react';
import './navbar.scss';
import picprolabLogo from '../../../assets/img/logo.png';

const Navbar = (props) => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <span className="logo">Picpro<i className="fas fa-flask"></i></span>
        {/* <img src={picprolabLogo} width="112" height="28" /> */}
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item">
          Home
        </a>

        <a className="navbar-item">
          About us
        </a>

        <a className="navbar-item">
          Products
        </a>


        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Services
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              Create your album
            </a>
            <a className="navbar-item">
              Jobs
            </a>
          </div>
        </div>
        <a className="navbar-item">
          Contact
        </a>

        <a className="navbar-item">
          <i className="fas fa-shopping-cart"></i>
        </a>
        {/* user options */}
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            <i className="far fa-user has-text-white"></i>
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              Profile
            </a>
            <a className="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;