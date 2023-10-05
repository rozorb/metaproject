import React from "react"
import dish from "../assets/restauranfood.jpg"
import { Link } from "react-router-dom"

export default function Hero() {
    return(
        <div className="hero">
          <div className="hero-container">
            <section className="hero-text">
              <h2 id="hero-heading" className="display-title">Little Lemon</h2>
              <h4 id="hero-subheading" className="sub-title">Chicago</h4>
              <p id="hero-paragraph" className="karla-regular">We are a family owned
               mediterranean restaurant, focused on traditional
                recipes served with a modern twist. </p>
              <button id="hero-button" className="lemon-yellow" >
                <Link to='/booking-page'>Reserve a table</Link>
              </button>
            </section>
            <img id="hero-img" src={dish} alt="food" />
          </div>
        </div>
    )
}