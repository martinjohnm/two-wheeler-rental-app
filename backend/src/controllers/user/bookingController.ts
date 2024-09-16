import { Request, Response } from "express"
import prisma from "../../db"
import { bookingCreateInput } from "@martinjohnm/rebike-common";




// Bookings controller


export const create_booking = async (req : Request,res : Response) => {

    try {

        let body = req.body
        const startTimeFromUser = new Date(body.startTime)
        const endTimeFromUser = new Date(body.endTime)

        body.startTime = new Date(body.startTime)
        body.endTime = new Date(body.endTime)

        const response = bookingCreateInput.safeParse(body);
        if (!response.success) {
            
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Booking failed"
            })
            return
        }

        const checkBooking = await prisma.booking.findFirst({

            where : {
                bikeId: body.bikeId,
                OR : [
                    { 
                        AND : [
                            {
                            endTime : {
                                gte : startTimeFromUser
                            },
                            startTime : {
                                lte : startTimeFromUser
                            },
                            NOT : {
                                status : "CANCELLED"
                            }
                            
                        }
                        ]
                    },
                    {
                        AND : [
                            {
                            startTime : {
                                lte : endTimeFromUser
                            },
                            endTime : {
                                gte : endTimeFromUser
                            },
                            NOT : {
                                status : "CANCELLED"
                            }
                        }
                        ]
                    }
                ]
            }
        })

        if (checkBooking) {
            return res.status(400).json({
                success : false,
                message : "Slot already booked by someone"
            })
        }


        const bookingCreated = await prisma.booking.create({
            
            data : {
                ...body
            }
            
        })

        if (!bookingCreated) {
            return res.status(400).json({
                success : false,
                meassage : "Booking error"
            })
        }

        res.status(200).json({
            data : bookingCreated,
            success : true,
            message : "Bike Booked successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during booking",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}


export const get_booking_bulk = async (req : Request,res : Response) => {

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


export const cancel_booking = async (req : Request,res : Response) => {

    try {

        const id = Number(req.params.id)

        const existingBooking = await prisma.booking.findFirst({
            where : {
                id,
                
                status : "PENDING"
                
                
            }
        })

        if (!existingBooking) {
            return res.status(400).json({
                success : false,
                error : "Booking already cancelled"
            })
        }
   
        const bike = await prisma.booking.update({

            where : {
                id
            },
            data : {
                status : "CANCELLED"
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
                error : "Internal server error"
            })
        
    }
}

