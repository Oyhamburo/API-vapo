import { Router } from "express";
import { userController } from "../controller/index.controller.js";
const router = Router()


// router.get('/', userController.getUser);

// {
//     "name": "Jeremias",
//     "password": "jeremias",
//     "lastName":"Oyhamburo",
//     "email":"jere@mail.com"
//   }

router.get('/', userController.isLogin);

// me quiero logear
router.post('/signin', userController.signIn);

// me quiero registrar
router.post('/signup', userController.signUp);

router.get('/logout', userController.logOutView);

export { router as userRouter }
