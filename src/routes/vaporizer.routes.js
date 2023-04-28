import { Router } from "express";
import { vaporizerController } from "../controller/index.controller.js";
const router = Router()

router.get('/', vaporizerController.getAll)

router.get('/:id', vaporizerController.getById)

router.get('/category/:category', vaporizerController.getByCategory)

router.post("/", vaporizerController.create)

router.put("/:id", vaporizerController.update)

router.delete("/:id", vaporizerController.remove)

// router.put("/price/", vaporizerController.updatePrice)


export { router as vaporizerRouter }
