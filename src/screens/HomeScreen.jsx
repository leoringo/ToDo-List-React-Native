import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { fetchList } from "../storage/actions";
import ListCard from "../components/ListCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/actionType";

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
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo",
          }}
          style={styles.imageStyle}
        />
        <ScrollView style={styles.scrollContainer}>
          {list.map((list) => (
            <ListCard list={list} key={list.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "20%",
  },

  scrollContainer: {
    backgroundColor: "#dce775",
    paddingTop: 20,
  },
});
