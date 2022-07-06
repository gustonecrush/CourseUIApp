import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CATEGORIES = [
  {
    id: 1,
    name: "Coding",
    icon: require("../../assets/icons/categories/coding.png"),
  },
  {
    id: 2,
    name: "Design",
    icon: require("../../assets/icons/categories/design.png"),
  },
  {
    id: 3,
    name: "Marketing",
    icon: require("../../assets/icons/categories/marketing.png"),
  },
  {
    id: 4,
    name: "Business",
    icon: require("../../assets/icons/categories/business.png"),
  },
  {
    id: 5,
    name: "Lifestyle",
    icon: require("../../assets/icons/categories/lifestyle.png"),
  },
  {
    id: 6,
    name: "Music",
    icon: require("../../assets/icons/categories/music.png"),
  },
  {
    id: 7,
    name: "Academics",
    icon: require("../../assets/icons/categories/academics.png"),
  },
  {
    id: 8,
    name: "More",
    icon: require("../../assets/icons/categories/more.png"),
  },
];

const Categories = () => {
  const Icon = ({ item }) => {
    return (
      <View
        style={[
          styles.iconWrapper,
          item.id % 4 === 0 ? { marginRight: 0 } : { marginRight: 25 },
          item.id > 4 ? { marginTop: 40 } : { marginTop: 0 },
        ]}
      >
        <TouchableOpacity
          style={{
            padding: 14,
            backgroundColor: "#F6FBFA",
            borderRadius: 12,
            marginRight: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={item.icon} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.iconName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {CATEGORIES.map((item, index) => (
        <Icon item={item} key={index} />
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 21,
    height: 21,
    resizeMode: "contain",
  },
  iconName: {
    fontFamily: "Poppins-Regular",
    color: "#697B7A",
    fontSize: 12,
    marginTop: 10,
  },
});
