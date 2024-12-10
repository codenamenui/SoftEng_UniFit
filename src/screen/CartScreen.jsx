import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { CartContext } from '../context/CartContext';
import { NotificationContext } from "../context/NotificationContext";

const CartScreen = () => {
    const { cartItems, deleteItemFromCart } = useContext(CartContext);
    const { addNotification } = useContext(NotificationContext);

    const totalAmount = cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);

    const handleCheckout = () => {
        const orderNumber = Math.floor(100000 + Math.random() * 900000); 
    
        cartItems.forEach((item) => {
            addNotification({
                id: Date.now() + Math.random(), 
                
                message: `Order  #${orderNumber} is ready for pickup within one week. Total Payment: ₱${(item.pricePerUnit * item.quantity).toFixed(2)}.`,
                image: item.image,
            });
        });
    
        
        cartItems.forEach(deleteItemFromCart);
        alert("Check out successful!");
    };
    
    return (
        <LinearGradient colors={['#E9EFEC', '#629584']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true}/>
            </View>
        
            <FlatList 
                data={cartItems} 
                ListHeaderComponent={<></>} 
                renderItem={({ item }) => <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />}
                ListFooterComponent={
                    <>
                    <View style={styles.divider}/>
                    <View style={styles.priceContainer}> 
                        <View style={styles.titlePrice}>
                            <Text style={styles.text}>Total Amount: </Text>
                            <Text style={[styles.text, 
                            {color: "black", fontWeight: "700"}]}>₱{totalAmount.toFixed(2)}</Text>
                        </View>
                    </View>
                    </>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            />

            <TouchableOpacity style={styles.checkOutContainer} onPress={handleCheckout}>
                <Text style={styles.buttonText}>CHECK OUT</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 20,  
    },
    container: {
        flex: 1,
        padding: 15,
    },
    priceContainer: {
        marginTop: 5,
    },
    titlePrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    }, 
    divider: {
        borderWidth: 1,
        borderColor: "#black",
        marginVertical: 20,
    },
    text: {
        color: "black",
        fontSize: 18,
    },
    checkOutContainer: {
        backgroundColor: "#E4C087", 
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: "black",
        textAlign: "center",
        padding: 5,
        fontWeight: "500",
    },
});