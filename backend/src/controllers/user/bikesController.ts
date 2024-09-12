
import { Request, Response } from "express"
import prisma from "../../db"
import { bookingDateBikeFilter } from "@martinjohnm/rebike-common"





export const get_bikes = async (req : Request,res : Response) => {

    try {
        
 
        const bikes = await prisma.bike.findMany({
            include : { company : true, location : true},
            
        })

     
        if (!bikes) {
            return res.status(400).json({
                success : false,
                error : "No Bikes available"
            })
        }

        res.status(200).json({
            data : bikes,
            success : true,
            message : "Bikes fetched successfully!"
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


export const get_bike = async (req : Request,res : Response) => {

    try {
        
        const id = Number(req.params.id)

        const bike = await prisma.bike.findFirst({
            where : {
                id
            }
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


export const get_comapanies = async (req : Request,res : Response) => {
    try {
        
   
        const companies = await prisma.company.findMany()

        if (!companies) {
            return res.status(400).json({
                success : false,
                error : "No Companies available"
            })
        }
        return res.status(200).json({
            data : companies,
            success : true,
            message : "Companies fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during companies fetching",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}


export const get_bikes_by_filter = async (req : Request,res : Response) => {
    try {
        
        const body = req.body

        

        const companies = await prisma.bike.findMany(
            {
                where : {
                    
                    ...body
                    
                }, 
                include : { company : true, location : true},
            }
        )

        if (!companies) {
            return res.status(400).json({
                success : false,
                error : "No Companies available"
            })
        }
        return res.status(200).json({
            data : companies,
            success : true,
            message : "Companies fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during companies fetching",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}

export const get_bikes_by_date_range = async (req : Request,res : Response) => {
    try {
        
        let  body = req.body

        body.startTime = new Date(body.startTime)
        body.endTime = new Date(body.endTime)
        
        const response = bookingDateBikeFilter.safeParse(body);
        if (!response.success) {
            console.log(response.error);
            
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Signup failed"
            })
            return
        }
        
        const startTimeFromUser = new Date(body.startTime)
        const endTimeFromUser = new Date(body.endTime)
        //(startTimeFromUser >= booking.startTime && startTimeFromUser <= booking.endTime) || (endTimeFromUser >= booking.startTime && endTimeFromUser <= booking.endTime)
        console.log(startTimeFromUser, endTimeFromUser);
      
        const bikes = await prisma.bike.findMany(
            {
                where : {
                    
                    bookings : {
                        none : {
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
                        },
                        
                    },
                
                    
                }
            }
        )

        console.log(bikes.length);

        return res.status(200).json({
            data : bikes,
            success : true,
            message : "Bikes by slots fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during companies fetching",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
        
    }
}