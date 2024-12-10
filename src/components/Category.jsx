import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
        <Text style={[
            styles.categoryText,  
            selectedCategory === item && {
              color:"#FFFFFF", 
              backgroundColor:"#E4C087",
            },
            ]}
        >
        {item}
        </Text>
    </TouchableOpacity>
  )
}

export default Category;

const styles = StyleSheet.create({
    categoryText: {
        marginTop: 20,
        fontSize: 16, 
        fontWeight: "600",
        color: "DFDCDC",
        backgroundColor: "#BCBAB8",
        textAlign: "center",
        borderRadius: 10,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }

})