import knex from "knex"
import dotenv from 'dotenv'

dotenv.config()

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        port: process.env.PORTHOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE
    }
})

export { db }