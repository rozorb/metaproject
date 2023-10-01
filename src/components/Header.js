import React from "react"
import Nav from "./Nav"
import logo from "../assets/lemon.png"

export default function Header () {
    return (
        <header className="header">
          <img className="h-logo" src={logo} alt="Logo"/>
          <div className="navbar-toggle" id="navbarToggle">
            <div className="hamburger-icon">
            </div>
          </div>
          <Nav />
        </header>
    )
}