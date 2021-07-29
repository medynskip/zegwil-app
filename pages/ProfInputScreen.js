import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { TextInput, Button } from "react-native-paper";

import AppContext from "./components/AppContext";

const ProfInputScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);

  const [name, setName] = useState("");
  const [rows, setRows] = useState([["", "", "", ""]]);

  const handleChange = (val, x, y) => {
    let newArr = [...rows];
    newArr[x][y] = val;
    setRows([...newArr]);
  };

  const handleClick = () => {
    setRows([...rows, ["", "", "", ""]]);
  };

  const handleSubmit = () => {
    const product = {
      name: name,
      fieldValues: [...rows],
    };
    fetch(`${myContext.ipValue}/profiles/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...product,
      }),
    }).catch((error) => {
      console.error("Error:", error);
    });
    navigation.navigate("Administracja", null);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.titleInput}
          label="Wprowadź nazwę profilu/stołu"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{ flex: 7, marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 6 }}>
            <Text>Element</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text>Dlug.</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text>Szer.</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text>Ilosc</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {rows.map((el, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                }}
              >
                <View style={{ flex: 6 }}>
                  <TextInput
                    value={el[0]}
                    placeholder="nazwa"
                    onChangeText={(val) => handleChange(val, i, 0)}
                  />
                </View>
                <View style={{ flex: 2 }}>
                  <TextInput
                    value={el[1]}
                    placeholder="0"
                    onChangeText={(val) => handleChange(val, i, 1)}
                  />
                </View>
                <View style={{ flex: 2 }}>
                  <TextInput
                    value={el[2]}
                    placeholder="0"
                    onChangeText={(val) => handleChange(val, i, 2)}
                  />
                </View>
                <View style={{ flex: 2 }}>
                  <TextInput
                    value={el[3]}
                    placeholder="0"
                    onChangeText={(val) => handleChange(val, i, 3)}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 2 }}>
        <View style={styles.buttonWrapper}>
          <Button mode="contained" onPress={handleClick}>
            Dodaj nową linię
          </Button>
          <Button
            color="green"
            mode="contained"
            onPress={handleSubmit}
            style={{ marginTop: 10 }}
          >
            Zapisz profil
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  optionList: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    width: 300,
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
});

export default ProfInputScreen;
