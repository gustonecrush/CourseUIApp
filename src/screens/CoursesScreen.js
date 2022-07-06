import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DonutChart from "../components/DonutChart";

const CoursesScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DonutChart />
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({});
