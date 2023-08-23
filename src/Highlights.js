import React from "react"
import salad from "./assets/greek salad.jpg"
import bruchetta from "./assets/bruchetta.png"
import dessert from "./assets/lemon dessert.jpg"
import scooter from "./assets/scooter.png"


export default function Highlights() {
    return(
        <div class="high">
         <div class="high-container">
            <div class="high-top">
              <h2>This weeks specials!</h2>
              <button>Online Menu</button>
            </div>
            <section class="menu-items">
                <ul class="menu-items">
                    <li>
                      <img src={salad} class="menu-img" alt="salad" />
                      <div class="card-text">
                        <div class="card-title">
                          <h4>Greek Salad</h4>
                          <p>$ 12.99</p>
                        </div>
                        <p class="card-description">The famous greek salad of crispy lettuce,
                          peppers, olives and our Chicago style feta
                          cheese, garnished with crunchy garlic and
                          rosemary croutons.
                        </p>
                        <div class="delivery-text">
                          <p>Order a delivery</p>
                          <img class="scooter" src={scooter} />
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src={bruchetta} class="menu-img" alt="bruchetta" />
                      <div class="card-text">
                        <div class="card-title">
                          <h4>Bruchetta</h4>
                          <p>$ 5.99</p>
                        </div>
                        <p class="card-description">Our Bruchetta is made from grilled bread
                          that has been smeared with garlic and
                          seasoned with sald and olive oil.
                        </p>
                        <div class="delivery-text">
                          <p>Order a delivery</p>
                          <img class="scooter" src={scooter} />
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src={dessert} class="menu-img" alt="dessert" />
                      <div class="card-text">
                        <div class="card-title">
                          <h4>Lemon Dessert</h4>
                          <p>$ 5.00</p>
                        </div>
                        <p class="card-description">This comes straight from grandma's recipe
                          book, every last ingredient has been sourced
                          and is as authentic as can be imagined.
                        </p>
                        <div class="delivery-text">
                          <p>Order a delivery</p>
                          <img class="scooter" src={scooter} />
                        </div>
                      </div>
                    </li>
                </ul>
            </section>
         </div>
        </div>
    )
}