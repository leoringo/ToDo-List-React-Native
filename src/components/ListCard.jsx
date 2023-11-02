import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";

export default function ListCard({ list }) {
  return (
    <TouchableWithoutFeedback >
      <View style={styles.textContainer}>
        <Text>{list.title}</Text>
        <Text>Status: {list.status}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        margin: 20
    }
})