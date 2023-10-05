import React from "react"
import bros1 from "../assets/Mario and Adrian A.jpg"
import bros2 from "../assets/Mario and Adrian b.jpg"

export default function About() {
    return(
        <div className="about">
          <div className="about-container">
            <section className="about-text-section">
              <h2 id="about-heading" className="display-title">Little Lemon</h2>
              <h4 id="about-subheading" className="sub-title">Chicago</h4>
              <p id="about-paragraph" className="karla-regular">Discover the culinary harmony of tradition and
               modernity at Little Lemon.
               Two brothers, Mario & Adrian, bring their passion for Mediterranean flavors to life in every dish.
               Join us for a fresh and unforgettable experience in the heart of Chicago!
              </p>
            </section>
            <div className="about-img-container">
              <img src={bros1} id="bros-img-1" alt="food" />
              <img src={bros2} id="bros-img-2" alt="food" />
            </div>
          </div>
        </div>
    )
}