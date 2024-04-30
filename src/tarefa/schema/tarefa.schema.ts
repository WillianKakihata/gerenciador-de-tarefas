import { Schema, Types, model } from 'mongoose'
import tarefasType from '../types/tarefa.types';

//tipo, categoria (opcional), status (pendente, em andamento, concluída), e usuário associado.
enum statusTarefas{
    Pendente= 'Pendente',
    emProgresso= 'Em progresso',
    Completo= 'completo',
}

const tarefaSchema = new Schema({
    titulo: String,
    descricao: String,
    dataIni: Date,
    dataFim: Date,
    status: { 
        type: String,
        enum: Object.values(statusTarefas),
        required: true 
    },
    categoriaVinculado: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required:true,
    },
    usernameVinculado: {
        type: Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: true 
    }
}, { timestamps: true });


const tarefaModel = model<tarefasType>("Tarefa", tarefaSchema)
export default tarefaModel
