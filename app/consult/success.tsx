import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Success() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={80} color="#1A7F4A" />
      <Text style={styles.title}>Appointment Confirmed!</Text>
      <Text style={styles.subtitle}>
        Your consultation has been scheduled successfully.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/consult/select-concern")}
      >
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
    color: "#1A3C34",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#7C8C86",
    marginTop: 8,
    textAlign: "center",
  },
  btn: {
    marginTop: 30,
    backgroundColor: "#1A7F4A",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
