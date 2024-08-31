
import { Request, Response } from "express";
import prisma from "../db";
import bcrypt from "bcrypt"

export const signup = async (req : Request,res : Response) => {

    try {
        const {fullName,email, password, confirmPassword} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json(
                {error : "Passwords don't match",
                 success : false}
                )
        }

        const existingUser = await prisma.user.findFirst({
            where : {
                email : email
            }
        })

        if (existingUser){
            return res.status(400).json(
                {error : "Username already exists",
                    success : false
                })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data : {
                email,
                fullName,
                password : hashedPassword
            }
        })

        res.status(200).json({
            id : user.id,
            fullName : user.fullName,
            email : user.email,
            success : true
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during signup",  message); 
        res.status(500).json(
            {error : "Internal server error",
             success : false
            }
        )
    }
}


export const login = async (req : Request, res : Response) => {
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findFirst({
            where : {
                email
            }
        })
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "")

        if(!user || !isPasswordCorrect) {
            return res.status(400).json(
            {error : "Invalid password",
             success : false
            })
        }

        res.status(200).json({
            id : user.id,
            fullName : user.fullName,
            email : user.email,
            success : true
        })


    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during login",  message); 
        res.status(500).json(
            {error : "Internal server error",
             success : false
            }
        )
    }
}

export const test = async (req : Request, res : Response) => {

    res.status(200).json({
        success : true
    })
}