import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "@/screens/Login";

export default function loginpage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#25292e",
  },
});
