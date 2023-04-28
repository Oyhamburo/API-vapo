import { Router } from "express";
import { cartController } from "../controller/index.controller.js";
const router = Router()

// Traer el carrito tomando el id de session
router.get('/', cartController.getCart)

// router.get('/:id', cartController.getById)
router.put("/:id", cartController.addProduct)

// elimino un item
router.put("/:id", cartController.removePruduct)

// vaciar el carrito
router.delete("/:id", cartController.remove)


export { router as cartRouter }