import mongoose from "mongoose"

const Schema = mongoose.Schema

const sparePartSchema = new Schema({
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
    cant: {
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
    galery: [
        {
            image: { type: String,required: false },
            color: { type: String,required: false }
        }
    ],
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }

})

export { sparePartSchema }