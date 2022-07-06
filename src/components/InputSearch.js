import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/inputSearch/search.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search your course..."
        />
      </View>

      <Image
        style={styles.icon}
        source={require("../../assets/icons/inputSearch/filter.png")}
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#F4F4F4",
    borderWidth: 1,
    marginHorizontal: 25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  searchWrapper: {
    flexDirection: "row",
  },
  textInput: {
    marginLeft: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: '#697B7A',
  },
});
