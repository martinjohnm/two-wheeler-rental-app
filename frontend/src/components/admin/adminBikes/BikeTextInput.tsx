import { ChangeEvent } from "react";




export const BikeTextInput = ({title, placeHolder, onChange, type} : {title : String, placeHolder : String, onChange : (e: ChangeEvent<HTMLInputElement>) => void, type? : string}) => {
    return  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
    <input onChange={onChange} type={`${type ? type : "text"}`} id="email" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={String(placeHolder)} required />
</div> 
}