import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, Dialog, Portal } from "react-native-paper";

const AdminLoginScreen = ({ navigation }) => {
  const secret = "9229";
  const [text, setText] = useState("");

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSubmit = () => {
    if (secret === text) {
      navigation.navigate("Administracja");
    } else {
      showDialog();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          label="Podaj kod"
          value={text}
          keyboardType="numeric"
          onChangeText={(text) => setText(text)}
        />
        <Button
          icon="login"
          mode="contained"
          contentStyle={styles.buttonSize}
          labelStyle={styles.buttonFont}
          onPress={handleSubmit}
        >
          Zaloguj
        </Button>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Uwaga.</Dialog.Title>
          <Dialog.Content>
            <Text>Bledny kod.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

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
  },
  input: {
    height: 60,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
  },
  buttonFont: {
    fontSize: 22,
  },
  buttonSize: {
    width: 160,
  },
});

export default AdminLoginScreen;
