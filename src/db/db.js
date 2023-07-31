import mongoose from "mongoose";
import { MONGO_URI } from '../config'

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conectado exitosamente a crud_fazt");
    } catch (error) {
        throw new Error("Error al conectarse a la db")
    }
}

export default connection;
