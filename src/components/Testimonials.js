import React from "react"
import person1 from "../assets/carla.png"
import person2 from "../assets/steve.png"
import person3 from "../assets/kaya.png"
import person4 from "../assets/Benjy.png"

export default function Testimonials() {
    return(
        <div className="test">
          <h2 id="test-header" className="display-title">Testimonials</h2>
          <ul className="reviews">
            <li>
              <h4 className="rating">4.8/5</h4>
              <div className="img-name-container">
                <img src={person1} className="rev-img" alt="person-1" />
                <h4>Carla</h4>
              </div>
              <p>"The food was fresh, with many flavors. 
                I was also impressed by the service, its well worth the visit"</p>
            </li>
            <li>
              <h4 className="rating">5/5</h4>
              <div className="img-name-container">
                <img src={person2} className="rev-img" alt="person-2" />
                <h4>Steve</h4>
              </div>
              <p>"My new favorite restaurant, my family had a great time.
                 Definitely try their dessert."</p>
            </li>
            <li>
              <h4 className="rating">4.4/5</h4>
              <div className="img-name-container">
                <img src={person3} className="rev-img" alt="person-3" />
                <h4>Kaya</h4>
              </div>
              <p>"Service was excellent, great variety of drinks.
                 And plenty of choices, even for picky eaters." </p>
            </li>
            <li>
              <h4 className="rating">4.6/5</h4>
              <div className="img-name-container">
                <img src={person4} className="rev-img" alt="person-4" />
                <h4>Ben</h4>
              </div>
              <p>"Wine perfect suited the food, the place was cozy.
                 Definitely have to visit again, for other menu items."</p>
            </li>
          </ul>
        </div>
    )
}