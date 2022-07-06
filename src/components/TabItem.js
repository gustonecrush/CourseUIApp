import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Home")
      return isFocused ? (
        <Image
          source={require("../../assets/icons/navbar/home-active.png")}
          style={styles.icon}
        />
      ) : (
        <Image
          source={require("../../assets/icons/navbar/home.png")}
          style={styles.icon}
        />
      );
    if (label === "Courses")
      return isFocused ? (
        <Image
          source={require("../../assets/icons/navbar/course-active.png")}
          style={styles.icon}
        />
      ) : (
        <Image
          source={require("../../assets/icons/navbar/course.png")}
          style={styles.icon}
        />
      );
    if (label === "Liked")
      return isFocused ? (
        <Image
          source={require("../../assets/icons/navbar/liked-active.png")}
          style={styles.icon}
        />
      ) : (
        <Image
          source={require("../../assets/icons/navbar/liked.png")}
          style={styles.icon}
        />
      );
    if (label === "Profile")
      return isFocused ? (
        <Image
          source={require("../../assets/icons/navbar/profile-active.png")}
          style={styles.icon}
        />
      ) : (
        <Image
          source={require("../../assets/icons/navbar/profile.png")}
          style={styles.icon}
        />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
