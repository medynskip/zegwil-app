import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Rect, Text } from "react-native-svg";

const SvgRect = ({ x, y, width, height, previousHeight }) => {
  const [activated, setActivated] = useState(false);
  const handlePress = () => {
    setActivated(!activated);
  };

  return (
    <Svg>
      <View>
        <Rect
          x={x - width}
          y={y}
          width={width}
          height={height}
          stroke={!activated ? "black" : "white"}
          strokeWidth="0.6"
          fill={!activated ? "white" : "green"}
          onPress={handlePress}
        />
        <Text
          fill={!activated ? "black" : "white"}
          strokeWidth="0.3"
          fontSize="5"
          x={x - width / 2}
          y={2 + y + previousHeight / 2}
          textAnchor="middle"
        >
          {`${width}cm x ${height}cm`}
        </Text>
      </View>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SvgRect;
