import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MENUS_COURSE = [
  { id: 1, name: "Details" },
  { id: 2, name: "Lessons" },
  { id: 3, name: "Reviews" },
];

const MENUS_MENTOR = [
  { id: 1, name: "About" },
  { id: 2, name: "Courses" },
  { id: 3, name: "Reviews" },
];

const MenuSync = ({ screen }) => {
  const [active, setActive] = useState("Details");
  const [mentorActive, setMentorActive] = useState("About");
  return (
    <View style={styles.container}>
      {screen !== "Mentor"
        ? MENUS_COURSE.map((menu, index) => (
            <TouchableOpacity key={index} onPress={() => setActive(menu.name)}>
              <Text
                style={
                  active === menu.name ? styles.menu(menu.name) : styles.menu()
                }
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))
        : MENUS_MENTOR.map((menu, index) => (
            <TouchableOpacity key={index} onPress={() => setMentorActive(menu.name)}>
              <Text
                style={
                  mentorActive === menu.name ? styles.menu(menu.name) : styles.menu()
                }
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))}
    </View>
  );
};

export default MenuSync;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#F4F4F4",
    borderBottomColor: "#F4F4F4",
    paddingVertical: 15,
  },
  menu: (active) => ({
    fontFamily: active ? "Poppins-Semibold" : "Poppins-Regular",
    fontSize: 13,
    color: active ? "#2EC4B6" : "#697B7A",
  }),
});
