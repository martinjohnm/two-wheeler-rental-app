import z from "zod"

// User
export const userSignupinput = z.object({
    email : z.string().email({message : "Enter a valid email"}),
    fullName : z.string().min(1, {message : "Name cannot be empty"}),
    password : z.string().min(6, {message : "Password should be atleast 6"}),
    confirmPassword : z.string().min(6, {message : "Password should be atleast 6"})
})

export const userLoginInput = z.object({
    email : z.string().email({message : "enter a valid email"}),
    password : z.string().min(6, {message : "password should be atleast 6"})
})



// Bike
export const bikeAddInput = z.object({
    model : z.number().min(1, {message : "Model Year cannot be empty"}),
    price : z.number().min(1, {message : "Price cannot be empty"}),
    title : z.string().min(1, {message: "Title cannot be empty"}),
    image : z.string().optional(),

})

export const companyAddInput = z.object({
    title : z.string().min(1, {message: "Title cannot be empty"}),
    country : z.string().min(1, {message : "Country name is needed"})
})

export const bikeUpdateInput = z.object({
    model : z.number().min(1, {message : "Model Year cannot be empty"}),
    price : z.number().min(1, {message : "Price cannot be empty"}),
    title : z.string().min(1, {message: "Title cannot be empty"}),
    image : z.string().optional(),
})


// Location
export const locationAddInput = z.object({
    title : z.string().min(1, {message : "Title cannot be empty"})
})

// Booking 
export const bookingCreateInput = z.object({
    userId : z.number().min(1, {message : "userId is needed"}),
    bikeId : z.number().min(1, {message : "bikeId is needed"}),
    startTime : z.date({message : "date is needed"}),
    endTime : z.date({message : "date is needed"}),
    status : z.string().min(1, {message : "Status is needed"})
})

export const bookingDateBikeFilter = z.object({
    startTime : z.date({message : "date is needed"}),
    endTime : z.date({message : "date is needed"}),
    locationId : z.number().min(1, {message : "Location Id Needed"}).optional(),
    companyId : z.number().min(1, {message : "Company Id Needed"}).optional(),
})





// type inference in zod





// User
export type UserSignupinput = z.infer<typeof userSignupinput>
export type UserLoginInput  = z.infer<typeof userLoginInput>
// Bike
export type BikeAddInput = z.infer<typeof bikeAddInput>
export type CompanyAddInput = z.infer<typeof companyAddInput>
export type BikeUpdateInput = z.infer<typeof bikeUpdateInput>

// Location 
export type LocationAddInput = z.infer<typeof locationAddInput>

// Booking
export type BookingCreateInput = z.infer<typeof bookingCreateInput>
export type BookingDateBikeFilter = z.infer<typeof bookingDateBikeFilter>

