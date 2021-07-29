import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Kalkulator")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Przejdź do kalkulatora</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("Profile")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Zobacz profile</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("AdminLogin")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Administracja</Text>
        </View>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  block: {
    width: 200,
    height: 200,
    display: "flex",
    padding: 20,
    fontSize: 24,
  },
  button: {
    margin: 10,
    width: 220,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004080",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default HomeScreen;
