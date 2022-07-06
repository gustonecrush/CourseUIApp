import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderSection = ({ title, screen }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Semibold",
          color: "#092724",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      {screen === "Profile" ? null : (
        <TouchableOpacity onPress={title === 'Continue Your Lessons' ? () => navigation.navigate(screen) : () => {}}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#2EC4B6",
              fontSize: 13,
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderSection;
