import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartCard = ({ item, onRemove, deleteItemFromCart }) => {
    const { image, title, size, quantity, pricePerUnit } = item; // Destructure the required properties

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.coverImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>Price: ₱{pricePerUnit}</Text> {/* Only show unit price */}
                <View style={styles.sizeContainer}>
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </View>
                    <Text style={styles.quantityText}> x{quantity}</Text> {/* Show quantity next to size */}
                </View>
            </View>  
            <TouchableOpacity onPress={() => {deleteItemFromCart(item)} /**onRemove**/}>
                <Ionicons name={"trash-sharp"} color={"green"} size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10, 
        flexDirection: "row",
    },
    coverImage: {
        height: 125,
        width: "25%",
        borderRadius: 20,
    },
    cardContent: {
       flex: 1,
       marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "500",
    },
    price: {
        color: "#797979",
        marginVertical: 10,
        fontSize: 16,
    },
    sizeContainer: {
        flexDirection: "row",
    },
    sizeCircle: {
        backgroundColor: "#cccccc",
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    sizeText: {
        fontSize: 15,
        fontWeight: "500",
    },
    quantityText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#797979",
        marginLeft: 10,
    },
});
