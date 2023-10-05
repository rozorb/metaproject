import React from "react"
import salad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.png"
import dessert from "../assets/lemon dessert.jpg"
import scooter from "../assets/scooter.png"


export default function Highlights() {
    return(
        <div className="high">
         <div className="high-container">
            <div className="high-top">
              <h2 className="display-title">This weeks specials!</h2>
              <button>Online Menu</button>
            </div>
            <section className="menu-items">
                <ul className="menu-items">
                    <li>
                      <img src={salad} className="menu-img" alt="salad" />
                      <div className="card-text">
                        <div className="card-title">
                          <h4>Greek Salad</h4>
                          <p>$ 12.99</p>
                        </div>
                        <p className="card-description karla-regular">The famous greek salad of crispy lettuce,
                          peppers, olives and our Chicago style feta
                          cheese, garnished with crunchy garlic and
                          rosemary croutons.
                        </p>
                        <div className="delivery-text">
                          <p>Order a delivery</p>
                          <img className="scooter" src={scooter} alt="scooter" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src={bruchetta} className="menu-img" alt="bruchetta" />
                      <div className="card-text">
                        <div className="card-title">
                          <h4>Bruchetta</h4>
                          <p>$ 5.99</p>
                        </div>
                        <p className="card-description karla-regular">Our Bruchetta is made from grilled bread
                          that has been smeared with garlic and
                          seasoned with sald and olive oil.
                        </p>
                        <div className="delivery-text">
                          <p>Order a delivery</p>
                          <img className="scooter" src={scooter} alt="scooter" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src={dessert} className="menu-img" alt="dessert" />
                      <div className="card-text">
                        <div className="card-title">
                          <h4>Lemon Dessert</h4>
                          <p>$ 5.00</p>
                        </div>
                        <p className="card-description karla-regular">This comes straight from grandma's recipe
                          book, every last ingredient has been sourced
                          and is as authentic as can be imagined.
                        </p>
                        <div className="delivery-text">
                          <p>Order a delivery</p>
                          <img className="scooter" src={scooter} alt="scooter"/>
                        </div>
                      </div>
                    </li>
                </ul>
            </section>
         </div>
        </div>
    )
}