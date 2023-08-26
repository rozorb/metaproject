import React from "react"
import logo from "./assets/lemon-logo-vert.png"

export default function Footer() {
    return(
        <footer class="footer">
            <img src={logo} alt="footer logo"/>
            <div class="footer-container">
              <h4 class="karla-regular">Door Navigation</h4>
              <ul class="center-links karla-regular">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            </div>
            <div class="footer-container">
              <h4 class="karla-regular">Contact</h4>
              <ul class="center-links karla-regular">
                <li>1238 Maple Street, Chicago IL 60601</li>
                <li>(312) 555-7890</li>
                <li>contact@littlelemon.com</li>
              </ul>
            </div>
            <div class="footer-container">
              <h4 class="karla-regular">Social Media Links</h4>
              <ul class="center-links karla-regular">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
        </footer>
    )
}