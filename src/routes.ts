import { Router } from "express";
import categoriaController from "./categoria/controller/categoria.controller";
import tarefaController from "./tarefa/controller/tarefa.controller";
import usuarioController from "./usuario/controller/usuario.controller";
const routes = Router()


//Categoria
routes.post('/categoria', categoriaController.create)
routes.get('/categoria/:ID', categoriaController.findByID)
routes.get('/categoria', categoriaController.findAll)
routes.delete('/categoria/:ID', categoriaController.findByIdAndDelete)
routes.put('/categoria/:ID', categoriaController.findIdAndUpdate)
//Tarefas
routes.post('/tarefa', tarefaController.create)
routes.get('/tarefa/:ID', tarefaController.FindByID)
routes.get('/tarefa', tarefaController.findAll)
routes.delete('/tarefa/:ID', tarefaController.FindByIdAndDelete)
routes.put('/tarefa/:ID', tarefaController.FindByIdAndUpdate)
routes.get('/tarefasUsuarios/:ID', tarefaController.FindIdUser)
routes.get('/categoriasUsuarios/:ID', tarefaController.FindCategoriasTarefas)
//Usuario
routes.post('/usuario', usuarioController.create)
routes.get('/usuario/:ID', usuarioController.findByID)
routes.get('/usuario', usuarioController.findAll)
routes.delete('/usuario/:ID', usuarioController.FindByIdAndDelete)
routes.put('/usuario/:ID', usuarioController.FindByIdAndUpdate)
export {
 routes
}