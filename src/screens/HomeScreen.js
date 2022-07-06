import React from "react";
import { useFonts } from "expo-font";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Card,
  CardProgress,
  Categories,
  Heading,
  InputSearch,
} from "../components";
import HeaderSection from "../components/HeaderSection";
import Courses from "../../assets/datas/Courses";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF", marginBottom: 140 }}
    >
      <StatusBar style="dark" hidden />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Heading screen="Home" />
        <InputSearch />
        <Categories />

        <HeaderSection title="Continue Your Lessons" screen="ContinueLesson" />
        <CardProgress item={Courses[0]} />

        <HeaderSection title="Recommendation Courses" />
        <View
          style={{
            marginHorizontal: 25,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {Courses.map((course, index) => (
            <Card key={index} item={course} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
