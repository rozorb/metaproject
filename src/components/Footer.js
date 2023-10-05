import React from "react"
import logo from "../assets/lemon-logo-vert.png"

export default function Footer() {
    return(
        <footer className="footer">
          <div className="footer-container">
            <img src={logo} alt="footer logo"/>
            <div className="footer-links-container">
              <h4 className="karla-regular">Door Navigation</h4>
              <ul className="center-links karla-regular">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="footer-links-container">
              <h4 className="karla-regular">Contact</h4>
              <ul className="center-links karla-regular">
                <li>1238 Maple Street, Chicago IL 60601</li>
                <li>(312) 555-7890</li>
                <li>contact@littlelemon.com</li>
              </ul>
            </div>
            <div className="footer-links-container">
              <h4 className="karla-regular">Social Media Links</h4>
              <ul className="center-links karla-regular">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </footer>
    )
}