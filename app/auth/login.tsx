import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/consult/select-concern")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Link href="/auth/register" style={styles.link}>
        Create account
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { textAlign: "center", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 8 },
  button: { backgroundColor: "green", padding: 12, borderRadius: 8 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "600", textAlign: "center" },
  link: { marginTop: 10, color: "blue", textAlign: "center" },
});
