import React, { useState, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from "../data/data.json";
import { FavoriteContext } from "../context/FavoriteContext";

const categories = ['All', 'Uniform', 'P.E.', 'NSTP'];

const HomeScreen = () => {
  const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
  const [products, setProducts] = useState(data.products);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(data.products);
    } else if (selectedCategory === 'Uniform') {
      setProducts(
        data.products.filter(product =>
          ['blouse', 'polo', 'slacks (green)', 'slacks (black)'].includes(product.title.toLowerCase())
        )
      );
    } else if (selectedCategory === 'P.E.') {
      setProducts(
        data.products.filter(product =>
          [
            'p.e. t-shirt',
            'p.e. short',
            'cspear t-shirt',
            'cspear short',
            'cspear jogging pants',
          ].includes(product.title.toLowerCase())
        )
      );
    } else if (selectedCategory === 'NSTP') {
      setProducts(
        data.products.filter(product =>
          product.title.toLowerCase() === 'nstp t-shirt'
        )
      );
    }
  }, [selectedCategory]);

  
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, products]);

  const toggleLike = (item) => {
    const updatedProducts = products.map((prod) =>
      prod.id === item.id ? { ...prod, isLiked: !prod.isLiked } : prod
    );
    setProducts(updatedProducts);

    if (item.isLiked) {
      removeFromFavorites(item);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <LinearGradient colors={['#E9EFEC', '#629584']} style={styles.container}>
      <Header isHome={true} />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <View style={styles.searchContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name={"search"} size={20} color={"black"} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Search"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)} 
              />
            </View>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={filteredProducts} 
        renderItem={({ item }) => (
          <ProductCard item={item} toggleLike={toggleLike} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    marginTop: 15,
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
  },
});
