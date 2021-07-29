import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import ProfilesListClient from "./components/ProfilesListClient";

import AppContext from "./components/AppContext";

const ProfileScreen = ({ navigation }) => {
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
      <View style={styles.listWrapper}>
        {existing ? (
          <ProfilesListClient navigation={navigation} profiles={profiles} />
        ) : (
          <Text>Brak profili</Text>
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
});

export default ProfileScreen;
