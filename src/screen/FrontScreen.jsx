import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const FrontScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  const handleAR = () => {
    navigation.navigate("AR");
  };

  return (
    <LinearGradient colors={["#E9EFEC", "#629584"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.phrase}>
        Hassle-Free Shopping for Your Uniform, We've Got What You Need.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: "black" }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleAR}>
          <Text style={styles.ARtext}>AR</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 120,
  },
  logo: {
    height: 150,
    width: 270,
    marginVertical: 30,
  },
  phrase: {
    fontSize: 20,
    color: "#333333",
    marginVertical: 20,
    paddingHorizontal: 20,
    marginTop: 230,
    textAlign: "center",
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    width: "75%",
    justifyContent: "center",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: "600",
  },
  ARtext: {
    margin: 10,
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
  },
});
