import Product from "../Models/ProductModel.js";

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json({ message: "Product has been created successfully", product: newProduct });
    } catch (error) {
        next(error); 
    }
};

export const updateProduct = async (req, res, next) => {
    const { postId } = req.params
    try {
        const updateProduct = await Product.findByIdAndUpdate(postId, req.body, { new: true });
        res.status(200).json({ message: "Product has been updated successfully", product: updateProduct });
    } catch (error) {
        next(error); 
    }
};

export const DeleteProduct = async (req, res, next) => {
    const { postId } = req.params
    try {
        await Product.findByIdAndDelete(postId);
        res.status(200).json({ message: "Product has been deleted successfully" });
    } catch (error) {
        next(error); 
    }
};

export const getcategoryProducts = async (req, res, next) => {
    const { cat } = req.query;    
    try {
        const allproducts = await Product.find({ category: cat });
        res.status(200).json({ message: "Successfully retrieved products in the category", allproducts });
    } catch (error) {
        next(error); 
    }
};

export const getallProducts = async (req, res, next) => {    
    try {
        const allproducts = await Product.find();
        res.status(200).json({ message: "Successfully retrieved all products", allproducts });
    } catch (error) {
        next(error); 
    }
};

export const singleProduct = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const product = await Product.findById(postId);
        res.status(200).json({ message: "Success", product });
    } catch (error) {
        next(error); 
    }
};
