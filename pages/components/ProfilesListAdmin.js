import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

import { Surface, Button } from "react-native-paper";

const ProfilesListAdmin = ({ navigation, profiles }) => {
  const handleSubmit = (profile) => {
    navigation.navigate("EdycjaProfilu", {
      profile: { ...profile },
    });
  };

  return (
    <SafeAreaView style={styles.scrollWrapper}>
      <ScrollView>
        <View style={styles.listWrapper}>
          {profiles.map((row, i) => {
            return (
              <TouchableHighlight
                key={i}
                onPress={() => {
                  handleSubmit(row);
                }}
                underlayColor="white"
              >
                <Surface key={i} style={styles.surface}>
                  <Text style={{ fontSize: 26 }}>{row.name}</Text>
                  <Button color="green">Edytuj</Button>
                </Surface>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    // backgroundColor: "grey",
  },
  surface: {
    padding: 18,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },
  scrollWrapper: {
    paddingBottom: 30,
  },
});

export default ProfilesListAdmin;
