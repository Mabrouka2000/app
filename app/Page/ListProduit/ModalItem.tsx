import store, { addToCart } from "@/app/components/store";
import { card } from "@/app/constants/constants";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSnapshot } from "valtio";

function ModalItem({ modal, setModal, Item }: any) {
  const { Panier } = useSnapshot(store);
  const toggle = () => setModal(!modal);
  const [Somme, SetSomme] = React.useState(Item.price.priceHT??0);
console.log({Item});

  const imageUrl =
    Item.imageUrl.Default.urlDefault ||
    "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";
  const onClickAdd = () => {
    let copPanier: any = [...Panier];
    let prix = Item?.price?.priceHT || 0;
    copPanier.push({
      uiiditem: Item.id,
      title: Item.title,
      qte: 1,
      prixuniter: prix,
      prix: Somme,
    });

    addToCart(copPanier);
    toggle();
  };

  const addSupplementToTotal = (price: number) => {
    SetSomme(Somme + price); // Ajouter le prix du supplément au total actuel
  };
  const removeSupplement = (itemId: any, price: number) => {
    SetSomme(Somme - price);
  };
  // React.useEffect(() => {
  //   let s = 0;
  //   for (let item of Panier) {
  //     s += parseFloat(item.prix);
  //   }
  //   SetSomme(s);
  // }, [Panier]);

  console.log("item:", Item);
  return (
    <Modal show={modal} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>{Item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <h5>Composition de base :</h5>
        <div className="row">
          {Item?.basicComposition &&
            Object.entries(Item.basicComposition).map(([key, value]: any) => (
              <div className="col-md-4 my-2" key={key}>
                <label className="checkbox-custom">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      style={{
                        border: "1px solid",
                        width: "25px",
                        height: "25px",
                        borderColor: "#5d5d5d",
                        borderRadius: "0",
                      }}
                      name={value?.title}
                      value={value?.title}
                    />
                    <h6 style={{ marginLeft: "25px" }}>
                      {" "}
                      {value?.title || ""}
                    </h6>
                  </div>
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
        </div>
        <div className="text-left text-lg">
          <p>PIZZA SUPPLEMENTS</p>
          <p className="text-sm">Choisissez jusqu'à 9</p>
          <div className="gap-2">
            {card?.supplements &&
              Object.entries(card.supplements).map(([key, value]: any) => (
                <div
                  className="row mx-1 py-2 my-2 rounded border "
                  style={{
                    borderColor: "#5d5d5d",
                    border: "1px solid couleurcadre",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center col pl-1 pr-0">
                    <div className="d-flex align-content-center align-items-center">
                      <div data-toggle="buttons">
                        <label className="btn d-flex justify-content-center  align-items-center "></label>
                      </div>
                      <input
                        type="checkbox"
                        style={{
                          border: "1px solid",
                          width: "25px",
                          height: "25px",
                          borderColor: "#5d5d5d",
                          borderRadius: "0",
                        }}
                      />{" "}
                      {value?.title}
                    </div>
                    <div className="d-flex align-items-center float-right">
                      <div
                        className="d-flex align-content-center align-items-center float-left  position-absolute mr-5"
                        style={{ right: "50px" }}
                      >
                        <Button
                          className="bg-gray-700 border border-gray-900 w-25 h-25"
                          onClick={() => addSupplementToTotal(value.price)}
                        >
                          +
                        </Button>
                        <Button
                          className="bg-gray-700 border border-gray-900 w-25 h-25"
                          onClick={() =>
                            removeSupplement(value.id, value.price)
                          }
                        >
                          −
                        </Button>
                      </div>
                      <div className="   align-content-center float-right  ">
                        <p>{value?.price} €</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Total: {Somme.toFixed(2)} €</Button>
        <Button variant="primary" onClick={onClickAdd}>
          Ajouter Produit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalItem;
