import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={item.icon} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#697B7A" />
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginBottom: 20,
  },
  iconWrapper: {
    backgroundColor: "#F6FBFA",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: "contain",
  },
  name: {
    color: "#092724",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginLeft: 15,
  },
});
