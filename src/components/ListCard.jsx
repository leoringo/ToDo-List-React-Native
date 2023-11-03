import { useNavigation } from "@react-navigation/native";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";

export default function ListCard({ list }) {
  const navigation = useNavigation();
  const detailActivity = () => {
    navigation.navigate("List", {
      screen: "Detail",
      params: {
        id: list.id,
        title: list.title,
        description: list.description,
        status: list.status,
      },
    });
  };
  return (
    <TouchableWithoutFeedback onPress={detailActivity}>
      <View style={styles.textContainer}>
        <Text>{list.title}</Text>
        <Text>Status: {list.status}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    height: 150,
    margin: 20,
  },
});
