import React, { useState } from "react"
import Nav from "./Nav"
import logo from "../assets/lemon.png"
import { Link } from "react-router-dom"

export default function Header () {
  const [burgerBarClass, setBurgerBarClass] = useState("burgerBar unclicked")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [menuClass, setMenuClass] = useState("menu hidden")

  function handleClick() {
    if(!isMenuClicked) {
      setBurgerBarClass('burgerBar clicked')
      setMenuClass("menu visible")
      setIsMenuClicked(true)
    }
    else {
      setBurgerBarClass('burgerBar unclicked')
      setMenuClass("menu hidden")
      setIsMenuClicked(false)
    }
  }
    return (
        <header className="header">
          <img className="h-logo" src={logo} alt="Logo"/>
            <div className="hamburger-icon" onClick={handleClick}>
              <div className={burgerBarClass} ></div>
              <div className={burgerBarClass} ></div>
              <div className={burgerBarClass} ></div>
            </div>
            <div className={menuClass} >
              <div className="hamburger-menu">
                <div className="display-title" onClick={handleClick}>
                  <Link to='/'>Home</Link>
                </div>
                <div className="display-title" onClick={handleClick}>
                <Link to='/temp'>Menu</Link>
                </div>
                <div className="display-title" onClick={handleClick}>
                  <Link to='/booking-page'>Reservations</Link>
                </div>
                <div className="display-title" onClick={handleClick}>
                  <Link to='/temp'>Order Online</Link>
                </div>
              </div>
            </div>
          <Nav />
        </header>
    )
}