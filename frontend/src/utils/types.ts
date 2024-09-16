


//================ User typess====================

export interface User {
    id : number,
    email : string,
    fullName : string
}

export interface Bike {
    companyId : number,
    createdAt : Date,
    id : number,
    model : number,
    price : number,
    image : string,
    title : string,
    updatedAt : Date,
    company : Comapny
}

export interface FilteredBikes {
    companyId : number,
    locationId : number,
    createdAt : Date,
    id : number,
    model : number,
    price : number,
    image : string,
    title : string,
    updatedAt : Date,
    company : Comapny,
    location : Location
}

export interface Comapny {
    id : number,
    title : string
    country : string
    createdAt : Date
    updatedAt : Date
}

export interface Location {
    id : number
    title : string
}

export interface Company {
    id : number
    title : string
    country : string
}

export interface BikesQuery {
    startDate : Date ,
    endDate : Date
    companyId : number
    locationId : number
}

export interface BikeQueryType {
    startTime? : Date
    endTime? : Date
    companyId? : number
    locationId? : number
}

export interface DateQueryType {
    startDate : Date | null
    endDate : Date | null
}