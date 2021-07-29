import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import { Surface } from "react-native-paper";

const DisplayProfScreen = ({ route }) => {
  const { profile } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>{profile.name}</Text>
      </View>
      <Surface style={styles.surface}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 6 }}>
            <Text style={styles.fontSize}>Element</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.fontSize}>Dlug.</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.fontSize}>Szer.</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.fontSize}>Ilosc</Text>
          </View>
        </View>
      </Surface>
      <ScrollView style={styles.scrollView}>
        {profile.fieldValues.map((el, i) => {
          return (
            <View
              key={i}
              style={i % 2 !== 0 ? styles.rowDark : styles.rowLight}
            >
              <View style={{ flex: 6 }}>
                <Text style={styles.fontSize}>{el[0]}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.fontSize}>{el[1]} cm</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.fontSize}>{el[2]} cm</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.fontSize}>{el[3]} szt</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  fontSize: {
    fontSize: 28,
  },
  scrollView: {
    padding: 8,
  },
  surface: {
    padding: 8,
    height: 40,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },
  rowLight: {
    flexDirection: "row",
    padding: 5,
  },
  rowDark: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#f5f5f5",
  },
  cell: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DisplayProfScreen;
