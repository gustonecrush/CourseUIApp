import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardMentor, Heading, MenuSync } from "../components";

const ProfileMentorScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", marginTop: -10 }}>
      <Heading screen="Mentor" />
      <CardMentor />
      <MenuSync screen="Mentor" />
      <View style={{ marginHorizontal: 25 }}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 13,
            color: "#697B7A",
            lineHeight: 25,
            textAlign: "justify",
          }}
        >
          Hi My name is Azamat Baimatov, i work as a Senior Cyber Security in on
          of the biggest E-commerce in Indonesia, i Have more than 10 years of
          experience Cyber Security Design in Startup & Corporate.
          {"\n"}• First we’ll describe the brief & how to work with a UX
          persona.
          {"\n"}• Then you’ll learn how to create simple wireframes.
          {"\n"}• From there we’ll look at how to implement colours & images
          properly in your designs.
          {"\n"}• You’ll learn the do’s & don’ts around choosing fonts for web &
          mobile apps.
          {"\n"}• You’ll learn how to create your own icons, buttons & other UI
          components.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileMentorScreen;

const styles = StyleSheet.create({});
