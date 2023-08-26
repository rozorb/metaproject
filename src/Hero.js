import React from "react"
import dish from "./assets/restauranfood.jpg"

export default function Hero() {
    return(
        <div class="hero">
          <div class="hero-container">
            <section>
              <h2 id="hero-heading" class="display-title">Little Lemon</h2>
              <h4 id="hero-subheading" class="sub-title">Chicago</h4>
              <p id="hero-paragraph" class="karla-regular">We are a family owned
               mediterranean restaurant, focused on traditional
                recipes served with a modern twist. </p>
              <button id="reserve" class="lemon-yellow" >Reserve a table</button>
            </section>
            <img id="hero-img" src={dish} alt="food" />
          </div>
        </div>
    )
}