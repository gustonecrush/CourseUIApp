import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Mask = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/header-profile.png")}
        style={{
          width: "100%",
          resizeMode: "contain",
          height: 270,
          marginTop: -50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>My Profile</Text>
          <TouchableOpacity
            style={{
              borderColor: "#FFF",
              borderWidth: 1,
              padding: 3,
              borderRadius: 9,
            }}
          >
            <MaterialCommunityIcons
              name="dots-horizontal"
              color="#FFF"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileWrapper}>
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg",
            }}
            style={styles.profileImg}
          />
          <Text style={styles.name}>Farhan Augustiansyah</Text>
          <Text style={styles.email}>farhantsyh@gmail.co.id</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Mask;

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderColor: "#FFF",
    borderWidth: 1.5,
  },
  profileWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontFamily: "Poppins-Semibold",
    color: "#FFF",
    marginTop: 15,
  },
  email: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#FFF",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 25,
    marginTop: 20,
    alignItems: "center",
    marginTop: -5,
  },
  headerText: {
    fontFamily: "Poppins-Semibold",
    fontSize: 16,
    color: "#FFF",
  },
});
