import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item, toggleLike }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PRODUCT_DETAILS", { item });
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.displayImage1} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.stocks}>{item.stocks}</Text>
      </View>
      <View style={styles.heartContainer}>
        <TouchableOpacity onPress={() => toggleLike(item)}>
          {item.isLiked ? (
            <Octicons name={"heart-fill"} size={20} color={"red"} />
          ) : (
            <Octicons name={"heart"} size={20} color={"red"} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  displayImage1: {
    height: 256,
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "600",
  },
  stocks: {
    fontSize: 18,
    color: "#54473F",
    fontWeight: "600",
  },
  content: {
    paddingLeft: 22,
  },
  heartContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    bottom: 10,
    right: 20,
  },
});
