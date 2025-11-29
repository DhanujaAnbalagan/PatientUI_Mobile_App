import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Medical App</Text>

      <Link href="/auth/login" style={styles.button}>
        Go to Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "green",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
