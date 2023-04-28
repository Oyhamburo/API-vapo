import dotenv from "dotenv"
import {
    UserDAO,
    LiquidDAO,
    SparePartDAO,
    VaporizerDAO
} from "./daos/index.dao.js"


let sparePart
let liquid
let vaporizer
let user
let cart 

dotenv.config()

const opcion = process.env.DB || 'MONGO'

switch (opcion) {
    case 'MYSQL':
        // product = new ProductDAO();
        break
    case 'MONGO':
        vaporizer = new VaporizerDAO();
        liquid = new LiquidDAO();
        sparePart = new SparePartDAO();
        user = new UserDAO();
        break
    case 'firebase':
        break
}

class DaoFactory {
    static getVaporizerDao() {
        return vaporizer
    }
    static getSparePartDao() {
        return sparePart
    }
    static getLiquidDao() {
        return liquid
    }
    static getUserDao() {
        return user
    }
    static getCartDao() {
        return cart
    }
}

export { DaoFactory }