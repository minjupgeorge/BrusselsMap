import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/contact" className="navbar-item">Contact</a>
      <a href="/contact" className="navbar-item">SignUp</a>
      <a href="/contact" className="navbar-item">LogIn</a>
  </section>
  )

}

export default Navbar;