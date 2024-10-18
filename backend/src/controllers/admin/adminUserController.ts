



import { Request, Response } from "express"
import prisma from "../../db"
import { uploadImage } from "../../utils/cloudinary/cloudinary_uploader"
// Bike CRUD Operation Indivudual

export const all_users_for_admin = async (req : Request,res : Response) => {

    try {

      
        const users = await prisma.user.findMany({
            
        })
        
        res.status(200).json({
            data : users,
            success : true,
            message : "Users fetched successfully!"
        })
      
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during signup",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
        
    }
}




