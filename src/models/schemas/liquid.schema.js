import mongoose from "mongoose"

const Schema = mongoose.Schema

const liquidSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 20
    },
    description: {
        type: String,
        required: true
    },
    priceARG: {
        type: Number,
        required: true
    },
    priceUSD: {
        type: Number,
        required: true
    },
    thumnail: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    ml: [
        {
            cant: { type: Number,required: false },
            ml: { type: Number,required: false }
        }
    ],
    category: {
        type: String,
        required: true
    }
})

export { liquidSchema }