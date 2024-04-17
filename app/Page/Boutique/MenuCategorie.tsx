"use client";

import store, { setSelectedCategorie } from "@/app/components/store";
import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { ToastContainer } from "react-toastify";
import Painner from "../ListProduit/painner";


function MenuCategorie({ showModal, setShowModal }: any) {
  const { id } = useSnapshot(store);

  const handleCommandeClick = (item?: string) => {
    setSelectedCategorie(
      item !== undefined
        ? item
        : (document.getElementById("mySelect") as any).value
    );

  };

  const cat: any = localStorage.getItem("card");

  let card = JSON.parse(cat || null);

  return (
    <div style={{ boxShadow: "0px 10px 10px -10px #111" }}>
      <div className="container">
      <ToastContainer limit={1} /> 
        <Card>
          <div className="d-flex ">
            <div className="mt-1">
              <ul style={{ backgroundColor: "#FFFFFF", cursor: "pointer" }}>
                {Object.entries(card.categories)
                  .slice(0, 6)
                  .map(([key, value]: any) => (
                    <li className="nav-item" key={key}>
                      <a className="nav-link" href={`#${key}`}>
                        {value.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            {Object.keys(card.categories).length > 6 && (
              <div className="d-flex ">
                <select
                  className="mx-1 nav-link "
                  style={{ width: "150px", height: "20px", marginTop: "20px", cursor: "pointer" }}
                  id="mySelect"
                  onChange={() => handleCommandeClick()}
                >
                  {Object.entries(card.categories).slice(7, Object.keys(card.categories).length).map(([key, value]: any) => (

                    <option key={key} style={{ backgroundColor: "#FFFFFF", cursor: "pointer" }} >{" "}
                      {value.title}
                    </option>

                  ))}
                </select>

              </div>
            )}
            <div><Painner /></div>
           
          </div>

        </Card>
      </div>
    </div>
  );
}

export default MenuCategorie;
