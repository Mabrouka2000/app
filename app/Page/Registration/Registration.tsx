"use client";
import React, { SyntheticEvent, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tele, setTele] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhoneNumber = (phoneNumber: any) => {
    const re = /^\d{9}$/;
    return re.test(phoneNumber);
  };

  const listOfUser = async () => {
    const response = await fetch("http://localhost:8080/backend/user");
    const data: any = await response.json();
    return data;
  };
  //listOfUser()
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    let users = await listOfUser();
    console.log({ users });
    if (!validateEmail(email)) {
      toast.error(`Veuillez saisir une adresse e-mail valide!`, {
        autoClose: 2000,
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!validatePhoneNumber(tele)) {
      toast.error(
        `Veuillez saisir un numéro de téléphone valide (9 chiffres)!`,
        {
          autoClose: 2000,
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }

    if (users.find((el: any) => el.email === email) !== undefined) {
      toast.error(`email used!`, {
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success(`compte crée avec succes`, {
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      await fetch("http://localhost:8080/backend/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, tele, email, password }),
      });
    }
  };

  return (
    <div>
      <form className="form_main" action="">
        <p className="heading">Inscription</p>
        <div className="inputContainer">
          <input
            placeholder="Saisissez votre nom"
            id="nom"
            className="inputField"
            type="text"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <input
            placeholder="Saisissez votre prénom"
            id="prénom"
            className="inputField"
            type="text"
            required
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <input
            placeholder="Téléphone"
            id="Téléphone"
            value={tele}
            className="inputField"
            type="integer"
            required
            onChange={(e) => setTele(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <input
            placeholder="nom@mail.com"
            id="email"
            className="inputField"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            placeholder="saisissez votre mot de passe"
            id="motdepasse"
            className="inputField"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            placeholder="confirmez votre mot de passe"
            id="motdepasse"
            className="inputField"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id="button" type="submit" onClick={handleSubmit}>
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default Registration;
