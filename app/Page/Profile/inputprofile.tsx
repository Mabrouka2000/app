"use client"

import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useState } from "react";


interface InputProps{
    id:string,
    type?:string ,
    placeholder:string
    label?:string,
    disabled?:boolean,
    required?:boolean,
    register: UseFormRegister<FieldValues>,
    errors :FieldErrors
    Icon?:IconType,
    value?:any,
    onChange?:(e:any)=>void
}
const InputProfile :React.FC<InputProps>= ({
    id,type,placeholder,label, disabled,
    required,
    register,
    errors,
    Icon,
    value,
    onChange}) => {
        const [val ,setVal]=useState(value)
    
    return ( 
        <div className=" flex flex-col px-2">
            <div className="flex relative gap-2 p-2 h-full">
                {Icon && <Icon size={25} className=" border-slate-200"/>}
                <label  className=" text-sm">{label}</label>
            </div>
                <input 
                autoComplete="off"
                id={id}
                disabled={disabled}
                {...register(id,{required})}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={` border-b-[2px] border-b-gray-200 pl-8 text-m w-full p-2 text-gray-600 mb-4 
                ${errors[id]? 'focus:border-rose-400':'border-slate-300'}`}
                
            />    
        </div>
    );
}

export default InputProfile;