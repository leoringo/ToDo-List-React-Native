import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";

const height = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: height * 0.1,
        },
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={HomeStack}
        // options={{
        //   tabBarButton: () => null,
        // }}
      />
      <Tab.Screen name="Add" component={AddStack} />
    </Tab.Navigator>
  );
}
