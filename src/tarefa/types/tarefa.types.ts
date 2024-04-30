import categoriaModel from "../../categoria/schema/categoria.schema"
import usuarioModel from "../../usuario/schema/usuario.schema"
import { Document } from "mongoose"
export default interface tarefasType extends Document {
    titulo: String,
    descricao: String,
    dataIni: Date,
    dataFim: Date,
    status: String,
    usernameVinculado: typeof usuarioModel,
    categoriaVinculado: typeof categoriaModel
}           
