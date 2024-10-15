

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_COOKIE_TOKEN } from "../../utils/cookie/jwt-token-generater/generateToken";
import prisma from "../../db";
import { JwtPayloadInterface } from "../../types/user/userTypes";

const jwt_secret = process.env.JWT_SECRET || ""




export const  getUser = async (req : Request,res : Response, next : NextFunction) => {
    try {

        try {
            const bearertoken = req.cookies[JWT_COOKIE_TOKEN]
            const token =  bearertoken.split(" ")[1];
        } catch(error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)
            return res.json(
                { 
                    error : "You are not logged In",
                    success : false,
                    message : "You are not logged In"
                })
        }
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

        if(!user) {
            return res.status(404).json(
                {
                    error : "User not found",
                    success : false
                })
        }

        return res.status(200).json({
            user,
            success : true
        })

    } catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        res.status(500).json(
            {
                
                error : "Internal server error",
                success : false
            })
    }
}