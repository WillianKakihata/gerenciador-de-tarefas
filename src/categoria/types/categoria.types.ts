import { Document } from "mongoose"

export default interface categoriaType extends Document {
    nome: String,
    cor: String,
    price: Number
}