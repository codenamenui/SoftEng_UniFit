import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const NotificationCard = ({ notification, onDelete }) => {
    return (
        <View style={styles.card}>
            {notification.image && <Image source={{ uri: notification.image }} style={styles.image} />}
            <View style={styles.textContainer}>
              
                <Text style={styles.title}>Your Pre-Order is Completed.</Text>
               
                <Text style={styles.message}>{notification.message}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(notification.id)}>
                <AntDesign name="delete" size={20} color="red" />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold", 
    },
    message: {
        fontSize: 14,
        color: "#333",
    },
});
