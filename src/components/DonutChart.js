import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function DonutChart({
  percentage = 75,
  radius = 40,
  strokeWidth = 15,
  duration = 500,
  color = "#FFF",
  delay = 0,
  textColor,
  max = 100,
}) {
  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const halfCircle = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage]
    );

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View
      style={{
        marginLeft: -20,
      }}
    >
      <Svg
        width={radius * 8}
        height={radius * 3}
        viewBox={`10 -30 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation={"-90"} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="30%"
            cy="30%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            rf={circleRef}
            cx="30%"
            cy="30%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference / 3}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 20,
          color: "#FFF",
          position: "absolute",
          left: 90,
          top: 45,
        }}
      >
        75%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
