import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayTable = ({ profile }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.singleHeader}>
        <Text style={styles.singleCell}>Element</Text>
        <Text style={styles.valueCell}>Dlug.</Text>
        <Text style={styles.valueCell}>Szer.</Text>
        <Text style={styles.valueCell}>Ilosc</Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Blat</Text>
        <Text style={styles.valueCell}>
          {profile.blat[0] ? `${profile.blat[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.blat[1] ? `${profile.blat[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.blat[2] ? `${profile.blat[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Wkładki</Text>
        <Text style={styles.valueCell}>
          {profile.wkladka[0] ? `${profile.wkladka[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.wkladka[1] ? `${profile.wkladka[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.wkladka[2] ? `${profile.wkladka[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Podbitka blatu I</Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaA[0] ? `${profile.podbitkaA[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaA[1] ? `${profile.podbitkaA[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaA[2] ? `${profile.podbitkaA[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Podbitka blatu II</Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaB[0] ? `${profile.podbitkaB[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaB[1] ? `${profile.podbitkaB[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaB[2] ? `${profile.podbitkaB[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Podbitka wkladki</Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaW[0] ? `${profile.podbitkaW[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaW[1] ? `${profile.podbitkaW[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.podbitkaW[2] ? `${profile.podbitkaW[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleDark}>
        <Text style={styles.singleCell}>Skrzynia I</Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaA[0] ? `${profile.skrzyniaA[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaA[1] ? `${profile.skrzyniaA[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaA[2] ? `${profile.skrzyniaA[2]} szt` : `---`}
        </Text>
      </View>

      <View style={styles.singleLight}>
        <Text style={styles.singleCell}>Skrzynia II</Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaB[0] ? `${profile.skrzyniaB[0]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaB[1] ? `${profile.skrzyniaB[1]} cm` : `---`}
        </Text>
        <Text style={styles.valueCell}>
          {profile.skrzyniaB[2] ? `${profile.skrzyniaB[2]} szt` : `---`}
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
    fontSize: 26,
  },
  valueCell: {
    width: 120,
    fontSize: 26,
    textAlign: "center",
  },
});

export default DisplayTable;
