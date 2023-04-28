import { Router } from "express";
import { liquidController } from "../controller/index.controller.js";
const router = Router()

router.get('/', liquidController.getAll)

router.get('/:id', liquidController.getById)

router.get('/category/:category', liquidController.getByCategory)

router.post("/", liquidController.create)

router.put("/:id", liquidController.update)

router.delete("/:id", liquidController.remove)

// router.put("/price/", liquidController.updatePrice)


export { router as liquidRouter }
