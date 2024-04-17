"use client"
import React, { useCallback } from 'react';
import { useRouter } from "next/navigation";
import { CiStar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuBadgePercent, LuUserCircle2 } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import "../profile.css";



 const CompteProfile = ({setShowProfile}:any)=> {
    const router = useRouter();
    const [dataUser, setDataUser] = React.useState(null);

const HandleLogout = async () => {
    await fetch("http://localhost:8000/backend/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    });
    localStorage.setItem("CartItem",JSON.stringify(null))        
    await getData();
    setShowProfile(false)
    localStorage.removeItem("userId")
    router.push("/");
};
const getData =async () => {
    try {
        const userId=localStorage.getItem("userId")
console.log({userId});

        const response = await fetch(`http://localhost:8000/backend/user/${userId}`, {
            method: "GET",
            credentials: "include",
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setDataUser(jsonData);
    } catch (e) {
        console.error('Login error', e);
    }
  }
  React.useEffect(() => {
    if (!dataUser) {
    getData();
console.log(dataUser)}
}, []); 
   return (
     <div>   
        <div className="w-100 d-flex justify-content-center align-items-center">
<span className="font-weight-bold d-flex justify-content-center align-items-center mr-2" style={{}}>
Mon compte
</span>
</div>
<div className="grid flex-row-6  gap-5 p-4">
     <div
         onClick={() => {
         router.push("/Page/Profile");
        // router.push("/components/DropDown");
        
         }} 
         className="flex cursor-pointer gap-4"
     >
         <LuUserCircle2 size={30} />
         <p className="text-2xl cursor-pointer">Profile</p>
     </div>
     <div className="flex gap-4">
         <TbShoppingBagCheck size={30} />
         <p className="text-2xl">Commandes</p>
     </div>
     <div className="flex gap-4">
         <CiStar size={30} />
         <p className="text-2xl">Fidélité</p>
     </div>
     <div className="flex gap-4">
         <LuBadgePercent size={30} />
         <p className="text-2xl">Promotions</p>
     </div>
     <div className="flex gap-4">
         <IoMdNotificationsOutline size={30} />
         <p className="text-2xl">Notifications</p>
     </div>
     <div className="flex gap-4" onClick={HandleLogout}>
         <RiLogoutCircleLine size={30} />
         <p className="text-2xl cursor-pointer" onClick={HandleLogout}>Déconnexion</p>
     </div>
     </div></div>
   )
 }
 export default CompteProfile ;
