import categoriaModel from "../schema/categoria.schema";
import categoriaType from "../types/categoria.types";

class CategoriaService {
    async create(categoria: categoriaType) {
        const createCategoria = await categoriaModel.create(categoria)
        return createCategoria                                  
    }

    async findByID(ID: any) {
        const findByIDCategoria = await categoriaModel.findById(ID)
        return findByIDCategoria
    }

    async findAll() {
        const findedCategorias = await categoriaModel.find()
        return findedCategorias
    }

    async findDelete(ID: any) {
        try {
            await categoriaModel.findByIdAndDelete(ID)
            return "Categoria removido"
        } catch (error) {
            return new Error(`Categoria nao removido: ${error}`)
        } 
        
    }

    async findAndUpdate(ID: any, categoria: categoriaType){
            const update = await categoriaModel.findByIdAndUpdate(ID, {
                nome: categoria.nome,
                cor: categoria.cor,
                price: categoria.price
            }, {new: true})
            return update   
    }
}




export default new CategoriaService()