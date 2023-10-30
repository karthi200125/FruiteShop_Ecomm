import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
    totalAmount: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {            
            const productIdToRemove = action.payload;            
            state.cart = state.cart.filter((item) => item._id !== productIdToRemove);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
        },
    },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
