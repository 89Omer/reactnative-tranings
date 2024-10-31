import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>welcome to the react native lesson</Text>
      <InputField label={"Email"} />
      <Button name={"This is a button"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
