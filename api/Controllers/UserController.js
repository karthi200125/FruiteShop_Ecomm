import User from '../Models/UserModel.js';
import { createError } from '../Utils/errMidelware.js';

export const UpdateUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const { username, phoneNo, profilePic, street, city, state, zipCode } = req.body;
        const user = await User.findByIdAndUpdate(userId, {
            $set: { username, phoneNo, profilePic, address: { street, city, state, zipCode } }
        }, { new: true });
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        next(error); 
    }
};

export const addUserCartProducts = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        user.cartProducts.push(req.body);
        await user.save();
        res.status(200).json(`Cart product successfully added to ${user.username}`);
    } catch (error) {
        next(error); 
    }
};

export const removeUserCartProducts = async (req, res, next) => {
    const { userId } = req.params;
    const { productId } = req.body;    
    try {
        const user = await User.findById(userId);
        const productIndex = user.cartProducts.findIndex(product => product._id === productId);
        if (productIndex !== -1) {
            user.cartProducts.splice(productIndex, 1);
            await user.save();
            res.status(200).json(`Product successfully removed from ${user.username}'s cart`);
        } else {
            next(createError(401,`Product with ID ${productId} not found in ${user.username}'s cart`))
        }
    } catch (error) {
        next(error); 
    }
};

export const addUserFavProducts = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        user.favProducts.push(req.body);
        await user.save();
        res.status(200).json(`Wishlist product successfully added to ${user.username}`);
    } catch (error) {
        next(error); 
    }
};

export const removeUserFavProducts = async (req, res, next) => {
    const { userId } = req.params;
    const { productId } = req.body;    
    try {
        const user = await User.findById(userId);
        const productIndex = user.favProducts.findIndex(product => product._id === productId);
        if (productIndex !== -1) {
            user.favProducts.splice(productIndex, 1);
            await user.save();
            res.status(200).json(`Product successfully removed from ${user.username}'s wishlist`);
        } else {
            next(createError(404,`Product with ID ${productId} not found in ${user.username}'s wishlist`))
        }
    } catch (error) {
        next(error); 
    }
};
