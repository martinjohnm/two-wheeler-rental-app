import { atom } from "recoil";



export interface User {
    id : number,
    email : string,
    fullName : string
}


export const userAtom = atom<User | null>({
    key : "user",
    default : null
})