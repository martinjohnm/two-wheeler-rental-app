import z from "zod"


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


// type inference in zod

export type UserSignupinput = z.infer<typeof userSignupinput>
export type UserLoginInput  = z.infer<typeof userLoginInput>
