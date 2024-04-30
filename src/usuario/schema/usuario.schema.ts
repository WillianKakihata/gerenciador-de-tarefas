import mongoose, { Schema, model } from 'mongoose'
import usuarioType from '../types/usuario.types';

const usuarioSchema = new Schema({
    username: {
        type:String,
        required: true,
    },
    peso:{
        type: Number,
        required: false,
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}, { timestamps: true, versionKey: false})

const usuarioModel = mongoose.models.usuario || model<usuarioType>('Usuario', usuarioSchema)
export default usuarioModel
