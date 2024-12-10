import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    navigation.navigate("LOGIN")
  };
  const handleSignin = () => {
    navigation.navigate("LOGIN")
  };

  return (
    <LinearGradient colors={['#E9EFEC', '#629584']} style={styles.container}>
      {/* <View style={styles.topImageContainer}>
        <Image source={require("../assets/greenDrops.png")} style={styles.topImage} />
      </View> */}
      <Image source={require("../assets/greenDrops.png")} style={styles.topImage} />

      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <MaterialIcons 
          name={"arrow-back-ios"} 
          color={"white"}
          size={25}
        />
      </TouchableOpacity> 
        <View style={styles.textContainer}>
          {/* <Text style={styles.textHeader1}>Ready to Shop?</Text> */}
          <Text style={styles.textHeader}>Ready to Shop?</Text>
          <Text style={styles.textHeader}>Lets Get Started!</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-open-outline"} size={30} color={"gray"} />
            <TextInput 
              style={styles.textInput} 
              placeholder="Enter your Email"
              placeholderTextColor={"#838280"}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name={"mobile-phone"} size={30} color={"gray"} />
            <TextInput 
              style={styles.textInput} 
              placeholder="Enter your phone number"
              placeholderTextColor={"#838280"}
              secureTextEntry={secureEntery}
              keyboardType="number-pad"
            />
           
          </View>

          <View style={styles.inputContainer}>
            <Fontisto name={"locked"} size={30} color={"gray"} />
            <TextInput 
              style={styles.textInput} 
              placeholder="Enter your Password"
              placeholderTextColor={"#838280"}
              secureTextEntry={secureEntery}
            />
            <TouchableOpacity 
            onPress={() => {
              setSecureEntery((prev) => !prev);
            }}
            >
              <Entypo name={"eye"} size={30} color={"gray"} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.loginButtonWrapper}
            onPress={handleSignin}
          >
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
            <Text style={styles.continueText}>or continue with</Text>

          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image source={require("../assets/ggl.png")} style={styles.googleImage}/>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.accountText}>Already have an account?</Text>
              
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.signupText}>Login</Text>  
              </TouchableOpacity>
              
            </View>
        </View>
      {/* <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View> */}
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  topImageContainer: {},
  topImage: {
    width: '112%',
    height: 130,
    position: 'absolute', 
    top: 0,
    left: 0,
  },
  // logoContainer: {
  //   alignItems: 'center', 
  //   marginTop: 20, 
  // },
  // logo: {
  //   height: 80,
  //   width: 160,
  // },
  backButtonWrapper: {
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 10,
    //marginTop: 10,
  },
  textContainer: {
    //marginVertical: 2,
    marginTop: 40
  },
  // textHeader1: {
  //   fontSize: 32,
  //   color: "white",
  //   fontWeight: "700",
  // },
  textHeader: {
    fontSize: 32,
    color: "gray",
    fontWeight: "700",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: "400",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "black",
    fontWeight:"400",
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: "black",
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    fontWeight: "400",
    color: "#444444",

  },
  googleButtonContainer: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 10
  },
  googleImage: {
    height: 30,
    width: 30,
  },
  googleText: {
    fonts: 20,
    //color: "black",
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: "black",
    fontWeight: 600,    
  },
  signupText: {
    color: "black",
    fontWeight: "800",

  },


});
