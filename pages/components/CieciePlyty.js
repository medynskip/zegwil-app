import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Svg, { Rect } from "react-native-svg";
import SvgRect from "./SvgRect";
import SvgRectRotated from "./SvgRectRotated";

const CieciePlyty = ({ profile }) => {
  const plytaX = 280; // Rozmiar plyty w skali do ekranu / 2800
  const plytaY = 208; // Rozmiar plyty w skali do ekranu / 2070

  const elements = [];
  let leftoverElements = [];

  for (var key in profile) {
    if (Array.isArray(profile[key])) {
      for (let i = 0; i < profile[key][2]; i++) {
        elements.push([
          parseFloat([profile[key][0]]),
          parseFloat([profile[key][1]]),
          profile[key][3],
        ]);
      }
    }
  }

  let currentWidth = elements[0][0];
  let previousHeight = elements[0][1];
  let x = 280;
  let y = 10 - elements[0][1];

  const newColumn = () => {
    x = x - currentWidth;
    y = 10 - leftoverElements[0][1];
    // leftoverElements.sort((a, b) => {
    //   return b[1] - a[1];
    // });
  };

  return (
    <View style={styles.container}>
      <Svg height="100%" width="70%" viewBox="0 0 300 230">
        <Rect
          x="0"
          y="10"
          width={plytaX}
          height={plytaY}
          stroke="black"
          strokeWidth="0.3"
          fill="white"
        />
        {elements.map((el, i, arr) => {
          if (y + el[1] < plytaY) {
            y += previousHeight;
            previousHeight = el[1];
            return (
              <SvgRect
                key={i}
                x={x}
                y={y}
                width={el[0]}
                height={el[1]}
                previousHeight={previousHeight}
              />
            );
          } else {
            leftoverElements.push(el);
          }
        })}
        {newColumn()}
        {leftoverElements.map((el, i, arr) => {
          // el[0] - szerokosc elementu, el[1] - wysokosc elementu
          y += previousHeight;
          previousHeight = el[0];
          if (y + el[0] < plytaY) {
            currentWidth = el[1];
            return (
              <SvgRectRotated
                key={i}
                x={x}
                y={y}
                width={el[1]}
                height={el[0]}
                previousHeight={previousHeight}
              />
            );
          } else {
            x = x - currentWidth;
            y = 10;
            currentWidth = el[1];
            return (
              <SvgRectRotated
                key={i}
                x={x}
                y={y}
                width={el[1]}
                height={el[0]}
                previousHeight={previousHeight}
              />
            );
          }
        })}
      </Svg>
      <View>
        {elements.map((el, i) => {
          return (
            <View key={i} style={styles.listItem}>
              <Text
                style={styles.listText}
              >{`${el[0]}cm x ${el[1]}cm - ${el[2]} `}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap",
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  listItem: {
    backgroundColor: "grey",
    padding: 5,
    margin: 1,
  },
  listText: {
    color: "white",
    fontSize: 16,
  },
});

export default CieciePlyty;
