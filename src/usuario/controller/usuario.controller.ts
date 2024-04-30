import { Request, Response } from "express";
import usuarioService from "../service/usuario.service";

class usuarioController{
    async create(req: Request, res: Response) {
        const user = await usuarioService.createUser(req.body)
        return res.json(user)
    }

    async findByID(req: Request, res: Response) {
        const user = await usuarioService.findIdUser(req.params.ID)
        return res.json(user)
    }

    async findAll(req: Request, res: Response) {
        const user = await usuarioService.Find()
        return res.json(user)
    }

    async FindByIdAndUpdate(req: Request, res: Response){
        const updateuser = await usuarioService.updateUser(req.params.ID, req.body)
        return res.json(updateuser)
    }

    async FindByIdAndDelete(req: Request, res: Response) {
        const deleteUsuario = await usuarioService.deleteUser(req.params.ID)
        return res.json(deleteUsuario)
    }
}


export default new usuarioController()