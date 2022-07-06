import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Heading = ({ screen }) => {
  const navigation = useNavigation();

  const HomeHeading = () => {
    return (
      <>
        <View>
          <Text style={styles.name}>Hi Farhan 👋</Text>
          <Text style={styles.greeting}>
            Let's Find Your <Text style={styles.textGreen}>Course!</Text>
          </Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity style={[styles.iconWrapper, { marginRight: 13 }]}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/heading/cart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/heading/notification.png")}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const ContinueYourLessonHeading = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Feather name="chevron-left" size={23} color="#697B7A" />
        </TouchableOpacity>
        <Text style={[styles.name, { marginLeft: -20 }]}>
          Continue Your Lessons
        </Text>
        <Text></Text>
      </>
    );
  };

  const DetailCourseHeading = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Feather name="chevron-left" size={21} color="#697B7A" />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={[styles.backBtn, { marginRight: 20 }]}>
            <Feather name="share-2" size={21.5} color="#697B7A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backBtn}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/heading/cart.png")}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const ProfileMentorHeading = () => {
    return (
      <>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Feather name="chevron-left" size={21} color="#697B7A" />
          </TouchableOpacity>
          <Text style={[styles.name, { marginLeft: 18 }]}>Profile Mentor</Text>
        </View>

        <TouchableOpacity style={styles.backBtn}>
          <Feather name="more-horizontal" size={21.5} color="#697B7A" />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {screen === "Home" ? (
        <HomeHeading />
      ) : screen === "Continue" ? (
        <ContinueYourLessonHeading />
      ) : screen === "Detail" ? (
        <DetailCourseHeading />
      ) : (
        <ProfileMentorHeading />
      )}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 20,
  },
  name: {
    fontFamily: "Poppins-Semibold",
    fontSize: 17,
    color: "#092724",
    letterSpacing: -0.2,
  },
  greeting: {
    marginTop: 3,
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    lineHeight: 24,
  },
  textGreen: {
    color: "#2EC4B6",
    fontFamily: "Poppins-Semibold",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    padding: 8,
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 15,
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: "cover",
  },
  backBtn: {
    borderColor: "#F4F4F4",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
});
