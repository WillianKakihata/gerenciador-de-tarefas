import { Document } from "mongoose"
export default interface usuarioType extends Document {
    username: String,
    peso: Number,
    senha: String,
    email: String
}