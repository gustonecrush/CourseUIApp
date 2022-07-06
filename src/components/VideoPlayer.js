import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const VideoPlayer = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUri }} style={styles.bannerCourse} />
      <TouchableOpacity style={styles.playerWrapper}>
        <View style={styles.player}>
          <Entypo name="controller-play" size={40} color="#FFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 25,
    borderRadius: 20,
  },
  bannerCourse: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  player: {
    backgroundColor: "#2EC4B6",
    borderRadius: 100,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  playerWrapper: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 5,
    left: 140,
    right: 0,
    top: 75,
    width: 58,
    alignItems: "center",
    justifyContent: "center",
  },
});
