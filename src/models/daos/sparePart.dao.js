import { ContenedorMongoDB } from "../container/index.container.js";
import { sparePartSchema } from "../schemas/index.schema.js"

class DAO extends ContenedorMongoDB {

    constructor() {
        super('spare-part',sparePartSchema)
    }

}

export { DAO as SparePartDAO }
