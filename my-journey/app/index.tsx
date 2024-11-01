// app/index.tsx
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the Home Page!</Text>
//     </View>
//   );
  return <Redirect href="/(tabs)/loginpage" />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
