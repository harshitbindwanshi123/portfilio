import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div><footer className="footer">
    <div className="container">
      <div className="col1">
        <a href="#" class="brand">Brand</a>
        <ul className="media-icons">
          <li>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href='#'> <i class='fa-brands fa-twitter'></i></a>
            
          </li>
        </ul>
      </div>
      <div className="col2">
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
          <p>harshit bindwanshi, dolor sit amet consectetur adipisicing elit. Exercitationem excepturi ipsam unde obcaecati iusto velit labore consequuntur officiis aut neque?</p>
        </ul>
      </div>
      <div className="col3">
        <p>Subscribe to our newslatter</p>
        <form>
          <div className="input-wrapfooter">
            <input type="email" placeholder="ex@gmail.com" /><button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </form>
        <ul class="services-icons">
          <li>
            <a href="#"><i class="fa-brands fa-cc-paypal"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-cc-apple-pay"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-google-pay"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-cc-amazon-pay"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="mekk">
        <p>@harshitWebDev 2023 - All Rights Reserved</p>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer