import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { fetchList } from "../actions/actions";

export default function HomeScreen() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchList()
      .then((data) => setList(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#8b4513", flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo",
            }}
            style={styles.imageStyle}
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          {list.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
    marginBottom: 10, // NOTES
  },

  imageStyle: {
    width: "100%",
    height: 200, // NOTES
    resizeMode: "cover",
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  listItem: {
    marginBottom: 20, // NOTES
    padding: 10, // NOTES
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    fontSize: 14,
  },
});
