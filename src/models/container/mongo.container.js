import mongoose from "mongoose";
import { asPOJO, removeField, renameField } from "../../helpers/index.helpers.js"

class ContenedorMongoDB {

    USERNAME_FIELD = 'username';
    CODE = 'code'

    constructor(name, esquema) {
        this.coleccion = mongoose.model(name, esquema);
    }

    async getAll() {
        try {
            let docs = await this.coleccion.find({})
            docs = docs.map(asPOJO)
            docs = docs.map((d) => renameField(d, "_id", "id"))
            return docs;
        } catch (error) {
            console.error(error);
            throw Error("Error en el getAll");
        }
    }

    async getById(num) {
        try {
            let docs = await this.coleccion.findOne({ _id: num });
            if (docs) {
                let res = renameField(asPOJO(docs), "_id", "id");
                return res
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            throw Error("Error en el getById");
        }
    }

    async create(nuevoElem) {
        try {
            let doc = await this.coleccion.create(nuevoElem);
            doc = asPOJO(doc)
            renameField(doc, "_id", "id")
            removeField(doc, "__v")
            return doc
        } catch (error) {
            console.error(error);
            throw Error("Error en el save");
        }
    }

    async deleteById(num) {
        try {
            const item = await this.coleccion.findOneAndDelete({ _id: num });
            if (item) {
                return item;
            } else {
                return { err: "Error en item, id no encontrado" };
            }
        } catch (error) {
            console.error(error);
            throw Error("Error en el deleteById");
        }
    }

    async getByCategory(category) {
        try {
            let products = await this.coleccion.find({ category: category });
            if (products) {
                products = products.map(asPOJO)
                products = products.map((d) => renameField(d, "_id", "id"))
                return products
            } else {
                return { err: "Error en item, categoria no encontrada" };
            }
        } catch (error) {
            console.error(error);
            throw Error("Error en el deleteById");
        }
    }

    async deleteAll() {
        try {
            await this.coleccion.deleteMany({});
            return { msg: "Todos los productos borrados" };
        } catch (error) {
            console.error(error);
            throw Error("Error en el deleteAll()");
        }
    }

    async updateById(id, object) {
        try {
            const actualizada = await this.coleccion.findOneAndUpdate(
                {
                    ["_id"]: id
                },
                object,
                {
                    runValidators: true
                })
            return actualizada
        } catch (error) {
            console.error(error);
            throw Error("Error en el update");
        }
    }

}

export { ContenedorMongoDB }