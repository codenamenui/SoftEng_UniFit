import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroScene,
  ViroSceneNavigator,
  ViroText,
} from "@reactvision/react-viro";

const initialScene = () => {
  <ViroARScene>
    <ViroText text="Hello World" />
  </ViroARScene>;
};

const ARScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AR Feature Try On</Text>
      <ViroARSceneNavigator initialScene={{ scene: initialScene }} />
    </View>
  );
};

export default ARScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9EFEC",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#444444",
  },
});
