import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Rect, Text, G } from "react-native-svg";

const SvgRect = ({ x, y, width, height, previousHeight }) => {
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
          x={x - width / 2}
          y={2 + y + previousHeight / 2}
          textAnchor="middle"
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
});

export default SvgRect;
