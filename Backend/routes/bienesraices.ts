import {Router } from "express";
/*hay que importar las rutas cuando las creemos. getPropiedad, createPropiedad, deletePropiedad ect*/
import { getPropiedades, getPropiedadById, createPropiedad } from "../controllers/propiedad";

/*Creamos el Router */
const bienesRaicesRoutes= Router();

bienesRaicesRoutes.get("/",getPropiedades);
bienesRaicesRoutes.get("/:direccion", getPropiedadById);
bienesRaicesRoutes.post("/",createPropiedad);
//bienesRaicesRoutes.put("/:direccon",updatePropiedad);
//bienesRaicesRoutes.patch("/:direccion",updatePropiedad);
//bienesRaicesRoutes.delete("/:direccion",deletePropiedad);

export default bienesRaicesRoutes;