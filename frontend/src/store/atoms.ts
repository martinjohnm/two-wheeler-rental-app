import { atom } from "recoil";
import { User } from "../utils/types";





export const userAtom = atom<User | null>({
    key : "user",
    default : null
})