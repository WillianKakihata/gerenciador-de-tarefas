import tarefaModel from "../schema/tarefa.schema";
import tarefasType  from "../types/tarefa.types";
import usuarioType from "../../usuario/types/usuario.types";
import categoriaType from "../../categoria/types/categoria.types";
import { ObjectId } from "mongoose";


class TarefaService {
    async create(tarefas: tarefasType){
        const createTarefa = await tarefaModel.create(tarefas)
        return createTarefa
    }
    
    async findByID(ID: any) {
        const findByID = await tarefaModel.findById(ID)
        return findByID
    }

    async Find() {
        const findID = await tarefaModel.find()
        return findID
    }

    async Delete(ID: any) {
        try {
            await tarefaModel.findByIdAndDelete(ID)
            return "Tarefa removida"
        } catch (error) {
            return Error (`Nao foi removido, erro: ${error}`)
        }
    }

    async Update(ID: any, tarefas: tarefasType) {
        const update = await tarefaModel.findByIdAndUpdate(ID, {
            titulo: tarefas.titulo,
            descricao: tarefas.descricao,
            dataIni: tarefas.dataIni,
            dataFim: tarefas.dataFim,
            status: tarefas.status,
            usernameVinculado: tarefas.usernameVinculado,
            categoriaVinculado: tarefas.categoriaVinculado
        },{new: true})
        return update
    }

    async FindUser(ID: usuarioType["_id"] ) {
        const tasks = await tarefaModel.find({ usernameVinculado : ID})
        return tasks
    }

    async FindCategorias(ID: categoriaType["_id"]) {
        const categorias = await tarefaModel.find({categoriaVinculado : ID})
        return categorias
    }



}


export default new TarefaService()