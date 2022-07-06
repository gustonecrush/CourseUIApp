import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  CoursesScreen,
  LikedScreen,
  MyProfileScreen,
  ContinueLessonScreen,
  DetailCourseScreen,
  ProfileMentorScreen,
} from "../screens";
import { NavbarOption } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <NavbarOption {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Profile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" screenOptions={screenOptions}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="ContinueLesson" component={ContinueLessonScreen} />
      <Stack.Screen name="DetailCourse" component={DetailCourseScreen} />
      <Stack.Screen name="ProfileMentor" component={ProfileMentorScreen} />
    </Stack.Navigator>
  );
};

export default Router;
