import usuarioSchema from "../schema/usuario.schema";
import usuarioType from "../types/usuario.types";

class usuarioService {

    async createUser(user: usuarioType) {
        const createUser = await usuarioSchema.create(user)
        return createUser
    }

    async findIdUser(ID: any) {
        try {
            const encontrarID = await usuarioSchema.findById(ID)
            return encontrarID
        } catch (error) {
            return ("nao encontrado")   
        }
    }

    async Find() {
        const encontre = await usuarioSchema.find()
        return encontre 
    }

    async deleteUser(ID: any) {
        try {
            await usuarioSchema.findByIdAndDelete(ID)
            return "Usuario deletado"
        } catch (error) {
            return Error(`Usuario nao deletado erro: ${error}`)    
        }
    }

    async updateUser(ID: any, usuario: usuarioType) {
        const update = await usuarioSchema.findByIdAndUpdate(ID, {
            username: usuario.username,
            peso: usuario.peso,
            senha: usuario.senha,
            email: usuario.email
        },{new: true})
        return update
    }


}

export default new usuarioService()