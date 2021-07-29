import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const AdminScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("ParametryKalk")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Dodaj nową kalkulację</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("ParametryProf")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Dodaj nowy profil</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("SetupScreen")}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ustawienia aplikacji</Text>
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

export default AdminScreen;
