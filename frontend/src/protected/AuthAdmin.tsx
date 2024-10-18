import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { ADMIN_TOKEN } from "../utils/config";

export  function AuthorizeAdmin({children} : {children : ReactNode}){
    const token=localStorage.getItem(ADMIN_TOKEN);

    if(!token) return <Navigate to={'/'}/>

    return children
}

export const ProtectAdmin = ({children} : {children : ReactNode} )  => {
    const token=localStorage.getItem(ADMIN_TOKEN);

    if(token) return <Navigate to={"/admin-dashboard"}/>

    return children;
}