import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();
export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        loadItemsOfCart();
    }, []);

    const loadItemsOfCart = async() => {
        let cartItems = await AsyncStorage.getItem("cartItems");
        cartItems = cartItems?JSON.parse(cartItems) : [];
        setCartItems(cartItems);
    }

    const addToCart = async (item) => {
        const itemExist = cartItems.findIndex((cart) => cart.id === item.id);
        if (itemExist===-1) {
            const newCartItems = [...cartItems, item];
            await AsyncStorage.setItem("cartItems", JSON.stringify
            (newCartItems));
            setCartItems(newCartItems);
        }
    };

    const deleteItemFromCart = async(item) => {
        const newItems = cartItems.filter((cart) => cart.id!==item.id);
        await AsyncStorage.setItem("cartItems",JSON.stringify(newItems));
        setCartItems(newItems); 
        totalAmount(newItems);
    };

    const value = {
        cartItems,
        addToCart,
        deleteItemFromCart
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};