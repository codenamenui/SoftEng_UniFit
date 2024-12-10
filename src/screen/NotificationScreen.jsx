import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NotificationContext } from "../context/NotificationContext";
import Header from "../components/Header";
import NotificationCard from "../components/NotificationCard";

const NotificationScreen = () => {
    const { notifications, deleteNotification } = useContext(NotificationContext);

    return (
        <LinearGradient colors={["#E9EFEC", "#629584"]} style={styles.container}>
            <Header isNotification={true} />
            {notifications.length === 0 ? (
                <Text style={styles.text}>No notifications yet!</Text>
            ) : (
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <NotificationCard
                            notification={item}
                            onDelete={deleteNotification}
                        />
                    )}
                />
            )}
        </LinearGradient>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#444444',
        textAlign: 'center',
        marginTop: 20,
    },
});
