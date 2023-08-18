import React from "react"
import Nav from "./Nav"
import logo from "./assets/lemon.png"

export default function Header () {
    return (
        <header class="header">
          <img class="h-logo" src={logo} alt="Logo"/>
          <Nav />
        </header>
    )
}