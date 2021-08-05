import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Svg, { Rect, Text, G } from "react-native-svg";

const SvgRectRotated = ({ x, y, width, height, previousHeight, i }) => {
  const [activated, setActivated] = useState(false);
  const handlePress = () => {
    console.log("click");
    setActivated(!activated);
  };

  return (
    <Svg>
      <G onPress={handlePress}>
        <Rect
          x={x - width}
          y={y}
          width={width}
          height={height}
          stroke={!activated ? "black" : "grey"}
          strokeWidth="0.6"
          fill={!activated ? "white" : "green"}
          // onPress={handlePress}
        />
        <Text
          fill={!activated ? "black" : "white"}
          strokeWidth="0.3"
          fontSize="6"
          textAnchor="middle"
          transform={`translate(${x - width / 1.5},${
            y + height / 2
          }) rotate(90)`}
          // onPress={handlePress}
        >
          {`${width}cm x ${height}cm`}
        </Text>
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default SvgRectRotated;
