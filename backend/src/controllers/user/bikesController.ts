
import { Request, Response } from "express"
import prisma from "../../db"





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
        
        const body = req.body
        
        const startTimeFromUser = new Date(body.startTime)
        const endTimeFromUser = new Date(body.endTime)

      
        const bikes = await prisma.bike.findMany(
            {
                include : {bookings : true}
            }
        )

        const filteredBikes = bikes.filter((bike) => {
            bike.bookings.filter((booking) => {
                if (booking.startTime < startTimeFromUser && booking.endTime < startTimeFromUser) {

                }
            })
        })

        return res.status(200).json({
            data : bikes,
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