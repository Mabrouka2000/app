import store, { addToCart } from "@/app/components/store";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSnapshot } from "valtio";
import ModalCategorie from "../Modal/Modal";
function Painner() {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);
  const panierSnapshot = useSnapshot(store);
  const Panier = panierSnapshot.Panier;
  const toggle = () => setModal(!modal);
  const [Somme, SetSomme] = useState(0);
  const increaseQuantity = (itemId: any) => {
    let copPanier: any = [...Panier];
    for (let item of copPanier) {
      if (item.uiiditem === itemId) {
        let mutableItem = { ...item };
        mutableItem.qte += 1;
        mutableItem.prix = mutableItem.qte * mutableItem.prixuniter;
        copPanier[copPanier.indexOf(item)] = mutableItem;
        addToCart(copPanier);
        return;
      }
    }
  };
  const handleCommandeClick = () => {
    setShowModal(true);
  };
  const decreaseQuantity = (itemId: any) => {
    let copPanier: any = [...Panier];
    for (let item of copPanier) {
      if (item.uiiditem === itemId) {
        let mutableItem = { ...item };
        mutableItem.qte -= 1;
        if (mutableItem.qte > 0) {
          mutableItem.prix = mutableItem.qte * mutableItem.prixuniter;
          copPanier[copPanier.indexOf(item)] = mutableItem;
          addToCart(copPanier);
        } else {
          delete copPanier[copPanier.indexOf(item)];
          addToCart(copPanier);
        }
        return;
      }
    }
  };
  useEffect(() => {
    let s = 0;
    for (let item of Panier) {
      s += parseFloat(item.prix);
    }
    SetSomme(s);
  }, [Panier]);
  return (
    <>
      <nav className="">
        <div className="container-fluid">
          <Button
            className="navbar-toggler button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <svg className="cartIcon" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
          </Button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Panier
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <div className="container">
                  <div className="row">
                    {Panier.map((item, index) => (
                      <div className="col-12" key={index}>
                        <div className="d-flex flex-row bd-highlight mb-3">
                          <div className="p-2 bd-highlight">
                            <span style={{ marginRight: "5px" }}>
                              {item.qte}
                            </span>
                          </div>
                          <div className="p-2 bd-highlight">
                            <p>{item.title}</p>
                          </div>
                          <div className="p-2 bd-highlight">
                            <p>{item.prix} €</p>
                          </div>
                          <div className="p-2 bd-highlight">
                            <Button
                              onClick={() => increaseQuantity(item.uiiditem)}
                            >
                              +
                            </Button>
                          </div>
                          <div className="p-2 bd-highlight">
                            <Button
                              onClick={() => decreaseQuantity(item.uiiditem)}
                            >
                              -
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Button>Total: {Somme.toFixed(2)} €</Button>
                <Button disabled={Somme === 0} onClick={handleCommandeClick}>
                  {" "}
                  Commander
                </Button>
              </div>
            </div>
          </div>
          {showModal && (
            <ModalCategorie showModal={showModal} setShowModal={setShowModal} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Painner;
