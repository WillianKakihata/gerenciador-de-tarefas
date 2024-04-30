import { Request, Response, } from "express";
import categoriaService from "../service/categoria.service";

class categoriaController {
    async create(req: Request, res: Response) {
        const createdCategoria = await categoriaService.create(req.body)
        res.status(201)
        return res.json(createdCategoria)
    }

    async findByID(req: Request, res: Response) {
        const findByIdCategoria = await categoriaService.findByID(req.params.ID)
        res.status(201)
        return res.json(findByIdCategoria)
    }

    async findAll(req: Request, res: Response) {
        const findedCategorias = await categoriaService.findAll()
        return res.json(findedCategorias)
    }

    async findByIdAndDelete(req: Request, res: Response){
        const deleteMessagem = await categoriaService.findDelete(req.params.ID)
        return res.json(deleteMessagem)

    }
    
    async findIdAndUpdate(req:Request, res: Response) {
        const updateCategorias = await categoriaService.findAndUpdate(req.params.ID, req.body)
        return res.json(updateCategorias)
    }
}


export default new categoriaController()