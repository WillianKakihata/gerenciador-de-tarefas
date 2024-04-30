import { Response, Request } from "express";
import tarefaService from "../service/tarefa.service";
import tarefaModel from "../schema/tarefa.schema";

class tarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await tarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }

    async FindByID (req: Request, res: Response) {
        const findID = await tarefaService.findByID(req.params.ID)
        res.status(201)
        return res.json(findID)
    }

    async findAll (req: Request, res: Response) {
        const findall = await tarefaService.Find()
        return res.json(findall)
    }

    async FindByIdAndDelete (req: Request, res: Response) {
        const deletar = await tarefaService.Delete(req.params.ID)
        return res.json(deletar)
    }

    async FindByIdAndUpdate (req: Request, res: Response) {
        const updates = await tarefaService.Update(req.params.ID, req.body)
        return res.json(updates)
    }
    

    async FindIdUser(req: Request, res: Response) {
        const findedTasks = await tarefaService.FindUser(req.params.id)
        return res.json(findedTasks);
    }

    async FindCategoriasTarefas(req: Request, res: Response) {
        const categorias = await tarefaService.FindCategorias(req.params.ID)
        return res.json(categorias)
    }
}

export default new tarefaController()