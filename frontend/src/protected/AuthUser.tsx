import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { USER_TOKEN } from "../utils/config";

export  function AuthorizeUser({children} : {children : ReactNode}){
    const token=localStorage.getItem(USER_TOKEN);

    if(!token) return <Navigate to={'/'}/>

    return children
}

export const ProtectUser = ({children} : {children : ReactNode} )  => {
    const token=localStorage.getItem(USER_TOKEN);

    if(token) return <Navigate to={"/home"}/>

    return children;
}