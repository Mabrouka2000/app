"use client";
import store, { setSelectedCategorie } from "@/app/components/store";
import React from "react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
function CardCategorie({ showModal, setShowModal }: any) {
  const router = useRouter();
  const { id } = useSnapshot(store);

  // const getShopList = async () => {
  //   let admin: any = localStorage.getItem("admin");
  //   admin = JSON.parse(admin || false);
  //   try {
  //     const response = await fetch(`http://localhost:8000/backend/restaurant`, {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const jsonData = await response.json();
  //     console.log({jsonData});

  //     setShopList(jsonData);
  //     localStorage.setItem('shopLength',jsonData.length)
  //   } catch (e) {
  //     console.error("Login error", e);
  //   }
  // };
  const cat: any = localStorage.getItem("card");

  let card = JSON.parse(cat || null);
  const handleValidateClick = () => {
    router.push("/Page/ListProduit");
  };
  return (
    <div className="shop container">
      <div className="row row-cols-1 row-cols-md-4">
        {Object.entries(card.workflow).map(([key, value]: any) => (
          <div className="col-sm my-3" key={key}>
            <div
              className="shop-content"
              style={{ width: "18rem" }}
              onClick={handleValidateClick}
            >
              <div className="product-box">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  {card[value.type][key].title}
                </h5>
                <img
                  className="product-img"
                  src={
                    card[value.type][key].imageUrl.Default.urlDefault
                      ? card[value.type][key].imageUrl.Default.urlDefault
                      : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
                  }
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardCategorie;
