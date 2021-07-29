import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";

import { Surface, Text, Button } from "react-native-paper";

const ProfilesListClient = ({ navigation, profiles }) => {
  const handleSubmit = (profile) => {
    navigation.navigate("DisplayProf", {
      profile: { ...profile },
    });
  };

  return (
    <SafeAreaView style={styles.scrollWrapper}>
      <ScrollView>
        <View style={styles.listWrapper}>
          {profiles.map((el, i) => {
            return (
              <TouchableHighlight
                key={i}
                onPress={() => {
                  handleSubmit(el);
                }}
                underlayColor="white"
              >
                <Surface style={styles.surface}>
                  <Text style={{ fontSize: 26 }}>{el.name}</Text>
                  <Button color="green">Zobacz</Button>
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

export default ProfilesListClient;
