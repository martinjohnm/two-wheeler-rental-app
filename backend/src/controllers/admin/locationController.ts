import { Request, Response } from "express"
import prisma from "../../db"
import { locationAddInput } from "@martinjohnm/rebike-common";





export const create_location = async (req : Request,res : Response) => {

    try {

        
        const body = req.body
        const response = locationAddInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "location adding failed"
            })
            return
        }

        const existingLocation = await prisma.location.findFirst({
            where : {
                title : body.title
            }
        })

        if (existingLocation) {
            return res.status(400).json({
                success : false,
                message : "Location already exists!"
            })
        }

        const location = await prisma.location.create({
            data : {
                ...body
            }
        })
        
        return res.status(200).json({
            data : location,
            success : true,
            message : "Location created successfully!"
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

export const get_all_locations = async (req : Request,res : Response) => {

    try {

      
        const location = await prisma.location.findMany()
        
        return res.status(200).json({
            data : location,
            success : true,
            message : "Location fetched successfully!"
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







