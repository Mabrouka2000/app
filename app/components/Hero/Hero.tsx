"use client"
import React from "react";
import "./styleHero.css";
import { FaPizzaSlice } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import DropDownMenu from "../DropDown/DropDownMenu";
import { SiGooglemaps } from "react-icons/si";
import { useRouter } from "next/navigation";

function Hero() {
  const router= useRouter()
  return (
    <>
      <div className="hero_area mb-5">
        {/* header section starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container"></nav>
          </div>
          <DropDownMenu />
        </header>

        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="detail-box">
                  <h1>
                    Pizza Time {" "}<FaPizzaSlice />
                  </h1>
                  <p>
                    Profitez de notre délicieux repas
                    <MdFoodBank />
                  </p>
                </div>

                <div className="find_container">
                  <div className="container">
                    <form className="row">
                      <div className="form-group col-sm">
                        <input
                          type="text"
                          className="form-control"
                          id="inputHotel"
                          placeholder="Restaurant Name"
                        />
                      </div>

                      <div
                        style={{ fontSize: "150%" }}
                        className="form-group col-sm d-flex align-items-center"
                      >
                        <button 
                        onClick={()=>router.push("/map")}
                          type="button"
                          className="form-control"
                          id="inputLocation"
                          
                        > <SiGooglemaps /></button>
                      </div>
                      <div className="form-group col-sm">
                        <div className="btn-box">
                          <button type="submit" className="btn">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ zIndex: "1" }}>
          <form className="row">
            <div className="col-sm">
              <div className="item">
                <div className="img-box">
                  <img src="images/slider-img2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="img-box">
                <img src="images/slider-img3.png" alt="" />
              </div>
            </div>
            <div className="col-sm">
              <div className="img-box">
                <img src="images/slider-img4.png" alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
