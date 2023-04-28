import express from 'express'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv'
import { liquidRouter, sparePartsRouter, vaporizerRouter, userRouter } from './src/routes/index.routes.js'
import { sessionMongo } from './src/middlewares/index.middleware.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:477";

const app = express()

app.use(cors())
app.use(cookieParser());
app.use(sessionMongo)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/vaporizer', vaporizerRouter)
app.use('/spare-part', sparePartsRouter)
app.use('/liquid', liquidRouter)
app.use('/user', userRouter)

app.listen(PORT, async () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected DB", MONGO_URI);
    } catch (error) {
        console.log(`Error en conexión de Base de datos: ${error}`);
    }
})