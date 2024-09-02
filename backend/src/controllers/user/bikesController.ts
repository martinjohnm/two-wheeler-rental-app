import { Request, Response } from "express"
import prisma from "../../db"
import { bikeAddInput, bikeUpdateInput, companyAddInput } from "@martinjohnm/rebike-common"


// Bike CRUD Operation Indivudual

export const add_bike = async (req : Request,res : Response) => {

    try {

        const companyId = req.query.companyId
        const body = req.body
        const response = bikeAddInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Bike adding failed"
            })
            return
        }

        const {model, price, title} =  body;

        const bike = await prisma.bike.create({
            data : {
                model,
                price,
                title,
                company : {
                    connect : {id : Number(companyId)}
                }
            }
        })
        
        res.status(200).json({
            data : bike,
            success : true,
            message : "Bike added successfully!"
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

export const update_bike = async (req : Request,res : Response) => {

    try {
        
        const bikeId = Number(req.params.id)
        const companyId = Number(req.query.companyId)
        const body = req.body
        const response = bikeUpdateInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Bike Updataion failed"
            })
            return
        }
        const {model, price, title} =  body;
        const bike = await prisma.bike.update({
            where : {
                id : bikeId
            }, 
            data : {
                model,
                price,
                title,
                company : {
                    connect : {id :  companyId}
                }
            }
        })

        if (!bike) {
            return res.status(400).json({
                success : false,
                error : "No such bike"
            })
        }
        res.status(200).json({
            
            success : true,
            message : "Bike updated successfully!"
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

export const delete_bike = async (req : Request,res : Response) => {

    try {
        const id = Number(req.params.id)

        const bike = await prisma.bike.delete({
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
            message : "Bike deleted successfully!"
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



// Company CRUD Operations

export const add_company = async (req : Request,res : Response) => {

    try {

        const body = req.body
        const response = companyAddInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error : response.error,
                success : false,
                message : "Company adding failed"
            })
            return
        }

        const {title, country} = body

        const existingCompany = await prisma.company.findFirst({
            where : {
                title
            }
        })

        if (existingCompany) {
            return res.status(400).json({
                error : "Company already Exists",
                 success : false
            })
        }

        const company = await prisma.company.create({
            data : {
                title,
                country
            }
        })
        res.status(200).json({
            
            data : company,
            success : true,
            message : "Comapny added successfully!"
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


export const delete_company = async (req : Request,res : Response) => {

    try {
        const id = Number(req.params.id)
        console.log(id);
        
        const company = await prisma.company.delete({
            where : {
                id
            }
        })

        if (!company) {
            return res.status(400).json({
                success : false,
                error : "No such company"
            })
        }

        res.status(200).json({
            data : company,
            success : true,
            message : "Company and corresponding bikes deleted successfully!"
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




