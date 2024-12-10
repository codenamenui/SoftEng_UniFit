import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FavoriteCard = ({ item, removeFromFavorites }) => {
  const navigation = useNavigation();

  const handleViewDetails = () => {
    navigation.navigate("MAIN_APP", {
      screen: "HOME_STACK",
      params: {
        screen: "PRODUCT_DETAILS",
        params: { item },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.detailsButton} onPress={handleViewDetails}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeFromFavorites(item)}>
        <Ionicons name={"trash-sharp"} color={"green"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteCard;


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
  detailsButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#629584",
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});
