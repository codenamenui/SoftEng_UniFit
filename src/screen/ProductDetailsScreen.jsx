import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = () => {
    const { addToCart } = useContext(CartContext);
    const route = useRoute();
    const navigation = useNavigation();
    const item = route.params.item;

    const sizes = Object.keys(item).filter(key => ["XS", "S", "M", "L", "XL", "XXL"].includes(key));

    const [selectedSize, setSelectedSize] = useState(sizes[0] || ""); 
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
      const cartItem = {
          ...item,
          size: selectedSize,
          quantity: quantity,
          pricePerUnit: item[selectedSize], 
      };
      addToCart(cartItem);
      navigation.navigate("CART_SCREEN");
    };

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

       

    return (
        <LinearGradient 
            colors={['#E9EFEC', '#629584']} 
            style={styles.container}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.headerContainer}>
                    <Header />
                </View>

                <Image source={{ uri: item.image }} style={styles.coverImage} />

                <View style={styles.contentContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity 
                            style={styles.arButton}
                            onPress={() => navigation.navigate("AR_SCREEN")}
                        >
                            <AntDesign name="scan1" size={28} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.title, styles.stocks]}>{item.stocks}</Text>
                </View>

                <Text style={[styles.title, styles.sizeText]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {sizes.map(size => {
                        const isSelected = selectedSize === size;
                        return (
                            <TouchableOpacity 
                                key={size}  
                                style={[
                                    styles.sizeValueContainer,
                                    isSelected && { borderColor: "#FFFFFF" },
                                ]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text 
                                    style={[
                                        styles.sizeValue, 
                                        isSelected && { color: "#FFFFFF" },
                                    ]}
                                >
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <Text style={styles.description}>{item.description}</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}> - </Text>  
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}> + </Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.price}>Total: ₱{item[selectedSize] * quantity}</Text>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleAddToCart}
                >
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: "100%",
        height: 320,
    },
    contentContainer: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        color: "#444444",
        fontWeight: "700",
    },
    stocks: {
        fontSize: 17,
        color: "#4D4C4C",
        fontWeight: "500",
    },
    arButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CCCCCC",
        elevation: 3,  
    },
    sizeText: {
        marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        height: 40,
        width: 40,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",
    },
    description: {
        fontSize: 16,
        color: "#333333",
        marginHorizontal: 20,
        marginVertical: 10,
        lineHeight: 20,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        borderWidth: 2,
        borderColor: "#E4C087",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        width: 130,          
        alignSelf: "center",
    },
    quantityButton: {
        backgroundColor: "#E4C087",
        width: 28,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFFFFF",
    },
    quantityText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#333333",
        textAlign: "center",
        minWidth: 50,
    },
    price: {
        fontSize: 25,
        fontWeight: '600',
        color: '#4D4C4C',
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#E4C087",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "500",
        color: "white",
        textAlign: "center",
    },
});
