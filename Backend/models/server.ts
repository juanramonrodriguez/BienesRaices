import express, { Express } from "express";
import bienesRaicesRoutes from "../routes/bienesraices";
import {conectarDB} from"../database/config"

export class Server{ /*Expportamos la clase server */
    app:Express; /*Le definimos a app que es de tipo express */

    constructor(){ /*Creamos el constructor. Todo esto se ejecuta cuando se inica una instancia 
        de server. -activamos express
                   - conectamos la base de datos
                   -activamos el middlewares= interpreta los datos para que sepa que son Json
                   -ponemos a funcionar las rutas*/
                   
        this.app = express();
        this.conexionaDB();
        this.middlewares();
        this.routes();
    }

    /*Empesamos a crear las funciones */
    async conexionaDB():Promise<void>{ /*Es de tipo Promise y <void> por que no devuelve nada */
        await conectarDB(); /*Esperamos la resolucion de conectarDB */
    }

    /*Hacemos los middlewares */
    middlewares():void{
        this.app.use(express.json())
    }

    /*Hacemos el de las Rutas */
    routes():void{
        this.app.use("/propiedades",bienesRaicesRoutes)
    }
    
    /*Activamos el servidor
    Aca definimos lo que hace el .listen */
    listen():void{
        this.app.listen(8080,()=>{
            console.log("Servidor iniciado en el puerto 8080")
        })
    }
}