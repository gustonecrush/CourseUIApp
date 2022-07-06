import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabItem from "./TabItem";

const NavbarOption = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabItem
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
            label={label}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default NavbarOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 14,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -150,
    paddingTop: 25,
    paddingBottom: 35,
    backgroundColor: "#FFF",
  },
});
