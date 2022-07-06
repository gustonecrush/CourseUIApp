import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ListItem, Mask } from "../components";
import HeaderSection from "../components/HeaderSection";

const GENERALS = [
  {
    id: 1,
    name: "Personal Data",
    icon: require("../../assets/icons/profile/user.png"),
  },
  {
    id: 2,
    name: "Payments",
    icon: require("../../assets/icons/profile/payment.png"),
  },
  {
    id: 3,
    name: "Reviews",
    icon: require("../../assets/icons/profile/review.png"),
  },
  {
    id: 4,
    name: "Certificate",
    icon: require("../../assets/icons/profile/certificate.png"),
  },
];

const OTHERS = [
  {
    id: 1,
    name: "Settings",
    icon: require("../../assets/icons/profile/setting.png"),
  },
];

const MyProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar style="auto" hidden />
      <Mask />
      <HeaderSection title="General" screen="Profile" />
      <View>
        {GENERALS.map((data, index) => (
          <ListItem item={data} key={index} />
        ))}
      </View>
      <HeaderSection title="Others" screen="Profile" />
      {OTHERS.map((data, index) => (
        <ListItem item={data} key={index} />
      ))}
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({});
