import { DaoFactory } from "../models/factory.js"

const dao = DaoFactory.getLiquidDao()

let intance = null


class Service {

    static getInstance = () => {
        if (!intance)
            intance = new Service()
        return intance
    }

    async getAll() {
        try {
            const products = await dao.getAll();
            return products
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async getById(id) {
        try {
            const product = await dao.getById(id)
            return product
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async getByCategory(category){
        try {
            const product = await dao.getByCategory(category)
            return product
        } catch (error) {
            console.error(error)
            return false
        }
    }


    async create(product) {
        try {
            return await dao.create(product)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateById(id, product) {
        try {
            const productUpdate = await dao.updateById(id, product)
            return productUpdate
        } catch (error) {
            console.error(error);
            return false
        }
    }

    // async updateAllPrice() {
    //     try {
    //         const productsUpdate = await dao.updateAllPrice()
    //         return productsUpdate
    //     } catch (error) {
    //         console.error(error)
    //         return false
    //     }
    // }

    async deleteById(id) {
        try {
            return await dao.deleteById(id)
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

export { Service as LiquidService }