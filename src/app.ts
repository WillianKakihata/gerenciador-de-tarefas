import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'


class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.bancoDados()
        this.routes()
    }

    public middleware(){
        this.express.use(express.json())
    }

    public async bancoDados(){
        try{
            await mongoose.connect('mongodb://localhost:27017/test')
            console.log("Está conectado no banco de dados")
        } catch(error){
            console.error("Não foi possível conectar no banco de dados: ", error)
        }           
    }

    public routes(): void {
        this.express.use(routes)
    }

}
 
export default new App().express