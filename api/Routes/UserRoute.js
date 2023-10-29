import express from 'express'
import { UpdateUser, addUserCartProducts, addUserFavProducts, removeUserCartProducts, removeUserFavProducts } from '../Controllers/UserController.js';
import { VerifyToken, VerifyUser } from '../Utils/verifyToken.js';


const router = express.Router();
router.use(VerifyToken)
router.put("/updateuser/:userId", UpdateUser)
router.post("/addUserCartProducts/:userId", addUserCartProducts)
router.post("/removeUserCartProducts/:userId", removeUserCartProducts)
router.post("/addUserfavProducts/:userId", addUserFavProducts)
router.post("/removeUserfavProducts/:userId", removeUserFavProducts)




export default router