import React from "react"
import dish from "./assets/restauranfood.jpg"

export default function Hero() {
    return(
        <div class="hero">
          <div class="hero-container">
            <section>
              <h2 id="hero-heading">Little Lemon</h2>
              <h4 id="hero-subheading">Chicago</h4>
              <p id="hero-paragraph">We are a family owned
               mediterranean restaurant, focused on traditional
                recipes served with a modern twist. </p>
              <button id="reserve" >Reserve a table</button>
            </section>
            <img id="hero-img" src={dish} alt="food" />
          </div>
        </div>
    )
}