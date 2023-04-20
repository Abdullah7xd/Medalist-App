import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Features</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Pricing</NavLink>
        </li>
      </ul>
      <span class="navbar-text">
        
      </span>
    </div>
  </div>
</nav>
  )
}

export default Navbar