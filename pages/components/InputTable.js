import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TextInput } from "react-native-paper";

const InputTable = ({ profile, handleChange }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.singleHeader}>
        <Text style={styles.singleCell}>Element</Text>
        <Text style={styles.valueCell}>Dlug. (cm)</Text>
        <Text style={styles.valueCell}>Szer. (cm)</Text>
        <Text style={styles.valueCell}>Ilosc (szt)</Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Blat</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.blatX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "blatX")}
          />
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.blatY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "blatY")}
          />
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.blatN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "blatN")}
          />
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Wkładki</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.wkladkaX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "wkladkaX")}
          />
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.wkladkaY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "wkladkaY")}
          />
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.wkladkaN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "wkladkaN")}
          />
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Podbitka blatu I</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaAX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaAX")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaAY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaAY")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaAN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaAN")}
          />{" "}
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Podbitka blatu II</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaBX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaBX")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaBY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaBY")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaBN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaBN")}
          />{" "}
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Podbitka wkladki</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaWX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaWX")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaWY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaWY")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.podbitkaWN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "podbitkaWN")}
          />{" "}
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Skrzynia I</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaAX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaAX")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaAY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaAY")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaAN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaAN")}
          />{" "}
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Skrzynia II</Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaBX}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaBX")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaBY}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaBY")}
          />{" "}
        </Text>
        <Text style={styles.valueCell}>
          <TextInput
            value={profile.skrzyniaBN}
            placeholder="0"
            style={styles.inputStyle}
            onChangeText={(val) => handleChange(val, "skrzyniaBN")}
          />{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableWrapper: {
    display: "flex",
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  singleHeader: {
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  singleLight: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  singleDark: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  singleCell: {
    width: 300,
    fontWeight: "bold",
    fontSize: 20,
  },
  valueCell: {
    width: 120,
    fontSize: 20,
    textAlign: "center",
  },
  inputStyle: {
    height: 40,
    width: 70,
  },
});

export default InputTable;
