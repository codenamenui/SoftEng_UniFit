import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FavoriteContext } from '../context/FavoriteContext';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';

const FavoriteScreen = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <LinearGradient colors={['#E9EFEC', '#629584']} style={styles.container}>
      <Header isFavorite={true} />
      {favoriteItems.length === 0 ? (
        <Text style={styles.text}>No favorites added yet!</Text>
      ) : (
        <FlatList
          data={favoriteItems}
          renderItem={({ item }) => (
            <FavoriteCard item={item} removeFromFavorites={removeFromFavorites} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444444',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoriteScreen;
