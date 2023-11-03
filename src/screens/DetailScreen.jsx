import { Text, View } from "react-native";

export default function DetailScreen({ route }) {
  const { id, title, description, status } = route.params;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{status}</Text>
    </View>
  );
}
