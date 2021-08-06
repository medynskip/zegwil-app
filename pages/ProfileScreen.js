import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ProfilesListClient from "./components/ProfilesListClient";

import AppContext from "./components/AppContext";

const ProfileScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);

  const [message, setMessage] = useState("Wczytywanie profili z serwera");

  const [existing, setExisting] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const url = filter
      ? `${myContext.ipValue}/profiles/get/${filter}`
      : `${myContext.ipValue}/profiles/get`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.length < 1) {
          setExisting(false);
          setMessage("Brak zapisanych profili");
        } else {
          setProfiles([...json]);
          setExisting(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filter]);

  return (
    <View style={styles.container}>
      <View style={styles.pillWrapper}>
        <TouchableOpacity
          onPress={() => {
            setFilter(null);
          }}
        >
          <View style={filter ? styles.pill : styles.pillActive}>
            <Text style={styles.pillText}>Wszystkie</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilter("Standard");
          }}
        >
          <View style={filter == "Standard" ? styles.pillActive : styles.pill}>
            <Text style={styles.pillText}>Standard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilter("Ławostoły");
          }}
        >
          <View style={filter == "Ławostoły" ? styles.pillActive : styles.pill}>
            <Text style={styles.pillText}>Ławostoły</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilter("Okrągłe");
          }}
        >
          <View style={filter == "Okrągłe" ? styles.pillActive : styles.pill}>
            <Text style={styles.pillText}>Okrągłe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilter("Stima");
          }}
        >
          <View style={filter == "Stima" ? styles.pillActive : styles.pill}>
            <Text style={styles.pillText}>Stima</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setFilter("Anglia");
          }}
        >
          <View style={filter == "Anglia" ? styles.pillActive : styles.pill}>
            <Text style={styles.pillText}>Anglia</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listWrapper}>
        {existing ? (
          <ProfilesListClient navigation={navigation} profiles={profiles} />
        ) : (
          <Text style={styles.messageText}>{`${message}`}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  pillWrapper: { display: "flex", flexDirection: "row", padding: 20 },
  pill: {
    borderRadius: 30,
    backgroundColor: "grey",
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  pillActive: {
    borderRadius: 30,
    backgroundColor: "green",
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  pillText: { color: "white", fontSize: 20 },
  messageText: { fontSize: 24, color: "grey" },
});

export default ProfileScreen;
