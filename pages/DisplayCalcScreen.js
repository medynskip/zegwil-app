import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

import Svg, { Circle, Rect } from "react-native-svg";
import CieciePlyty from "./components/CieciePlyty";

import DisplayTable from "./components/DisplayTable";

const DisplayCalcScreen = ({ navigation, route }) => {
  const { selected } = route.params;
  const existing = selected._id ? true : false;

  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <View style={styles.container}>
      <View style={styles.paramsBox}>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Kształt blatu: </Text>
          <Text style={styles.headerStrong}>{selected.wykonczenie}</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Szerokość blatu: </Text>
          <Text style={styles.headerStrong}>{selected.szerokosc}</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Długość blatu: </Text>
          <Text style={styles.headerStrong}>{selected.dlugosc}</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Ilość wkładek: </Text>
          <Text style={styles.headerStrong}>{selected.ilWkladek}</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Długość wkładek: </Text>
          <Text style={styles.headerStrong}>{selected.dlWkladek}</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.headerLine}>Profil nogi: </Text>
          <Text style={styles.headerStrong}>{selected.noga}</Text>
        </View>
        <Button
          style={styles.topSpace}
          contentStyle={styles.buttonSize}
          labelStyle={styles.buttonFont}
          mode="contained"
          disabled={!existing}
          onPress={showDialog}
        >
          Podgląd cięcia
        </Button>
        <Button
          style={styles.topSpace}
          contentStyle={styles.buttonSize}
          labelStyle={styles.buttonFont}
          mode="contained"
          color="#339933"
          onPress={() => navigation.navigate("Kalkulator")}
        >
          Zamknij
        </Button>
      </View>
      {existing ? (
        <DisplayTable profile={selected} />
      ) : (
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>BRAK PROFILU</Text>
          <Text style={styles.notificationText}>
            SKONTAKTUJ SIĘ Z ADMINISTRATOREM
          </Text>
          <Text style={styles.notificationText}>
            W CELU DODANIA TEGO WARIANTU
          </Text>
        </View>
      )}

      <Portal>
        <Dialog visible={visible} style={{ flex: 1 }} onDismiss={hideDialog}>
          {/* <Dialog.Title>Kalkulacja</Dialog.Title> */}
          <Dialog.Content style={{ flex: 1 }}>
            <View
              style={[
                StyleSheet.absoluteFill,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              {/* <Svg height="100%" width="100%" viewBox="0 0 100 100"> */}
              <CieciePlyty profile={{ ...selected }} />
              {/* <Circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="blue"
                  strokeWidth="2.5"
                  fill="green"
                />
                <Rect
                  x="15"
                  y="15"
                  width="70"
                  height="70"
                  stroke="red"
                  strokeWidth="2"
                  fill="yellow"
                /> */}
              {/* </Svg> */}
            </View>
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
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paramsBox: {
    marginHorizontal: 60,
    padding: 10,
  },
  singleLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLine: {
    fontSize: 28,
  },
  headerStrong: {
    fontSize: 28,
    fontWeight: "bold",
  },
  topSpace: {
    marginTop: 15,
  },
  buttonFont: {
    fontSize: 22,
  },
  buttonSize: {
    margin: 5,
    width: 220,
  },
  notificationBox: {
    padding: 50,
    backgroundColor: "#b30000",
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default DisplayCalcScreen;
