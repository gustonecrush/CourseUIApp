import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Courses from "../../assets/datas/Courses";
import { CardProgress, Heading } from "../components";

const ContinueLessonScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", marginTop: -10 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Heading screen="Continue" />
        <View style={{ marginBottom: 25 }}></View>
        {Courses.map((course, index) => (
          <CardProgress key={index} item={course} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContinueLessonScreen;

const styles = StyleSheet.create({});
