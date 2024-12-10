import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { CartContext } from '../context/CartContext';

const Header = ({ isHome, isCart, isNotification, isFavorite }) => {
    const navigation = useNavigation();
    const { cartItems } = useContext(CartContext);

    return (
        <View style={[styles.container, (isCart || isNotification || isFavorite) && styles.customHeader]}>
            <TouchableOpacity
                onPress={() => {
                    if (isCart || isNotification || isFavorite) {
                        navigation.goBack(); 
                    } else {
                        navigation.navigate('CART_SCREEN');
                    }
                }}
                style={styles.leftIcon}
            >
                {isCart || isNotification || isFavorite ? (
                    <MaterialIcons name={"arrow-back-ios"} color={"green"} size={25} />
                ) : (
                    <Foundation name={"shopping-cart"} color={"black"} size={35} />
                )}
                {!isNotification && !isCart && !isFavorite && cartItems.length > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cartItems.length}</Text>
                    </View>
                )}
            </TouchableOpacity>

            <View style={styles.centerContainer}>
                {isHome ? (
                    <Image source={require("../assets/logo.png")} style={styles.logo} />
                ) : isCart ? (
                    <Text style={styles.screenLabel}>MY CART</Text>
                ) : isNotification ? (
                    <Text style={styles.screenLabel}>NOTIFICATION</Text>
                ) : isFavorite ? (
                    <Text style={styles.screenLabel}>FAVORITES</Text>
                ) : null}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('USER_SCREEN')}>
                <Image source={require("../assets/user.png")} style={styles.user} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: "white", 
    },
    customHeader: {
        backgroundColor: "#f8f9fa", 
    },
    leftIcon: {
        //flex: 1,
    },
    centerContainer: {
        flex: 2, 
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 40,
        width: 80,
    },
    screenLabel: {
        fontSize: 18,
        fontWeight: "700",
        color: "black",
    },
    user: {
        height: 40,
        width: 40,
    },
    badge: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: "#E96E6E",
        top: -5,
        left: 20,
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "500",
    },
});
