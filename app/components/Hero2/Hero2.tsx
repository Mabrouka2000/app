"use client";

import React from "react";
import "./styleHero2.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";



function Hero2() {
  const cat: any = localStorage.getItem("resto");

  let resto = JSON.parse(cat || null);

 
  return (
    <>
      <div className="hero_area mb-5">
        {/* header section starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
            </nav>
          </div>
        </header>

        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="find_container">
                  <div className="container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>

                    <div className="img" >

                      <div
                        className=""
                        style={{

                          marginTop: "80px ",
                          marginBottom: "30px ",
                          textAlign: "center",
                          color: "#ffffff",
                          transform: "translateY(-70%)",
                        }}
                      >
                        <div>
                          <h2> {resto.Company} </h2>
                         <p>   <IoIosTime />
                              ouvert de {resto.openingTime} et a{" "}
                            {resto.closingTime}{" "}
                          </p>
                          <p> <RiMapPin2Fill />
                            {resto.Address},{resto.PostalCode}{" "}
                            {resto.town}
                          </p>

                          <div className="container my-5">
                            <div className="row social-links d-flex">
                              <div className="col-sm">
                                {" "}
                                <a
                                  href="https://www.commande-pizzatime.fr/cesarweb"
                                  className="facebook"
                                >
                                  <FaFacebook />
                                </a>
                              </div>
                              <div className="col-sm">
                                <a
                                  href="https://www.instagram.com/pizzatimefrance/"
                                  className="instagram"
                                >
                                  <FaInstagram />
                                </a>
                              </div>
                              <div className="col-sm">
                                <a href="#" className="twitter">
                                  <FaTwitter />
                                </a>
                              </div>
                            </div>
                          </div>

                       
                        </div>
                      </div>

                    </div>


                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}

export default Hero2;
