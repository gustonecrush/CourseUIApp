import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        item.id % 2 == 0 ? { marginRight: 0 } : { marginRight: 15 },
      ]}
    >
      <Image source={{ uri: item.imageUri }} style={styles.cardImg} />
      <View style={styles.infoWrapper}>
        <Text style={styles.courseText}>{item.name}</Text>
        <Text style={styles.mentorText}>{item.mentor}</Text>
        <Text style={styles.pricing}>
          ${item.oriPrice}
          {"   "}
          {item.discPrice ? (
            <Text style={styles.discText}>${item.discPrice}</Text>
          ) : null}
        </Text>
      </View>
      <View style={styles.ratingWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Image
            source={require("../../assets/icons/star.png")}
            style={styles.starImg}
          />
        </View>
        <Text style={styles.studentText}>({item.students})</Text>
        <Image
          source={require("../../assets/icons/navbar/liked-active.png")}
          style={styles.likedIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginBottom: 25,
    paddingBottom: 10,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "rgba(100,100,111,.2)",
    shadowOffset: { width: 1, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.7,
  },
  cardImg: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  courseText: {
    fontFamily: "Poppins-Semibold",
    fontSize: 12.5,
    color: "#092724",
  },
  mentorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#697B7A",
  },
  infoWrapper: {
    marginTop: 15,
    marginLeft: 5,
  },
  pricing: {
    fontFamily: "Poppins-Semibold",
    fontSize: 12,
    color: "#2EC4B6",
  },
  discText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#697B7A",
    textDecorationLine: "line-through",
  },
  ratingWrapper: {
    flexDirection: "row",
    marginLeft: 5,
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
    fontSize: 10,
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
  likedIcon: {
    width: 10,
    height: 10,
  },
});
