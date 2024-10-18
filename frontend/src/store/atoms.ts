import { atom } from "recoil";
import { Bike, BikeQueryType, BikesQuery, Booking, BookingAdmin, Company, FilteredBikes, Location, NewBike, User } from "../utils/types";



export const userAtom = atom<User | null>({
    key : "user",
    default : null
})

export const adminAtom = atom<User | null>({
    key : "admin",
    default : null
})

export const bikeForBooking = atom<Bike | null>({
    key : "bikeForBooking",
    default : null
})

export const bikesAtom = atom<Bike[] | null>({
    key : "bikes",
    default : null
})

export const newBikeAtom = atom<NewBike | null>({
    key : "newBikeAdd",
    default : null
})

export const FilteredBikesAtom = atom<FilteredBikes[] | null>({
    key : "FilteredBikes",
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

export const AddBikeBoolean = atom<Boolean> ({
    key : "bikeAddBoolean",
    default : false
})

export const AddLocationBoolean = atom<Boolean> ({
    key : "addLocationBoolean",
    default : false
})


export const datePickerAtom = atom<BikeQueryType>({
    key : "datePickerAtom",
    default : {
        startTime : undefined,
        endTime : undefined,
        locationId : undefined,
        companyId : undefined
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


export const bookingsAtom = atom<Booking[] | null>({
    key : "bookingsAtom",
    default : null
})

export const bookingsAdminAtom = atom<BookingAdmin[] | null>({
    key : "bookingsAdminAtom",
    default : null
})


export const AdminSideBarOpen = atom<Boolean>({
    key : "sdminSideBarOpenAtom",
    default : false
})


// Admin Users 

export const userssAdminAtom = atom<User[] | null>({
    key : "userssAdminAtom",
    default : null
})



export const locationsAdmin = atom<Location[] | null>({
    key : "locationAdmin",
    default : null
})