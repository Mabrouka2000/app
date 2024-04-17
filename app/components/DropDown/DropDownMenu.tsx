"use client"
import Login from '@/app/Page/Registration/Login';
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";


function DropDownMenu(): React.JSX.Element {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const closeOffcanvas = () => {
    setShowRegistration(false);
    setShowProfile(false);
  };

  return (
    <nav className="navbar  mb-5 pb-5 ">
          
      <div className="container-fluid">
        <div></div>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className=""><CgProfile /></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
          <Login
              showProfile={showProfile}
              setShowProfile={setShowProfile}
              showRegistration={showRegistration}
              setShowRegistration={setShowRegistration}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DropDownMenu;