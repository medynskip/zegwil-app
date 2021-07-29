import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Rect } from "react-native-svg";
import SvgRect from "./SvgRect";

const CieciePlyty = ({ profile }) => {
  const plytaX = 280; // Rozmiar plyty w skali do ekranu / 2800
  const plytaY = 207; // Rozmiar plyty w skali do ekranu / 2070

  const elements = [];
  let bigElements = [];

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
    y = 10 - bigElements[0][1];
  };

  return (
    <Svg height="100%" width="100%" viewBox="0 0 300 230">
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
        if (el[0] <= currentWidth) {
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
            y = 10;
            x = x - currentWidth;
            currentWidth = el[0];
            return (
              <SvgRect
                key={i}
                i={i}
                x={x}
                y={y}
                width={el[0]}
                height={el[1]}
                previousHeight={previousHeight}
              />
            );
          }
        } else {
          bigElements.push(el);
          bigElements = bigElements.sort((a, b) => {
            return b[0] - a[0];
          });
        }
      })}
      {newColumn()}
      {bigElements.map((el, i) => {
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
          y = 10;
          x = x - currentWidth;
          currentWidth = el[0];
          return (
            <SvgRect
              key={i}
              i={i}
              x={x}
              y={y}
              width={el[0]}
              height={el[1]}
              previousHeight={previousHeight}
            />
          );
        }
      })}
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CieciePlyty;
