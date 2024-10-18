import { Request, Response } from "express"
import prisma from "../../db"
import { bookingCreateInput } from "@martinjohnm/rebike-common";
import jwt from "jsonwebtoken";



import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import { getUser } from "../../utils/cookie/getUser";
import { JWT_COOKIE_TOKEN } from "../../utils/cookie/jwt-token-generater/generateToken";
import { JwtPayloadInterface } from "../../types/user/userTypes";
import { TimeDiff } from "../../utils/time/Timediff";


const jwt_secret = process.env.JWT_SECRET || ""
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) || ""

// Bookings admin controller

export const get_booking_bulk = async (req : Request,res : Response) => {

    try {


        const bike = await prisma.booking.findMany({
            include : {
                user : true,
                bike : {
                    include : {
                        company : true,
                        location : true
                    }
                },
                
            }
        })

        if (!bike) {
            return res.status(400).json({
                success : false,
                error : "No Bookings yet"
            })
        }

        return res.status(200).json({
            data : bike,
            success : true,
            message : "Bookings fetched successfully!"
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


export const get_booking_by_id = async (req : Request,res : Response) => {

    try {

        const id = Number(req.params.id)

   
        const bike = await prisma.booking.findFirst({
            where : {
                id 
            },
            include : {
                user : true,
                bike : true
            }
        })

        if (!bike) {
            return res.status(400).json({
                success : false,
                error : "No such Booking"
            })
        }

        return res.status(200).json({
            data : bike,
            success : true,
            message : "Booking fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during getting single Booking",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}

export const get_bookings_by_user = async (req : Request,res : Response) => {

    try {

        let userId = null;

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
            userId = user?.id
            

            
    
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
   
        const bookings = await prisma.booking.findMany({
            where : {
                userId : Number(userId)
            },
            include : {
                user : true,
                bike : true
            }
        })

        if (!bookings) {
            return res.status(400).json({
                success : false,
                message : "No Bookings yet"
            })
        }


        return res.status(200).json({
            data : bookings,
            success : true,
            message : "Bookings fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during getting single Booking",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}


export const cancel_booking = async (req : Request,res : Response) => {

    try {

    
        const id = req.body.id

        const existingBooking = await prisma.booking.findFirst({
            where : {
                id,
                status : "CANCELLED"
                
            }
        })

        

        if (existingBooking) {
            return res.status(400).json({
                success : false,
                message : "Booking already cancelled"
            })
        }


   
        const booking = await prisma.booking.update({

            where : {
                id
            },
            data : {
                status : "CANCELLED"
            }
        })

        if (!booking) {
            return res.status(400).json({
                success : false,
                message : "No such Booking"
            })
        }

        

        return res.status(200).json({
            data : booking,
            success : true,
            message : "Booking cancelled successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during getting single Booking",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
        
    }
}

