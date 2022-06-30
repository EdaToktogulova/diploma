import React from "react";
import './Footer.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
   return (
      <div className="footer ">
         <div className="container">
            <div className="col">
               <h3>Address</h3>
               <p>Adres: Kalverstraat 71, 1012 NZ Amsterdam</p>
            </div>
            <div className="col">
               <h3>About us</h3>
               <p>A multi-brand store for rare cool contemporary perfume houses. Plus mix your own bespoke perfume at our lab.</p>
            </div>
            <div className="col">
               <h3>Our sponsors</h3>
               <p>Elon Muck</p>
               <p>Cristiano Ronaldo</p>
               <p></p>
            </div>
            <div>
               <h3>Let's Connect</h3>
               <div className="social">
                  <FaFacebookSquare className="icon" />
                  <FaInstagramSquare className="icon" />
                  <FaTwitterSquare className="icon" />
               </div>
            </div>
         </div>
      </div>
   )
}


export default Footer;