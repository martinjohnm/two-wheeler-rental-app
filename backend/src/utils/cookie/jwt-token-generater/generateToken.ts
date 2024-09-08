




import { Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const jwt_secret = process.env.JWT_SECRET || ""
const node_env   = process.env.NODE_ENV || ""

export const JWT_COOKIE_TOKEN = "twowheelerapp-user-cookie"
export const JWT_COOKIE_TOKEN_ADMIN = "twowheelerapp-admin-cookie"

export const generateTokenAndSetCookie= (userId : String, res : Response) => {
    const token = jwt.sign({userId}, jwt_secret, {
        expiresIn : "15d"
    })

    res.cookie(JWT_COOKIE_TOKEN, "Bearer " + token, {
        maxAge : 15 * 24 * 60 * 60 * 1000,
        httpOnly : true, // prevent XSS attacks cross site  scripting 
        sameSite :  "lax", // CSRF attacks
        secure : node_env !== "development",
    })
    return token
}

export const generateTokenAndSetCookieAdmin= (adminId : String, res : Response) => {
    const token = jwt.sign({adminId}, jwt_secret, {
        expiresIn : "15d"
    })

    res.cookie(JWT_COOKIE_TOKEN_ADMIN, "Bearer " + token, {
        maxAge : 15 * 24 * 60 * 60 * 1000,
        httpOnly : true, // prevent XSS attacks cross site  scripting 
        sameSite :  "strict", // CSRF attacks
        secure : node_env !== "development",
    })
    return token
}


