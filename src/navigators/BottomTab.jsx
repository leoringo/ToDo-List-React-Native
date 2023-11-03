import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import AddScreen from "../screens/AddScreen";
import StackNavigation from "./StackNavigation";

const height = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="List" component={StackNavigation} />
      <Tab.Screen name="Add" component={AddScreen} />
    </Tab.Navigator>
  );
}
