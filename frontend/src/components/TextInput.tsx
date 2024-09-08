import { ChangeEvent } from "react";


interface TExtInput {
    type : "email" | "password" | "text", 
    label : string, placeholder : string,     
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    
}

export const TextInput = ({type, label, placeholder, onChange} : TExtInput) => {
    return  <div className="p-2">
    <label className="block mb-2 text-sm font-medium text-white dark:text-white">{label}</label>
    <input onChange={onChange} type={type} id="first_name" className="bg-black border border-gray-300 text-white outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>  
}
