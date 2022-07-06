import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Bar, Heading, MenuSync, VideoPlayer } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailCourseScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", marginTop: -10 }}>
      <Heading screen="Detail" />
      <VideoPlayer item={item} />

      <Text style={styles.courseName}>{item.name}</Text>

      <View style={styles.mainWrapper}>
        <View>
          <View style={styles.ratingWrapper}>
            <View style={styles.wrapper}>
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Image
                source={require("../../assets/icons/star.png")}
                style={styles.starImg}
              />
              <Text style={styles.studentText}>({item.students})</Text>
            </View>
            <View
              style={{
                backgroundColor: "#F6FBFA",
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginLeft: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Semibold",
                  color: "#2EC4B6",
                  fontSize: 10,
                  textTransform: "uppercase",
                }}
              >
                {item.category}
              </Text>
            </View>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.pricing}>
              ${item.oriPrice}
              {"   "}
              {item.discPrice ? (
                <Text style={styles.discText}>${item.discPrice}</Text>
              ) : null}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.likedBtn}>
          <Ionicons name="heart" size={18} color="#2EC4B6" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 25,
          marginVertical: 8,
          flexDirection: "row",
        }}
      >
        <Text style={[styles.mentor]}>Created by </Text>
        <Pressable onPress={() => navigation.navigate("ProfileMentor")}>
          <Text style={[styles.mentor, styles.textGreen]}>{item.mentor}</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: 25, marginTop: 3, }}>
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <Image
            source={require("../../assets/icons/course/member.png")}
            style={{ width: 15, height: 15, resizeMode: "contain" }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 11,
              color: "#697B7A",
              marginLeft: 5,
            }}
          >
            {item.students} Members
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
          <Image
            source={require("../../assets/icons/course/lessons.png")}
            style={{ width: 15, height: 15, resizeMode: "contain" }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 11,
              color: "#697B7A",
              marginLeft: 5,
            }}
          >
            {item.lessons} Members
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
          <Image
            source={require("../../assets/icons/course/certificate.png")}
            style={{ width: 15, height: 15, resizeMode: "contain" }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 11,
              color: "#697B7A",
              marginLeft: 5,
            }}
          >
            Certificate
          </Text>
        </View>
      </View>

      <MenuSync />

      <View style={{ marginHorizontal: 25 }}>
        <Text style={{ fontFamily: "Poppins-Semibold" }}>About Course</Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 13,
            color: "#697B7A",
            textAlign: "justify",
            lineHeight: 25,
            marginTop: 15,
          }}
        >
          {item.desc}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#2EC4B6",
              marginTop: 10,
            }}
          >
            Read More...
          </Text>
        </TouchableOpacity>
      </View>

      <Bar price={item.oriPrice} />
    </SafeAreaView>
  );
};

export default DetailCourseScreen;

const styles = StyleSheet.create({
  infoWrapper: {
    marginTop: 5,
  },
  courseName: {
    fontFamily: "Poppins-Semibold",
    fontSize: 16,
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  pricing: {
    fontFamily: "Poppins-Semibold",
    fontSize: 14,
    color: "#2EC4B6",
  },
  discText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    marginLeft: -5,
    color: "#697B7A",
    textDecorationLine: "line-through",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 15,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#092724",
  },
  starImg: {
    height: 10,
    resizeMode: "contain",
  },
  studentText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#697B7A",
  },
  mainWrapper: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likedBtn: {
    backgroundColor: "#D5F3F0",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    paddingTop: 2,
  },
  mentor: {
    fontFamily: "Poppins-Regular",
    color: "#092724",
    fontSize: 12,
  },
  textGreen: {
    fontFamily: "Poppins-Semibold",
    color: "#2EC4B6",
  },
});
