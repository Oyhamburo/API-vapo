import { DaoFactory } from "../models/factory.js"

const dao = DaoFactory.getCartDao()

let intance = null


class Service {

    static getInstance = () => {
        if (!intance)
            intance = new Service()
        return intance
    }


    async getCart(id) {
        try {
            const cart = await dao.getById(id)
            if (!cart) {
                const newCart = await dao.create(id)
                return newCart
            } else {
                return cart
            }
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async addProduct(id, idProduct) {
        try {
            const cart = await this.getCart(id)
            if (cart) {
                const add = await this.addProduct(id, idProduct)
                if (add)
                    return add
                else
                    return false
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            return false
        }
    }

    async removePruduct(id, idProduct) {
        try {
            const cart = await this.getCart(id)
            if (cart) {
                const remove = await this.removeProduct(id, idProduct)
                if (remove)
                    return remove
                else
                    return false
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            return false
        }
    }

    async remove(id) {
        try {
            return await dao.deleteById(id)
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

export { Service as CartService }