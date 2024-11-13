import { Schema, model } from "mongoose";

const Esquema1 = new Schema({
    name:{
        type:String
    }
})

export const modelo1 = new model("tabla de alumnos", Esquema1)
