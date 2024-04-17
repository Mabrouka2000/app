"use client"
import store, {
    setSelectedCategorie,
    setSelectedImage,
} from "@/app/components/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { Modal } from "react-bootstrap";
import ModalItem from "./ModalItem";

function CardProduit() {
    const [modal, setModal] = useState(false);
    const [Item, setItem] = useState<any>();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
  

    const handleCommandeClick = (item: string) => {
        setItem(item);
        setModal(true);
    };
    

    const cat: any = localStorage.getItem("card");

    let card = JSON.parse(cat || null);

    return (
        <div className="shop container">
            {Object.entries(card.workflow).map(([key, value]: any) => (
                <div className=" my-2 " key={key}>
                    <h5 className="card-title my-5" id={key}>{card[value.type][key].title}</h5>
                    <div className="row row-cols-1 row-cols-md-4">
                        {Object.entries(value.content).map(
                            ([innerKey, innerValue]: any, index: number) => {
                                const product = card[innerValue.type][innerKey];
                                const imageUrl =
                                    product.imageUrl.Default.urlDefault ||
                                    "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

                                const handleClick = () => {
                                    handleCommandeClick(product);
                                };

                                return (
                                    <div className="col-md-4 my-3" key={index}>
                                        <div className="shop-content" style={{ width: "18rem" }}>
                                            <div className="product-box">
                                                <img
                                                    className="product-img"
                                                    src={imageUrl}
                                                    alt="Card image cap"
                                                    onClick={handleClick}
                                                />
                                                <div className="d-flex justify-content-center">
                                                    <div className="d-flex flex-column bd-highlight mb-3">
                                                        <div className="p-2 bd-highlight">
                                                            <h5 className="product-title">{product.title}</h5>
                                                        </div>
                                                        <div className="p-2 bd-highlight  d-flex justify-content-center">
                                                            <span
                                                                className="cart-price"
                                                                style={{ color: "red" }}
                                                            >
                                                                {product?.price?.priceHT || 0} €
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            ))}
            {modal && <ModalItem modal={modal} setModal={setModal} Item={Item} />}
        </div>
    );
}

export default CardProduit;
