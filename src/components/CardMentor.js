import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const CardMentor = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: 200, marginTop: 25 }}
        source={require("../../assets/images/card-bg.png")}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 200,
            resizeMode: "cover",
            borderColor: "#FFF",
            borderWidth: 3,
            position: "absolute",
            top: -30,
            left: 130,
          }}
        />
        <View style={{ alignItems: "center", marginTop: 70 }}>
          <Text style={{ fontFamily: "Poppins-Semibold", fontSize: 18 }}>
            Azamat Baimatov
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#697B7A",
              marginTop: 5,
            }}
          >
            Senior Cyber Security
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <View style={styles.infoWrapper}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.textGray}>Courses</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.number}>17</Text>
            <Text style={styles.textGray}>Students</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.textGray}>Reviews</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardMentor;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  infoWrapper: {
    alignItems: "center",
  },
  number: {
    fontFamily: "Poppins-Semibold",
    fontSize: 15,
  },
  textGray: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: '#697B7A',
  },
});
