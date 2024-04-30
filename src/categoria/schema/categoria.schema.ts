import mongoose, { Schema, model } from 'mongoose'
import categoriaType from '../types/categoria.types';

const categoriaSchema = new Schema({
    nome: String,
    cor: String,
    price: Number
}, { timestamps: true });


const categoriaModel = mongoose.models.categoria || model<categoriaType>("Categoria", categoriaSchema)
export default categoriaModel