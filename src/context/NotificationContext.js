import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async () => {
        const storedNotifications = await AsyncStorage.getItem("notifications");
        setNotifications(storedNotifications ? JSON.parse(storedNotifications) : []);
    };

    const addNotification = async (notification) => {
        const updatedNotifications = [...notifications, notification];
        setNotifications(updatedNotifications);
        await AsyncStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    };

    const deleteNotification = async (id) => {
        const updatedNotifications = notifications.filter((notif) => notif.id !== id);
        setNotifications(updatedNotifications);
        await AsyncStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    };

    const value = {
        notifications,
        addNotification,
        deleteNotification,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};
