import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        loadFavoriteItems();
    }, []);

    const loadFavoriteItems = async () => {
        let storedFavorites = await AsyncStorage.getItem("favoriteItems");
        storedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        setFavoriteItems(storedFavorites);
    };

    const addToFavorites = async (item) => {
        const itemExists = favoriteItems.findIndex((fav) => fav.id === item.id);
        if (itemExists === -1) {
            const updatedFavorites = [...favoriteItems, item];
            await AsyncStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
            setFavoriteItems(updatedFavorites);
        }
    };

    const removeFromFavorites = async (item) => {
        const updatedFavorites = favoriteItems.filter((fav) => fav.id !== item.id);
        await AsyncStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
        setFavoriteItems(updatedFavorites);
    };

    const value = {
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
    };

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};
