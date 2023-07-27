import React from 'react'
import { NavLink } from 'react-router-dom'
import app_config from '../../config'

const Navbar = () => {

  const { themeColor } = app_config;

  return (
    <>
  {/* Navbar*/}
  <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: themeColor}}>
    <div className="container justify-content-between">
      {/* Left elements */}
      <div className="d-flex">
        {/* Brand */}
        <a
          className="navbar-brand me-2 mb-1 d-flex align-items-center"
          href="#"
        >
          <img
            src="/trophy.png"
            height={42}
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: 2 }}
          />
        </a>
      </div>
      {/* Left elements */}
      {/* Center elements */}
      <ul className="navbar-nav flex-row d-none d-md-flex">
        
        {/* <li className="nav-item me-3 me-lg-1">
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-flag fa-lg" />
            </span>
          </a>
        </li> */}
            {/* <li className="nav-item me-3 me-lg-1"> 
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-video fa-lg" />
            </span>
          </a>
        </li>  */}
            {/* <li className="nav-item me-3 me-lg-1">
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-shopping-bag fa-lg" />
            </span>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-1">
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-users fa-lg" />
            </span>
            <span className="badge rounded-pill badge-notification bg-danger">
              2
            </span>
          </a>
        </li> */}
        </ul>
          {/* Center elements */}
          {/* Right elements */}
          <ul className="navbar-nav flex-row">
          <li className="nav-item me-3 me-lg-1 active">
          <NavLink className="nav-link" to="/main/home" title='Home Page'>
            <span>
              <i className="fas fa-home fa-lg" />
            </span>
          </NavLink>
        </li>
            <li className="nav-item me-3 me-lg-1">
              <NavLink className="nav-link d-sm-flex align-items-sm-center" to="/user/userprofile">
                <img
                  src="https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg?w=2000"
                  className="rounded-circle"
                  height={22}
                  alt="User icon"
                  loading="lazy"
                />
                <strong className="d-none d-sm-block ms-1">user</strong>
              </NavLink>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" to="/">
                <span>
                  <i className="fas fa-plus-circle fa-lg" />
                </span>

              </a>
            </li>
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-chevron-circle-down fa-lg" />
                {/* <span className="badge rounded-pill badge-notification bg-danger">
                  6
                </span> */}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/main/Login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/main/signup">
                    Signup
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-lg" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  12
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}

            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-comments fa-lg" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    
                  </a>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/user/ManageScores">
                    ManageScores
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            
          </ul>
          {/* Right elements */}
        </div>
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Navbar;
