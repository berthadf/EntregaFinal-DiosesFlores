import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: newCart[existingProductIndex].quantity + quantity,
                };
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (product, quantity) => {
        setCart((prevCart) => {
            return prevCart.reduce((acc, item) => {
                if (item.id === product.id) {
                    const newQuantity = item.quantity - quantity;
                    if (newQuantity > 0) {
                        acc.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, []);
        });
    };

    const deleteFromCart = (product) => {
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== product.id);
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart, getTotalPrice }}>{children}</CartContext.Provider>;
};