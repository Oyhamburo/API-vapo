import { LiquidService } from "../services/index.service.js";

const service = LiquidService.getInstance();

const controller = {}

controller.getAll = async (req, res) => {
    const products = await service.getAll()
    products
        ? res.status(200).json(products)
        : res.status(400).json({ "error": "there was a problem when trying to get the products" })
}

controller.getByCategory = async (req, res) => {
    const { category } = req.params
    const vaporizers = await service.getByCategory(category)
    vaporizers
        ? res.status(200).json(vaporizers)
        : res.status(400).json({ "error": "there was a problem when trying to get the products" })
}

controller.getById = async (req, res) => {
    const { id } = req.params
    const productId = await service.getById(id)
    productId
        ? res.status(200).json(productId)
        : res.status(400).json({ "error": "product not found" })
}

controller.create = async (req, res) => {
    const { body } = req
    const newProduct = await service.create(body);

    newProduct
        ? res.status(200).json({ "success": "Product created" })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.update = async (req, res) => {
    const { id } = req.params
    const { body } = req
    const productUpdated = await service.updateById(id, body)

    productUpdated
        ? res.status(200).json({ "success": "Product updated" })
        : res.status(404).json({ "error": "Product not found or invalid body content." })
}

// controller.update = async (req, res) => {
//     const productsUpdated = await service.updateAllPrice()

//     productsUpdated
//         ? res.status(200).json({ "success": "Product updated" })
//         : res.status(404).json({ "error": "Product not found or invalid body content." })
// }

controller.remove = async (req, res) => {
    const { id } = req.params
    const productDeleted = await service.deleteById(id)

    productDeleted
        ? res.status(200).json({ "success": "Product successfully removed" })
        : res.status(404).json({ "error": "Product not found" })
}


export { controller as liquidController }