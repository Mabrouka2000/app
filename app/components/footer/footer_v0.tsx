import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div   style={{ backgroundColor :"black" }}>
      <div className="">
      <div className="container">
  <div className="row">
    <div className="col-sm my-3 d-flex justify-content-center">
 <div>
  <div className="my2">
  <h6 style={{ marginLeft: "1px"  ,color: 'white', textDecoration: 'none'}}>Télécharger notre application</h6>
  </div>



 <ul style={{backgroundColor:" black"}}>
 <a href="https://play.google.com/store/apps/details?id=com.softavera.pizzatime&hl=ln" className="my-2">


 <img
                   src="https://www.commande-pizzatime.fr/CESARWEB_WEB/play_store-icon.png"
                  alt="play Store"
                   width="150px"
                   height="70px"
                />
 </a>
<br />
 <a href="https://apps.apple.com/us/app/pizza-time-france/id1556496063" className="my2">
            <img
               src="https://www.commande-pizzatime.fr/CESARWEB_WEB/app_store_icon.png"
               alt="Google Play Store"
              width="150px"
                 height="70px"
              />
      </a>

                </ul>
              

 </div>
    </div>
    <div className="col-sm  justify-content-center" >
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginTop: '15px', display: 'block' }}>Mentions légales</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginTop: '5px', display: 'block' }}>Politique de confidentialité</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginTop: '5px', display: 'block' }}>CGV</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginTop: '5px', display: 'block' }}>CGU</a>
    </div>

    <div className="col-sm">
    <div className="my2">
  <h6 style={{ marginLeft: "25px"  ,color: 'white', textDecoration: 'none', marginTop: '15px' }}>Suivez-nous</h6>
  </div>
  <div>
            <ul  style={{backgroundColor:" black"}} >
                <a href="https://www.facebook.com/PizzaTimeFrance/">
                   <FontAwesomeIcon
                    icon={faFacebook}
                     color = "#fbfcfe"
                     height="35px"
                     width="40px"
                     className="icon facebook-icon"
                   />
                 </a>
                 <a href="https://www.instagram.com/pizzatimefrance/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color = "#fbfcfe"
                     height="35px"
                   width="35px"
                  className="icon instagram-icon"
                   />
                 </a>
            
             </ul>
        </div>
    </div>
  </div>
</div>
 </div>
      <div className="footer-bottom" style={{ marginLeft: "185px" ,fontSize :"80%" ,fontWeight :"400" , color : "rgba(255,255,255,.5)" }}>
      Tous droits réservés - ® 2024 V 3.1{" "}" <br />
      Softavera N°1 des solutions d encaissement, caisse tactile, borne de
      commande, click & collect, site web commande en ligne...,plus d’infos :
      <span style={{ marginLeft : "5px",color: 'white', textDecoration: 'none'}}>
      <a href="https://softavera.fr">www.softavera.fr</a>
    </span>
      
     </div>
  </div>
  );
}

export default Footer;