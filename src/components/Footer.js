import React from 'react';
import "./Footer.css"
import logo from "../images/logo_dark.png";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (


<footer className="footer-distributed">

			<div className="footer-left col-lg-4">

				{/* <h3>Company<span>logo</span></h3> */}
                <img src={logo} alt=""/>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Tinqbit pvt ltd © 2015</p>
			</div>

			<div className="footer-center col-lg-4">

				<div>
					<i className="fa fa-map-marker"></i>
					<p>xxx yy aaaa bbb<br/> abcd gtredf juyrertt</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555 555 5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right col-lg-4">

				<p className="footer-company-about">
					<h6>About the company</h6>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>


  );
}

export default Footer;
