import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";

const Address = () => {
    
    const [clicked,setClicked]=useState(false)

    return ( 
    <div className=" relative justify-content border-[1.2px] border-slate-200 bg-white shadow-md  rounded-2xl m-4 ">
        <div className="flex p-1 justify-between">
            <div className="flex  p-2 gap-1">
                <TfiLocationPin size={25} />
                <p className="">Adresse de domicile</p>
            </div>
            {clicked?
            <RiArrowDropUpLine size={50} onClick={()=>setClicked(!clicked)}  />
            : <RiArrowDropDownLine size={50} onClick={()=>setClicked(!clicked)} />            }
        </div>
        {clicked?
        <div className="grid grid-row p-2 gap-2 ">
            <input type="text" placeholder="Saisir votre adresse domicile" className="relative border-[1px] w-full p-2 rounded-md"/>
            <div className="grid relative gap-2 border-[1px] w-full p-2 rounded-md">
                <p className="p-2">Complément d'informations</p>
                
                <div className="grid grid-cols-5 gap-2" >
                <input type="text" placeholder="Batiment" className="relative border-[1px] w-full p-2 rounded-md"/>
                <input type="text" placeholder="Etage" className="relative border-[1px] w-full p-2 rounded-md"/>
                <input type="text" placeholder="Code 1" className="relative border-[1px] w-full p-2 rounded-md"/>
                <input type="text" placeholder="Code 2" className="relative border-[1px] w-full p-2 rounded-md"/>
                <input type="text" placeholder="Interphone" className="relative  border-[1px] w-full p-2 rounded-md"/>
                </div>
                <input type="text" placeholder="Remarque" className="relative border-[1px] w-full p-2 rounded-md"/>
                
            </div>
        </div>
        :""}
    </div> 
    );
}

export default Address;