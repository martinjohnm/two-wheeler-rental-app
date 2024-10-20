
import { Request, Response } from "express";
import prisma from "../../db";
import bcrypt from "bcrypt"
import { userLoginInput, userSignupinput } from "@martinjohnm/rebike-common";
import { generateTokenAndSetCookieAdmin, JWT_COOKIE_TOKEN_ADMIN } from "../../utils/cookie/jwt-token-generater/generateToken";

export const signup = async (req : Request,res : Response) => {

    try {
        const body = req.body
        const response = userSignupinput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "admin Creation failed"
            })
            return
        }

        const {password, confirmPassword,email, fullName} = body

        if (password !== confirmPassword) {
            return res.status(400).json(
                {
                    success : false,
                    error : "Passwords don't match"
                })
        }

        const existingUser = await prisma.user.findFirst({
            where : {
                email
            }
        })

        if (existingUser){
            return res.status(400).json(
                {
                    success : false,
                    error : "Username already registered"
                })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data : {
                email,
                fullName,
                password : hashedPassword,
                isAdmin : true
            }
        })
        const token = generateTokenAndSetCookieAdmin(String(newUser.id), res);
        res.status(200).json({
            data : {
                id : newUser.id,
                fullName : newUser.fullName,
                email : newUser.email,
                token 
            },

            success : true,
            message : "User created successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during signup",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}


export const login = async (req : Request, res : Response) => {
    try {
        const body = req.body
        const response = userLoginInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Login failed"
            })
            return
        }
        const {email, password} = body



        const user = await prisma.user.findFirst({
            where : {
                email
            }
        })
        if (!user?.isAdmin) {
            return res.status(400).json(
                {
                    success : false,
                    message : "Only admin can login"
                })
        }
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "")

        if(!user || !isPasswordCorrect) {
            return res.status(400).json(
            {
                success : false,
                message : "Invalid credentials"
            })
        }

        const token = generateTokenAndSetCookieAdmin(String(user.id), res);

        res.status(200).json({
            success : true,
            message : "Admin Login successful!",
            data : {
                id : user.id,
                fullName : user.fullName,
                email : user.email,
                token
            }
            
        })


    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during login",  message); 
        res.status(500).json(
            {
                error : "Internal server error",
                success : false
            }
        )
    }
}

export const logout = (req : Request,res : Response) => {
    try {

        res.clearCookie(JWT_COOKIE_TOKEN_ADMIN)

        res.status(200).json(
            {message : "Admin Logged out successfully",
             success : true,
            })
        

    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during admin logout",  message); 
        res.status(500).json(
            {
                error : "Internal server error",
                success : false
            })
    }
}
