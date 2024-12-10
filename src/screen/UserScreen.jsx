import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const UserScreen = () => {
  return (
    <LinearGradient colors={['#E9EFEC', '#629584']} style={styles.container}> 
      <Text>UserScreen</Text>
    </LinearGradient>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
})