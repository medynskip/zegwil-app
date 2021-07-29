import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import AppContext from "./components/AppContext";

import { Button, Dialog, Portal } from "react-native-paper";

const CalculatorScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);

  const [visible, setVisible] = useState(false);

  const [options, setOptions] = useState([]);
  const [position, setPosition] = useState();

  const [selected, setSelected] = useState({
    wykonczenie: "W1",
    szerokosc: "80",
    dlugosc: "140",
    ilWkladek: "1",
    dlWkladek: "40",
    noga: "6x6",
  });

  const hideDialog = () => setVisible(false);

  const handleSubmit = (array, position) => {
    setOptions([...array]);
    setPosition(position);
    setVisible(true);
  };

  const handleSelect = (value) => {
    setSelected({
      ...selected,
      [position]: value,
    });
    setVisible(false);
  };

  const handleSearch = () => {
    fetch(`${myContext.ipValue}/configs/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selected),
    })
      .then((response) => response.json())
      .then((json) => {
        const data = json.length > 0 ? { ...json[0] } : { ...selected };
        navigation.navigate("Display", {
          selected: { ...data },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionList}>
        {/* Kształt blatu */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Kształt blatu</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["W1", "W2", "W3", "W4", "W5"], "wykonczenie");
            }}
          >
            {selected.wykonczenie}
          </Button>
        </View>

        {/* Szerokosc blatu */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Szerokość blatu</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["80", "90", "100"], "szerokosc");
            }}
          >
            {selected.szerokosc}
          </Button>
        </View>

        {/* Długosc blatu */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Długość blatu</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["80", "90", "100", "140", "150", "200"], "dlugosc");
            }}
          >
            {selected.dlugosc}
          </Button>
        </View>

        {/* Ilosc wkladek  */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Ilość wkładek</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["0", "1", "2", "3", "4"], "ilWkladek");
            }}
          >
            {selected.ilWkladek}
          </Button>
        </View>

        {/* Dl wkladek  */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Długość wkładki</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["30", "40", "50"], "dlWkladek");
            }}
          >
            {selected.dlWkladek}
          </Button>
        </View>

        {/* Noga  */}
        <View style={styles.singleLine}>
          <Text style={styles.fontSize}>Rozmiar nogi</Text>
          <Button
            contentStyle={styles.buttonSize}
            labelStyle={styles.buttonFont}
            mode="contained"
            onPress={() => {
              handleSubmit(["6x6", "8x8", "Diament", "Ludwik I"], "noga");
            }}
          >
            {selected.noga}
          </Button>
        </View>
      </View>
      <Button
        labelStyle={styles.buttonFont}
        mode="contained"
        style={styles.fontSize}
        onPress={handleSearch}
        // onPress={() =>
        //   navigation.navigate("Display", {
        //     selected: { ...selected },
        //   })
        // }
      >
        Wyszukaj
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Wybierz wartość dla {position}</Dialog.Title>
          <Dialog.Content style={styles.selectWrapper}>
            {options.map((el, i) => {
              return (
                <TouchableHighlight
                  key={i}
                  onPress={() => {
                    handleSelect(el);
                  }}
                >
                  <View style={styles.selectBlock}>
                    <Text style={styles.buttonText}>{el}</Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={hideDialog}>Zamknij</Button>
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
  optionList: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    width: 500,
    marginBottom: 20,
  },
  singleLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectBlock: {
    margin: 10,
    padding: 30,
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
  fontSize: {
    fontSize: 28,
  },
  buttonFont: {
    fontSize: 22,
  },
  buttonSize: {
    width: 160,
  },
  // pickerStyle: { height: 20, width: 100, borderWidth: 1, fontSize: 24 },
});

export default CalculatorScreen;
