import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppContext from "./components/AppContext";

import { TextInput, Button } from "react-native-paper";

import { showMessage, hideMessage } from "react-native-flash-message";

const SetupScreen = () => {
  const [ipValue, setIpValue] = useState("");
  const myContext = useContext(AppContext);

  useEffect(() => {
    setIpValue(myContext.ipValue);
  }, []);

  const handleSubmit = () => {
    myContext.setCurrentIp(ipValue);
    showMessage({
      message: "Zapisano adres serwera",
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textSize}>Wprowadz adres serwera bazy danych</Text>
        <Text style={styles.smallText}>
          Format wprowadzania: http://192.168.1.1:5000
        </Text>
        <TextInput
          style={styles.titleInput}
          label="Wprowadź ip serwera bazy danych"
          value={ipValue}
          onChangeText={(text) => setIpValue(text)}
        />
        <View style={styles.buttonWrapper}>
          <Button mode="contained" disabled>
            Przetestuj połączenie
          </Button>
          <Button
            color="green"
            mode="contained"
            onPress={handleSubmit}
            style={{ marginTop: 10 }}
          >
            Zapisz dane
          </Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    padding: 50,
    flexDirection: "column",
  },
  titleInput: {
    height: 60,
    borderWidth: 1,
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 30,
    width: "100%",
  },
  textSize: {
    fontSize: 22,
  },
  smallText: {
    fontStyle: "italic",
    fontSize: 14,
    color: "grey",
  },
});

export default SetupScreen;
