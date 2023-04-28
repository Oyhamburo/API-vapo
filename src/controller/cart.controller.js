import { CartService } from "../services/index.service.js";

const service = CartService.getInstance();

const controller = {}

controller.getCart = async (req, res) => {
    const { idUser } = req.session
    const cart = await service.getCart(idUser)
    cart
        ? res.status(200).json(cart)
        : res.status(400).json({ "error": "product not found" })
}

controller.addProduct = async (req, res) => {
    const { id } = req.params
    const cartUpdated = await service.addProduct(id)

    cartUpdated
        ? res.status(200).json({ "success": "Product added" })
        : res.status(404).json({ "error": "Cart not found or invalid body content." })
}


controller.removePruduct = async (req, res) => {
    const { id } = req.params
    const cartUpdated = await service.removePruduct(id)

    cartUpdated
        ? res.status(200).json({ "success": "Product remove" })
        : res.status(404).json({ "error": "Cart not found or invalid body content." })
}

controller.remove = async (req, res) => {
    const { id } = req.params
    const productDeleted = await service.remove(id)

    productDeleted
        ? res.status(200).json({ "success": "Cart successfully removed" })
        : res.status(404).json({ "error": "Cart not found" })
}


export { controller as productController }