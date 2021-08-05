import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, Dialog, Portal } from "react-native-paper";

import AppContext from "./components/AppContext";
import InputTable from "./components/InputTable";

const CalcInputScreen = ({ navigation, route }) => {
  const { selected, values, copied } = route.params;

  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  const myContext = useContext(AppContext);

  const [existing, setExisting] = useState(false);
  const [profile, setProfile] = useState({
    blatX: copied ? copied.blat[0] : "",
    blatY: copied ? copied.blat[1] : "",
    blatN: copied ? copied.blat[2] : "",

    wkladkaX: copied ? copied.wkladka[0] : "",
    wkladkaY: copied ? copied.wkladka[1] : "",
    wkladkaN: copied ? copied.wkladka[2] : "",

    podbitkaAX: copied ? copied.podbitkaA[0] : "",
    podbitkaAY: copied ? copied.podbitkaA[1] : "",
    podbitkaAN: copied ? copied.podbitkaA[2] : "",

    podbitkaBX: copied ? copied.podbitkaB[0] : "",
    podbitkaBY: copied ? copied.podbitkaB[1] : "",
    podbitkaBN: copied ? copied.podbitkaB[2] : "",

    podbitkaWX: copied ? copied.podbitkaW[0] : "",
    podbitkaWY: copied ? copied.podbitkaW[1] : "",
    podbitkaWN: copied ? copied.podbitkaW[2] : "",

    skrzyniaAX: copied ? copied.skrzyniaA[0] : "",
    skrzyniaAY: copied ? copied.skrzyniaA[1] : "",
    skrzyniaAN: copied ? copied.skrzyniaA[2] : "",

    skrzyniaBX: copied ? copied.skrzyniaB[0] : "",
    skrzyniaBY: copied ? copied.skrzyniaB[1] : "",
    skrzyniaBN: copied ? copied.skrzyniaB[2] : "",
  });

  useEffect(() => {
    console.log("copied", copied);
    if (values) {
      setExisting(values._id);
      setProfile({
        ...profile,
        blatX: values.blat[0],
        blatY: values.blat[1],
        blatN: values.blat[2],

        wkladkaX: values.wkladka[0],
        wkladkaY: values.wkladka[1],
        wkladkaN: values.wkladka[2],

        podbitkaAX: values.podbitkaA[0],
        podbitkaAY: values.podbitkaA[1],
        podbitkaAN: values.podbitkaA[2],

        podbitkaBX: values.podbitkaB[0],
        podbitkaBY: values.podbitkaB[1],
        podbitkaBN: values.podbitkaB[2],

        podbitkaWX: values.podbitkaW[0],
        podbitkaWY: values.podbitkaW[1],
        podbitkaWN: values.podbitkaW[2],

        skrzyniaAX: values.skrzyniaA[0],
        skrzyniaAY: values.skrzyniaA[1],
        skrzyniaAN: values.skrzyniaA[2],

        skrzyniaBX: values.skrzyniaB[0],
        skrzyniaBY: values.skrzyniaB[1],
        skrzyniaBN: values.skrzyniaB[2],
      });
    } else if (copied) {
      setProfile({
        blatX: copied.blat[0],
        blatY: copied.blat[1],
        blatN: copied.blat[2],

        wkladkaX: copied.wkladka[0],
        wkladkaY: copied.wkladka[1],
        wkladkaN: copied.wkladka[2],

        podbitkaAX: copied.podbitkaA[0],
        podbitkaAY: copied.podbitkaA[1],
        podbitkaAN: copied.podbitkaA[2],

        podbitkaBX: copied.podbitkaB[0],
        podbitkaBY: copied.podbitkaB[1],
        podbitkaBN: copied.podbitkaB[2],

        podbitkaWX: copied.podbitkaW[0],
        podbitkaWY: copied.podbitkaW[1],
        podbitkaWN: copied.podbitkaW[2],

        skrzyniaAX: copied.skrzyniaA[0],
        skrzyniaAY: copied.skrzyniaA[1],
        skrzyniaAN: copied.skrzyniaA[2],

        skrzyniaBX: copied.skrzyniaB[0],
        skrzyniaBY: copied.skrzyniaB[1],
        skrzyniaBN: copied.skrzyniaB[2],
      });
    }
  }, [copied]);

  const handleChange = (val, name) => {
    setProfile({
      ...profile,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    const url = existing
      ? `${myContext.ipValue}/configs/update/${existing}`
      : `${myContext.ipValue}/configs/create`;

    const data = {
      ...selected,
      blat: [profile.blatX, profile.blatY, profile.blatN, "Blat"],
      wkladka: [
        profile.wkladkaX,
        profile.wkladkaY,
        profile.wkladkaN,
        "Wkładka",
      ],
      podbitkaA: [
        profile.podbitkaAX,
        profile.podbitkaAY,
        profile.podbitkaAN,
        "Podbitka Blatu 1",
      ],
      podbitkaB: [
        profile.podbitkaBX,
        profile.podbitkaBY,
        profile.podbitkaBN,
        "Podbitka Blatu 2",
      ],
      podbitkaW: [
        profile.podbitkaWX,
        profile.podbitkaWY,
        profile.podbitkaWN,
        "Podbitka Wkładki",
      ],
      skrzyniaA: [
        profile.skrzyniaAX,
        profile.skrzyniaAY,
        profile.skrzyniaAN,
        "Skrzynia 1",
      ],
      skrzyniaB: [
        profile.skrzyniaBX,
        profile.skrzyniaBY,
        profile.skrzyniaBN,
        "Skrzynia 2",
      ],
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((json) => {
        navigation.navigate("Administracja", null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          // disabled={!existing}
          onPress={() => {
            navigation.navigate("KopiowanieKalk", {
              originProfile: { ...selected },
            });
          }}
        >
          Skopiuj wartości
        </Button>
      </View>
      <View>
        <InputTable profile={profile} handleChange={handleChange} />
        <Button
          style={styles.topSpace}
          contentStyle={styles.buttonSize}
          labelStyle={styles.buttonFont}
          mode="contained"
          onPress={handleSubmit}
        >
          Zapisz
        </Button>
      </View>

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
    textAlign: "center",
  },
  buttonSize: {
    margin: 5,
    width: 220,
  },
});

export default CalcInputScreen;
