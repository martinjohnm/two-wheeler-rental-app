
import { Request, Response } from "express";
import prisma from "../../db";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { userLoginInput, userSignupinput } from "@martinjohnm/rebike-common";
import { generateTokenAndSetCookie, JWT_COOKIE_TOKEN } from "../../utils/cookie/jwt-token-generater/generateToken";
import { JwtPayloadInterface } from "../../types/user/userTypes";

const jwt_secret = process.env.JWT_SECRET || ""

export const signup = async (req : Request,res : Response) => {

    try {
        const body = req.body
        const response = userSignupinput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Signup failed"
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
                password : hashedPassword
            }
        })
        const token = generateTokenAndSetCookie(String(newUser.id), res);
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
                message : "Signup failed"
            })
            return
        }
        const {email, password} = body

        const user = await prisma.user.findFirst({
            where : {
                email
            }
        })
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "")

        if(!user || !isPasswordCorrect) {
            return res.status(400).json(
            {
                success : false,
                error : "Invalid credentials"
            })
        }

        const token = generateTokenAndSetCookie(String(user.id), res);

        res.status(200).json({
            success : true,
            message : "Login successful!",
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

        res.clearCookie(JWT_COOKIE_TOKEN)

        res.status(200).json(
            {message : "Logged out successfully",
             success : true,
            })
        

    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during logout",  message); 
        res.status(500).json(
            {
                error : "Internal server error",
                success : false
            })
    }
}

export const current_user = async (req : Request,res : Response) => {
    try {

        const bearertoken = req.cookies[JWT_COOKIE_TOKEN]
        const token =  bearertoken.split(" ")[1];
        
        const decoded = jwt.verify(token, jwt_secret) as JwtPayloadInterface

        if (!decoded) {
            return res.status(401).json({
                error : "Unauthorized - Invalid Token",
                success : false
            })
        }
      
        const user = await prisma.user.findFirst(
            {
                where : {
                    id : Number(decoded.userId)
                }
            }
        )

        return res.status(200).json({
            success : true,
            message : "User fetched successfully",
            data : user
        })

    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during current user fetch",  message); 
        res.status(500).json(
            {
                error : "Internal server error",
                success : false
            })
    }
}



