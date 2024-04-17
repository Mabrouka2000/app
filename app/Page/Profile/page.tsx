"use client"
import React, { useState, useEffect } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMarkEmailRead, MdSaveAs } from "react-icons/md";
import { useForm } from "react-hook-form";
import InputProfile from "./inputprofile";
import Container from "@/app/components/Container";
import Address from "./Address";
import Cartes from "./Cartes";
import "./profile.css";
import { CiMobile3 } from "react-icons/ci";

interface UserData {
  user_id: number;
  nom: string;
  prenom: string;
  tele: string;
  email: string;
}

const Page = () => {
    const [dataUser, setDataUser] = useState<UserData>({ user_id: 1, nom: "", prenom: "", tele: "", email: "" });

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const userId=localStorage.getItem("userId")
      const response = await fetch(`http://localhost:8000/backend/user/${userId}`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setDataUser(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateUser = async (formData: UserData) => {
    try {
      if (!dataUser || !dataUser.user_id) {
        console.error("User ID is not available.");
        return;
      }
      const userId=localStorage.getItem("userId")

      const response = await fetch(`http://localhost:8000/backend/user/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
  
      console.log("Updated");
      getData(); // Re-fetch updated data after successful update
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const handleUpdate = (formData:any) => {
    updateUser(formData);
  };
  return (
    <div>
    <Container>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 p-2">
          <LuUserCircle2 size={30} />
          <p className="text-xl">Bonjour {dataUser?.nom} {dataUser?.prenom}</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 w-[130%]">
          <div className="border-[1.2px] border-slate-200 bg-white shadow-md rounded-2xl m-4">
            <div className="flex justify-between">
              <div className="flex p-2 gap-1">
                <IoIosInformationCircleOutline size={25} />
                <p className="">Informations générales</p>
              </div>
              <div className="p-2">
                <MdSaveAs onClick={handleSubmit(handleUpdate)}  size={30} className="bg-white text-gray-600 rounded-md" />
              </div>
            </div>
            <div className="p-2 grid md:grid-cols-2 gap-2">
              <InputProfile
                id="nom"
                required
                register={register}
                errors={errors}
                type="text"
                placeholder="Saisissez votre nom"
                label="Nom"
                value={dataUser?.nom ?? ''}
                onChange={(e) => setDataUser({ ...dataUser, nom: e.target.value })}
              /> <InputProfile
              id="prenom"
              required
              register={register}
              errors={errors}
              type="text"
              placeholder="Saisissez votre prénom"
              label="Prenom"
              Icon={LuUserCircle2}
              value={dataUser?.prenom ?? ''}
              onChange={(e) => setDataUser({ ...dataUser, prenom: e.target.value })}
              />
              <InputProfile
              id="tele"
              required
              register={register}
              errors={errors}
              type="text"
              placeholder="06 12 34 56 78"
              label="Télephone"
              Icon={CiMobile3}
              value={dataUser?.tele ?? ''}
              onChange={(e) => setDataUser({ ...dataUser, tele: e.target.value })}
              
              />
              <InputProfile
              id="email"
              required
              register={register}
              errors={errors}
              type="email"
              placeholder="Saisissez votre e-mail"
              label="E-mail"
              Icon={MdOutlineMarkEmailRead}
              value={dataUser?.email ?? ''}
              onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })}
             
              />
          </div>
          </div>
          <Address />
          <Cartes />
          
      </div>
      <div className="col-span-1 w-[70%] justify-self-end">
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-gray-700  text-white shadow-md  rounded-xl ml-4 mt-4 mr-4 mt-1  ">
          <div className="flex p-2 justify-between ">
              <div className="flex gap-1">
              <p className="">Total Commande</p>
              </div>
              <div>
              </div>
          </div>
          </div>
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-white  shadow-md  rounded-xl ml-4 mr-4 mt-1">
          <div className="flex p-2 justify-between ">
              <div className="flex gap-1">
              <p className="">Cart de fidélité</p>
              </div>
              <div>cc</div>
          </div>
          </div>
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-white  shadow-md  rounded-xl ml-4 mr-4 mt-1">
          <div className="flex p-2 justify-between ">
              <div className="flex gap-1">
              <p className="">Code Promo</p>
              </div>
              <div>ccc</div>
          </div>
          </div>
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-white  shadow-md  rounded-xl ml-4 mr-4 mt-1">
          <div className="flex p-2 justify-between ">
              <div className="flex gap-1">
              <p className="">Reste a payer</p>
              </div>
              <div>
              </div>
          </div>
          </div>
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-gray-700  text-white shadow-md  rounded-t-xl ml-4 mr-4 mt-4 ">
          <div className="grid flex-row p-2 justify-between ">
              <div className="flex gap-1 ">
              <p className="">Panier</p>
              </div>
          </div>
          </div>
          <div className=" relative justify-content border-[1.2px] border-slate-400 bg-white  shadow-md  rounded-b-xl ml-4 mr-4 mb-4">
          <div className="grid flex-row p-2 justify-between ">
           
          </div>
          </div>
      </div>
      </div>
  </Container>
  </div>
);
};

export default Page;



// import React from 'react';
// import DropDownMenu from './DropDownMenu';

// const Page: React.FC = () => {
//   return (
//     <div>
//       <div className="col-md-8 order-md-1">
//         <h5 className="mb-3 d-flex align-items-center ">
//           <img
//             style={{ top: '181px', left: '325px', width: '25px', height: '32px' }}
//             src="/CESARWEB_WEB/cmd.svg"
//             alt=""
//             loading="lazy"
//             className="attachment-thumbnail size-thumbnail mr-3"
//             width="80"
//             height="80"
//           />
//           <div className="font-weight-bold">Votre commande chez Pizza time guyancourt</div>
//         </h5>

//         <div className="row mb-2" style={{ border: '1px solid #eaeaea', borderRadius: '5px' }}>
//           <div className="mt-2 col-3 pr-0">
//             <div className="col form-control border d-flex justify-content-center px-0" style={{ color: '#F6F6F6', background: '#232323 0% 0% no-repeat padding-box' }}>
//               <div id="mdv" className="fontmobile">A emporter</div>
//             </div>
//           </div>
//           <div className="mt-2 col-9 pl-0">
//             <div className="col form-control border d-flex justify-content-between border-left-0">
//               <div id="heurecmd">Vendredi, 05/04/2024 à 11:15</div>

//               <img
//                 style={{
//                   top: '256px',
//                   left: '739px',
//                   width: '27px',
//                   height: '27px',
//                   background: 'var(--unnamed-color-aeaeae) 0% 0% no-repeat padding-box',
//                   opacity: 1,
//                 }}
//                 src="/CESARWEB_WEB/Edit.svg"
//                 onClick={() => JS_Click_MDV()}
//                 alt=""
//                 loading="lazy"
//                 width="80"
//                 height="80"
//               />
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="row">
//               <div className="col-md-6 col-lg-6 col-xl-6 mt-2 pr-md-1 pr-lg-1 pr-xl-1 ">
//                 <input id="emailclt" type="email" className="form-control text-lowercase" onFocus={() => RemoveErrorborderclass(this)} placeholder="Adresse e-mail" value="blidaouiibtihel22@gmail.com" disabled />
//               </div>
//               <div className="col-md-6 col-lg-6 col-xl-6 my-2 pl-md-1 pl-lg-1 pl-xl-1">
//                 <input type="text" className="form-control " placeholder="Nom de la société" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <h5 id="livraisontitle" className="my-3 d-none">
//           <img style={{ top: '181px', left: '325px', width: '25px', height: '32px' }} alt="" loading="lazy" className="attachment-thumbnail size-thumbnail mr-3" src="/CESARWEB_WEB//address.svg" width="80" height="80" />
//           <strong>Adresse de livraison</strong>
//         </h5>
//         <div id="clientadress" className="row border rounded py-2 d-none">
//           <div className="col mx-3 mb-2 form-control h-100 border d-flex justify-content-between">
//             <div id="adresseselectionne"></div>
//           </div>
//           <div className="col-12">
//             <div className="card">
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col d-flex justify-content-between">
//                     <h6 id="complementadresse" className="text-muted">
//                       Complément d'informations
//                     </h6>
//                     <h6 id="showhidecomplementadresse" className="text-muted" onClick={() => JS_showhideAdressComplement(this)} style={{ textDecoration: 'underline' }}>
//                       Masquer
//                     </h6>
//                   </div>
//                 </div>
//                 <div id="adressdetails" className="row">
//                   <div className="col-4 col-lg-2 col-xl-2 px-1 my-1">
//                     <input id="Batiment" type="text" className="form-control adrclt" placeholder="Batiment" value="" />
//                   </div>
//                   <div className="col-4 col-lg-2 col-xl-2 pl-1 my-1 pr-0">
//                     <input id="Etage" type="text" className="form-control adrclt" placeholder="Etage" value="" />
//                   </div>
//                   <div className="col-4 col-lg-2 col-xl-2 px-1 my-1">
//                     <input id="code1" type="text" className="form-control adrclt" placeholder="Code 1" value="" />
//                   </div>
//                   <div className="col-4 col-lg-2 col-xl-2 px-1 my-1">
//                     <input id="code2" type="text" className="form-control adrclt" placeholder="Code 2" value="" />
//                   </div>
//                   <div className="col-8 col-lg-4 col-xl-4 px-1 my-1">
//                     <input id="interphone" type="text" className="form-control adrclt" placeholder="Interphone" value="" />
//                   </div>
//                   <div className="col my-1 px-1">
//                     <input type="text" className="form-control adrclt" placeholder="Remarque" value="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row border rounded mt-2 d-md-none">
//           <div className="col-12 my-3 d-flex justify-content-between align-items-center">
//             <div>
//               <h5 className="">
//                 <img style={{ top: '181px', left: '325px', width: '25px', height: '32px' }} alt="" loading="lazy" className="attachment-thumbnail size-thumbnail mr-3" src="/CESARWEB_WEB/wallet.svg" width="80" height="80" />
//                 <strong className="nbrarticle">1 article</strong>
//               </h5>
//             </div>
//             <a href="#" className="small" style={{ color: '#5d5d5d', textDecoration: 'underline' }} onClick={() => JS_AfficherPanierMobile()}>
//               Voir plus
//             </a>
//           </div>
//         </div>
//         <ul id="paniermobile" style={{ background: '#f1f1f1 0% 0% no-repeat padding-box' }} className="list-group mt-1 d-sm-block d-md-none">
//           {/*promotion*/}
//           <div id="promotion" className="card wish-list border-0 px-1 py-2 d-none promocard">
//             <div className="p-0 card-body">
//               <div className="">
//                 <div className="p-0 col">
//                   <div>
//                     <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
//                       <div className="d-flex align-items-center ">
//                         <img src="/CESARWEB_WEB/closePromo.svg" alt="" width="25" height="25" onClick={() => JS_DelPromo()} />
//                         <h6 className="mb-0 mx-2 font-weight-bold">Promotions</h6>
//                       </div>

//                       <p className="mb-0 Total_promo">
//                         <strong>0.00 €</strong>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card wish-list border-0s px-1 py-2 promocard  " style={{ background: '#F6F6F6 0% 0% no-repeat padding-box;' }}>
//             <div className="p-0 card-body" style={{ background: '#F6F6F6 0% 0% no-repeat padding-box;' }}>
//               <div style={{ padding: '0.2rem' }} className="list-group-item d-flex flex-wrap d-flex align-items-center justify-content-between border-0">
//                 <h6 className="mb-0 font-weight-bold" style={{ color: '#232323' }}>
//                   Code promotion
//                 </h6>

//                 <div className="d-flex align-items-center  float-left">
//                   <div className="col-md-8 codepromo d-none pr-0">
//                     <div className="md-form md-outline">
//                       <input type="search" className="form-control  text-uppercase codepromoinput" placeholder="Saisir" onInput={() => Js_ChangeImageValider(this)} />
//                     </div>
//                   </div>
//                   <img id="Confirmpromo" src="/CESARWEB_WEB/validepromo.svg" alt="" className="codepromo Confirmpromo Dimcodepromomobil ml-1 d-none" style={{ opacity: 27% }} onClick={() => JS_ControleCodePromo('')} />
//                   <img id="cancelpromo" src="/CESARWEB_WEB/closePromo.svg" alt="" className="codepromo ml-1 mr-0 d-none Dimcodepromomobil" onClick={() => JS_AnnulerCodePromo()} />

//                   <div className="input-group-append mx-1">
//                     <button id="saisirpromo" type="button" className="btn  rounded btn-md my-0 ml-0 codepromo colorpromodisponible" onClick={() => showhideElement()} style={{ color: '#ffff;' }}>
//                       Saisir
//                     </button>
//                   </div>
//                   <div className="input-group-append mx-1">
//                     <button type="button" className="btn colorInactif  rounded btn-md my-0 ml-0 codepromo collapsed codedispo" data-toggle="collapse" data-target=".collapsePromo" aria-expanded="false" aria-controls="collapseOne" style={{ color: 'white' }}>
//                       Codes disponibles
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="collapse collapsePromo"></div>
//             </div>
//           </div>

//           <div id="CFI" className="card wish-list border-0 px-1 py-2  CARTE_FID d-none ">
//             <div className="p-0 card-body">
//               <div className="">
//                 <div className="p-0 col">
//                   <div>
//                     <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
//                       <div className="d-flex align-items-center ">
//                         <img src="/CESARWEB_WEB/closePromo.svg" alt="" width="25" height="25" onClick={() => JS_Del_FID()} />
//                         <h6 className="mb-0 mx-2 font-weight-bold">Ma fidelité</h6>
//                       </div>

//                       <p className="mb-0 Total_FID">
//                         <strong>0.00 €</strong>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <li id="NUM_CFID" style={{ padding: '0.2rem', background: '#f1f1f1 0% 0% no-repeat padding-box' }} className=" d-none card wish-list border py-2 px-1 my-1 CARTE_FID">
//             <div style={{ padding: '0.2rem' }} className="list-group-item d-flex align-items-center justify-content-between border-0">
//               <div>
//                 <h6 className="mb-0 font-weight-bold">Ma fidelité</h6>
//                 <h6 className="mb-0">0.00 €</h6>
//               </div>

//               <div className="input-group-append mx-1">
//                 <button type="button" className="btn btn-secondary rounded btn-md my-0 ml-0" style={{ backgroundColor: '#232323' }} onClick={() => Js_Select_CARTE_FID()}>
//                   Utiliser
//                 </button>
//               </div>
//             </div>
//           </li>
//           <div className="card wish-list border-0  px-1 py-2" style={{ background: '#f1f1f1 0% 0% no-repeat padding-box;' }}>
//             <div className="p-0 card-body">
//               <div className="">
//                 <div className="p-0 col">
//                   <div>
//                     <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
//                       <h6 className="mb-0 font-weight-bold"> Total</h6>
//                       <p className="mb-0 Total_Desk">
//                         <strong>11.70 €</strong>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ul>

//         <h5 className="my-3">
//           <img style={{ top: '181px', left: '325px', width: '25px', height: '32px' }} alt="" loading="lazy" className="attachment-thumbnail size-thumbnail mr-3" src="/CESARWEB_WEB/wallet.svg" width="80" height="80" />
//           <strong>Moyens de paiement</strong>
//         </h5>

//         <div className="row border rounded">
//           <div className="col-12">
//             <div className="md-form md-outline my-2">
//               <select className="custom-select" id="listmoyen" onChange={() => JS_SelectionMoyen()}>
//                 <option selected>Choisissez un moyen de paiement</option>
//                 <option id="enmagasin">En magasin</option>
//               </select>
//             </div>
//           </div>

//           <div id="espece" className="col-12 d-none">
//             <div className="card border-0 mb-0">
//               <div className="card-body pt-1">
//                 <div className="row pb-1">
//                   <div className="col-md-4 pl-0">
//                     <div className="form-check">
//                       <input type="checkbox" className="form-check-input" id="Especes" name="ListReglem" />
//                       <label className="form-check-label" htmlFor="Especes">
//                         Espèces
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-md-4 pl-0">
//                     <div className="form-check">
//                       <input type="checkbox" className="form-check-input" id="Carte" name="ListReglem" />
//                       <label className="form-check-label" htmlFor="Carte">
//                         Carte bancaire
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-md-4 pl-0">
//                     <div className="form-check">
//                       <input type="checkbox" className="form-check-input" id="Tickets" name="ListReglem" />
//                       <label className="form-check-label" htmlFor="Tickets">
//                         Tickets restaurant
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button type="button" onClick={() => JS_ValidationCMD()} className="btn btn-secondary btn-block rounded btn-md my-0 my-2 d-md-none validcommand" disabled style={{ backgroundColor: '#F1F1F1 !important', color: '#BBB8B8 !important' }}>
//           Valider ma commande
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;
