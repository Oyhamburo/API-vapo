import { db as database } from "../../config/config.db.js"

class CRUD {

    constructor(bd) {
        this.bd = bd
    }

    create = async object => {
        try {
            let res = await database(this.bd).insert(object)
            return res
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        try {
            let res = await database.from(this.bd).select('*')
            return res
        } catch (error) {
            console.error(error);
            throw Error("Error en el getAll");
        }
    }

    async getById(num) {
        try {
            let res = await database.from(this.bd).select('*').where('id', '=', num)
            return res
        } catch (error) {
            console.error(error);
            throw Error("Error en el getById");
        }
    }

    async getByCategory(category,column) {
        try {
            let res = await database.from(this.bd).select('*').where(column, '=', category)
            return res
        } catch (error) {
            console.error(error);
            throw Error("Error en el getById");
        }
    }

    async delete(num) {
        try {
            let res = await database.from(this.bd).where('id', num).del()
            return res
        } catch (error) {
            console.error(error);
            throw Error("Error en el deleteById");
        }
    }

    async update(object, id) {
        try {
            let res = await database.from(this.bd).where('id', id).update(object)
            return res
        } catch (error) {
            console.error(error);
            throw Error("Error en el update");
        }
    }

}

export { CRUD as CRUDmySQL }