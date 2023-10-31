import express from 'express';
import { DeleteProduct, createProduct, getallProducts, getcategoryProducts, singleProduct, updateProduct } from '../Controllers/ProductController.js';

const router = express.Router();
router.get("/getallProducts", getallProducts)
router.post("/createproduct/:userId", createProduct)
router.put("/updateproduct/:postId", updateProduct)
router.delete("/deleteproduct/:postId", DeleteProduct)
router.get("/getcategoryproducts", getcategoryProducts)
router.get("/singleproduct/:postId", singleProduct)

export default router