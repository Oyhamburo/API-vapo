import { Router } from "express";
import { sparePartsController } from "../controller/index.controller.js";
const router = Router()

router.get('/', sparePartsController.getAll)

router.get('/:id', sparePartsController.getById)

router.get('/category/:category', sparePartsController.getByCategory)

router.post("/", sparePartsController.create)

router.put("/:id", sparePartsController.update)

router.delete("/:id", sparePartsController.remove)

// router.put("/price/", sparePartsController.updatePrice)


export { router as sparePartsRouter }
