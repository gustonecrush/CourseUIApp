import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Bar = ({ price }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.btn,
          { backgroundColor: "#F6FBFA", flexDirection: "row" },
        ]}
      >
        <Image
          source={require("../../assets/icons/cart-active.png")}
          style={{
            width: 17,
            height: 17,
            resizeMode: "contain",
            marginRight: 5,
          }}
        />
        <Text style={{ fontFamily: "Poppins-Regular", color: "#2EC4B6" }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "#2EC4B6" }]}>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#FFF" }}>
          Buy Now{" "}
          <Text style={{ fontFamily: "Poppins-Semibold" }}>${price}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    justifyContent: "space-between",
  },
  btn: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20,
  },
});
