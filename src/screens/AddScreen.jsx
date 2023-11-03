import { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/actionType";

export default function AddScreen() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => {
    return state.category;
  });

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [input, setInput] = useState({
    id: Math.floor(Math.random() * 1000 + 1000),
    title: "",
    description: "",
    status: "",
  });

  const handlePickerSelect = (value) => {
    setInput({ ...input, status: value });

    setDropdownVisible(false);
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput({ ...input, title: text })}
        value={input.title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput({ ...input, description: text })}
        value={input.description}
        placeholder="Description"
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setDropdownVisible(!isDropdownVisible)}
      >
        <View style={styles.dropdownButton}>
          <Text>{input.status || "Select Status"}</Text>
        </View>
      </TouchableOpacity>

      {/* Conditionally render the Picker based on isDropdownVisible */}
      {isDropdownVisible && (
        <Picker
          mode="dropdown"
          onValueChange={handlePickerSelect}
          selectedValue={input.status}
          style= {{width: '75%',}}
        >
          {categories.map((el, index) => (
            <Picker.Item label={el.status} value={el.status} key={index} />
          ))}
        </Picker>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%'
  },
});
