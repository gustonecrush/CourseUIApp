import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DonutChart from "./DonutChart";

const CardProgress = ({ item }) => {
  const navigation = useNavigation();

  const course = { ...item };

  return (
    <ImageBackground
      source={course.card}
      resizeMode="cover"
      style={styles.container}
      imageStyle={{ borderRadius: 20 }}
    >
      <View style={styles.infoCourse}>
        <Text style={styles.ongoingText}>Ongoing • 22/32</Text>
        <Text style={styles.courseText}>{course.name}</Text>
        <Text style={styles.mentorText}>by {course.mentor}</Text>
        <TouchableOpacity
          style={styles.btnContinue}
          onPress={() => navigation.navigate("DetailCourse", { item: course })}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <DonutChart />
    </ImageBackground>
  );
};

export default CardProgress;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: "blue",
    marginHorizontal: 25,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  ongoingText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#F6FBFA",
    lineHeight: 20,
  },
  courseText: {
    fontFamily: "Poppins-Semibold",
    fontSize: 13,
    color: "#F6FBFA",
  },
  mentorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#F6FBFA",
  },
  btnContinue: {
    backgroundColor: "#0145AA",
    paddingVertical: 6,
    paddingHorizontal: 17,
    borderRadius: 10,
    marginTop: 10,
    width: 90,
  },
  continueText: {
    fontFamily: "Poppins-Semibold",
    fontSize: 11,
    color: "#FFFFFF",
  },
  infoCourse: {
    width: "50%",
  },
  barProgress: {},
});
