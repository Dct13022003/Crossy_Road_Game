import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import GameContext from "../context/GameContext";
import Characters from "../Characters";

export default function CharacterPicker(props) {
  const { setCharacter, character } = React.useContext(GameContext);

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderStart={(e) => {
        e.stopPropagation?.(); // chặn sự kiện lan ra ngoài
      }}
    >
      <Picker
        selectedValue={character}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setCharacter(itemValue);
        }}
      >
        {Object.keys(Characters).map((id) => (
          <Picker.Item
            key={id}
            label={Characters[id].name}
            value={Characters[id].id}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 48,
    minWidth: 100,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#75C5F4",
    color: "white",
    fontFamily: "retro",
  },
});
