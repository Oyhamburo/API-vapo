import { ContenedorMongoDB } from "../container/index.container.js";
import { liquidSchema } from "../schemas/index.schema.js"

class DAO extends ContenedorMongoDB {

    constructor() {
        super('liquids',liquidSchema)
    }

}

export { DAO as LiquidDAO }
