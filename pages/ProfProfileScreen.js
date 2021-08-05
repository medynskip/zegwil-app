import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-paper";

import AppContext from "./components/AppContext";
import ProfilesListAdmin from "./components/ProfilesListAdmin";

const ProfProfileScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);

  const [existing, setExisting] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(`${myContext.ipValue}/profiles/get`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length < 1) {
          setExisting(false);
        } else {
          setProfiles([...json]);
          setExisting(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.scrollWrapper}>
        <ScrollView> */}
      <View style={styles.listWrapper}>
        {existing ? (
          <ProfilesListAdmin profiles={profiles} navigation={navigation} />
        ) : (
          <Text>Brak profili</Text>
        )}
      </View>
      {/* </ScrollView>
      </SafeAreaView> */}
      <View style={styles.buttonWrapper}>
        <Button
          keyboardType="numeric"
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("WprowadzanieProf")}
        >
          Dodaj nowy profil
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollWrapper: {
    flex: 7,
  },
  listWrapper: {
    flex: 7,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default ProfProfileScreen;
