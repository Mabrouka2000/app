"use client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Image from "next/image";
import moto from "../../../public/image/moto.png";
import panierrepas from "../../../public/image/panierrepas.png";
import "./Modal.css";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import store from "@/app/components/store";

const ModalCategorie: any = ({ showModal, setShowModal }: any) => {
  const toggle = () => setShowModal(!showModal);
  const router = useRouter();
  const { selectedCategorie } = useSnapshot(store);
  console.log({ selectedCategorie });
  const [chosenOption, setChosenOption] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setChosenOption(option);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleValidateClick = () => {
    if (selectedTime === "") {
      alert("insert time");
    } else if (chosenOption === "emporter") {
      router.push("/Page/Registration");
      // router.push("/Page/ListProduit");

    } else if (chosenOption === "livraison") {
      alert("choose sale mode");
    } else {
      router.push("/components/DropDown");
    }
    toggle();
  };

  // const handleCloseClick = () => {
  //   setModal(false);
  // };

  return (
    <Modal show={showModal} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Modes de retrait</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="options">
          <div>
            <Image
              src={panierrepas}
              alt="Emporter"
              onClick={() => handleOptionClick("emporter")}
              style={{
                backgroundColor: chosenOption === "emporter" ? "green" : "",
                borderRadius: "100%",
              }}
            />{" "}
            <br />
            <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
              A emporter
            </p>
          </div>
          <div>
            <Image
              src={moto}
              alt="Livraison"
              onClick={() => handleOptionClick("livraison")}
              style={{
                backgroundColor: chosenOption === "livraison" ? "green" : "",
                borderRadius: "100%",
              }}
            />
            <br />
            <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
              Livraison
            </p>
          </div>
        </div>

        <p style={{ marginTop: "1rem", marginBottom: "0.5rem", textAlign: "center" }}>
          Aujourd'hui
        </p>

        <div className="time-input">
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>

      </Modal.Body>
      <Modal.Footer className="footer">
        <Button onClick={handleValidateClick} className="button2">
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCategorie;

