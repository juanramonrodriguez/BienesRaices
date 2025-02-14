import { Request, Response } from "express";
import Propiedad,{ IPropiedad } from "../models/propiedades";


export const getPropiedades=async({},res:Response)=>{
    const condicion ={estado:true};
    const propiedades=await Propiedad.find(condicion);
    res.json({propiedades})
    console.log("Propiedades enviadas")
};

export const getPropiedadById =async( req:Request, res:Response)=>{
    const {direccion}= req.params;
    const propiedad :IPropiedad | null= await Propiedad.findOne({direccion:direccion})
    res.json({propiedad})
    
}

export const createPropiedad= async(req:Request, res:Response)=>{
    
}