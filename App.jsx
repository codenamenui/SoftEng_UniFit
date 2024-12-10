import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import ARScreen from './src/screen/ARScreen';
import UserScreen from './src/screen/UserScreen';
import CartScreen from './src/screen/CartScreen';
import { CartProvider } from "./src/context/CartContext";
import NotificationScreen from "./src/screen/NotificationScreen";
import FavoriteScreen from "./src/screen/FavoriteScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/SignupScreen";
import FrontScreen from "./src/screen/FrontScreen";
import { NotificationProvider } from "./src/context/NotificationContext";
import { FavoriteProvider } from "./src/context/FavoriteContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function Home() {
//   return(
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }
// function Favorite() {
//   return(
//     <View>
//       <Text>Favorite</Text>
//     </View>
//   );
// }
// function Notifcation() {
//   return(
//     <View>
//       <Text>Notification</Text>
//     </View>
//   );
// }

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} 
      //initialRouteName="PRODUCT_DETAILS"
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="USER_SCREEN" component={UserScreen}/>
      <Stack.Screen name="CART_SCREEN" component={CartScreen}/>
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      <Stack.Screen name="AR_SCREEN" component={ARScreen} options={{ title: 'AR Try On' }} />
      <Stack.Screen name="FAVORITE_SCREEN" component={FavoriteScreen} />

      {/* <Stack.Screen name="FAVORITE_SCREEN" component={FavoriteScreen} />  */}
      {/* <Stack.Screen name="NOTIFICATION" component={NotificationScreen} /> */}
      {/* <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} /> */}


    </Stack.Navigator>
  );
}; 


const App = () => {
  return (
    <CartProvider>
      <FavoriteProvider>
        <NotificationProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="FRONT"
              screenOptions={{ headerShown: false }}
            >
              {/* Login/Signup screens */}
              <Stack.Screen name="FRONT" component={FrontScreen}/>
              <Stack.Screen name="LOGIN" component={LoginScreen} />
              <Stack.Screen name="SIGNUP" component={SignupScreen} />

              {/* Main App after login */}
              <Stack.Screen name="MAIN_APP" component={MainTabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </NotificationProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="HOME_STACK"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <FontAwesome5 name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FAVORITE"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={"heart-multiple"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NOTIFICATION"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"notifications-sharp"} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

  

// return (
//     <CartProvider>
//       <NavigationContainer>

//         <Tab.Navigator 
//           screenOptions={{
//             headerShown: false,
//             tabBarShowLabel: false,
//             tabBarInactiveTintColor: "green",
//         }}
//           //initialRouteName="CART"
//         >
//           {/* <Stack.Screen name="LOGIN" component={LoginScreen} />
//           <Stack.Screen name="SIGNUP" component={SignupScreen} /> */}

//           <Tab.Screen name="HOME_STACK" component={MyHomeStack} options={{
//             tabBarIcon: ({size, focused, color})=>{
//               return <FontAwesome5 name={"home"} size={size} color={color}/>;
//             },
//           }}/>

//           <Tab.Screen name="FAVORITE" component={FavoriteScreen} options={{
//             tabBarIcon:({size, color})=> (
//               <MaterialCommunityIcons name={"heart-multiple"} size={size} color={color}/>
//             ),
//           }}/>
  
//           <Tab.Screen name="NOTIFICATION" component={NotificationScreen} options={{
//             tabBarIcon:({size, color})=> (
//               <Ionicons name={"notifications-sharp"} size={size} color={color}/>
//             ),
//           }}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// };

export default App;
