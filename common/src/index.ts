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
    title : z.string().min(1, {message: "Title cannot be empty"})
})

export const companyAddInput = z.object({
    title : z.string().min(1, {message: "Title cannot be empty"}),
    country : z.string().min(1, {message : "Country name is needed"})
})

export const bikeUpdateInput = z.object({
    model : z.number().min(1, {message : "Model Year cannot be empty"}),
    price : z.number().min(1, {message : "Price cannot be empty"}),
    title : z.string().min(1, {message: "Title cannot be empty"})
})


// type inference in zod

// User
export type UserSignupinput = z.infer<typeof userSignupinput>
export type UserLoginInput  = z.infer<typeof userLoginInput>
// Bike
export type BikeAddInput = z.infer<typeof bikeAddInput>
export type CompanyAddInput = z.infer<typeof companyAddInput>
export type BikeUpdateInput = z.infer<typeof bikeUpdateInput>
