import Icons from "@/app/components/Icons/Icons";
import { setId } from "@/app/components/store";
import { Listcard } from "@/app/constants/Listcard";
import { useRouter } from "next/navigation";
import React from "react";
import { IoRestaurant } from "react-icons/io5";
import { HiMiniMapPin } from "react-icons/hi2";
import { Button } from "react-bootstrap";

function CardBoutique() {
  const router = useRouter();
  const [shopList, setShopList] = React.useState<any>([]);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const getShopList = async () => {
    let admin: any = localStorage.getItem("admin");
    admin = JSON.parse(admin || false);
    setIsAdmin(admin);
    try {
      const response = await fetch(`http://localhost:8080/backend/restaurant`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      console.log({ jsonData });

      setShopList(jsonData);
      localStorage.setItem("shopLength", jsonData.length);
    } catch (e) {
      console.error("Login error", e);
    }
  };
  const goto = () => {
    router.push("/Page/addResto");
  };
  // Fonction pour naviguer vers une autre page avec l'ID
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    var jsonString = JSON.stringify(shopList[id].card);

    // Sample JSON data
    var jsonData = {
      workflow: shopList[id]?.card.workflow,
      categories: shopList[id]?.card.categories,
      items: shopList[id]?.card.items,
    };

    // Convert JSON data to a string
    var jsonString = JSON.stringify(jsonData);

    // Store the JSON string in localStorage
    localStorage.setItem("card", jsonString);

    router.push("/components/Boutiques");
  };

  React.useEffect(() => {
    getShopList();
  }, []);
  return (
    <section className="news_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            {" "}
            <IoRestaurant /> Bienvenue au Pizza Time <IoRestaurant />
          </h2>
        </div>

        <div className="row">
          {Object.values(shopList).map((item: any, id: number) => (
            <div
              className="col-md-4 my-3"
              key={id}
              onClick={() => {
                localStorage.setItem("resto", JSON.stringify(item.resto));
                navigateToOtherPage(item.resto.shopid);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <div className="box">
                <div className="img-box">
                  <img src={item.resto.image} className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4> {item.resto.Company}</h4>
                  <p>
                    {" "}
                    <HiMiniMapPin />
                    {item.resto.Address}, {item.resto.PostalCode}{" "}
                    {item.resto.town}
                  </p>
                </div>
                <div>
                  <Icons />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isAdmin === true ? <Button onClick={goto}>add resto</Button> : null}
      </div>
    </section>
  );
}

export default CardBoutique;
