import { ContenedorMongoDB } from "../container/index.container.js";
import { vaporizerSchema } from "../schemas/index.schema.js"

class DAO extends ContenedorMongoDB {

    constructor() {
        super('vaporizer', vaporizerSchema)
    }

}

export { DAO as VaporizerDAO }
