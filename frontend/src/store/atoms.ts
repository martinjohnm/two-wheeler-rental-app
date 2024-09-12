import { atom } from "recoil";
import { Bike, BikeQueryType, BikesQuery, Company, Location, User } from "../utils/types";



export const userAtom = atom<User | null>({
    key : "user",
    default : null
})

export const bikesAtom = atom<Bike[] | null>({
    key : "bikes",
    default : null
})

export const locationAtom = atom<Location[] | null>({
    key : "location",
    default : null
})

export const companyAtom = atom<Company[] | null>({
    key : "company",
    default : null
})

export const BikesQueryAtom = atom<BikesQuery>({
    key : "bikesQuery",
    default : {
        startDate : new Date(),
        endDate : new Date(),
        companyId : 2,
        locationId : 2
    }
})


export const datePickerAtom = atom<BikeQueryType>({
    key : "datePickerAtom",
    default : {
        startDate : undefined,
        endDate : undefined
    }
})

export const startDateAtom = atom<Date | null>({
    key : "startDateAtom",
    default : null
})
export const endDateAtom = atom<Date | null>({
    key : "endDateAtom",
    default : null
})
