import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dropdown from "./components/DropDown";
import { countries } from "./utils/countries";

const formattedCountries = countries.map((c) => ({
  value: c.label,
  label: `${c.flag} ${c.label}`,
}));

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Dropdown
        data={formattedCountries}
        onChange={console.log}
        placeholder="Select country"
      />

      <Dropdown
        data={[
          { value: "🐈", label: "🐈 un Gato" },
          { value: "🦮", label: "🦮 un Perro" },
          { value: "🐍", label: "🐍 una serpiente" },
        ]}
        onChange={console.log}
        placeholder="Select pet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
});
