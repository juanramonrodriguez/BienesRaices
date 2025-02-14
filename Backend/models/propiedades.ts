import { Model, Schema, model } from "mongoose"; /*Importamos para crear el modelo y el esquema */

export interface IPropiedad {
direccion:string;
estado: boolean;
descripcion: string;
titulo: string;
baño:number;
cochera:number;
dormitorio:number;
}

const PropiedadSchema = new Schema<IPropiedad>({
    direccion:{
        type:String,
        required: true
    },
    estado:{
        type:Boolean,
        required: true
    },
    descripcion:{
        type:String,
        required: true
    },
    titulo:{
        type:String,
        required: true
    },
    baño:{
        type:Number,
        required:true
    },
    cochera:{
        type:Number,
        required:true
    },
    dormitorio:{
        type:Number,
        required:true
    }
})
const Propiedad: Model<IPropiedad> = model<IPropiedad>("Propiedad", PropiedadSchema);

export default Propiedad;