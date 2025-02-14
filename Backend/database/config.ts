import mongoose from "mongoose";

 export const conectarDB = async():Promise<void> =>{ /*Hacemos un try catch para hacer la coneccion */
    try{/*aca esperamos que mongoose se conecte a la db */
        await mongoose.connect("mongodb+srv://juanrhim:bienesraices@inmobiliara.xhyw5.mongodb.net/")
        console.log("Base de Datos online")
    } catch (error){
        console.log(error)
        throw new Error("Error al conectar a la Base de Datos");
    }
}