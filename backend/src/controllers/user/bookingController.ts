import { Request, Response } from "express"
import prisma from "../../db"
import { bookingCreateInput } from "@martinjohnm/rebike-common";




// Bookings controller


export const create_booking = async (req : Request,res : Response) => {

    try {

        const body = req.body

        const response = bookingCreateInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Booking failed"
            })
            return
        }

        const bike = await prisma.booking.create({
            ...body
        })

        if (!bike) {
            return res.status(400).json({
                success : false,
                error : "No such bike"
            })
        }

        res.status(200).json({
            data : bike,
            success : true,
            message : "Bike fetched successfully!"
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


export const get_booking = async (req : Request,res : Response) => {

    try {


        const bike = await prisma.booking.findMany({
            include : {
                user : true,
                bike : true
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

