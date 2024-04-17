import React from "react";
import CardBoutique from "./CardBoutique";
import Hero from "@/app/components/Hero/Hero";


function ListeBoutique() {
  return (
    <div>
      <Hero />

      <div className="container">

        <div className="row">
          <CardBoutique />
        </div>
      </div>
    </div>
  );
}

export default ListeBoutique;
