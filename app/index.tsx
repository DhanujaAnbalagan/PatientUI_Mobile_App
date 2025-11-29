import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Background Gradient Shapes */}
      <View style={styles.headerBg} />

      {/* App Title */}
      <Text style={styles.title}>Welcome to MedicoCare</Text>
      <Text style={styles.subtitle}>
        Your trusted partner for health consultation
      </Text>

      {/* Illustration */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
        }}
        style={styles.image}
      />

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.push("/auth/login")}
      >
        <Text style={styles.primaryText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => router.push("/consult/select-concern")}
      >
        <Text style={styles.secondaryText}>Continue as Guest</Text>
      </TouchableOpacity>

    </View>
  );
}

/************ Styles ************/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  headerBg: {
    position: "absolute",
    top: -80,
    width: "100%",
    height: 200,
    backgroundColor: "#DFF2E2",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1A3C34",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#4A6159",
    textAlign: "center",
    marginBottom: 30,
  },

  image: {
    width: 130,
    height: 130,
    marginBottom: 40,
  },

  primaryBtn: {
    backgroundColor: "#1A7F4A",
    width: "80%",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 14,
  },
  primaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryBtn: {
    width: "80%",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A7F4A",
  },
  secondaryText: {
    color: "#1A7F4A",
    fontSize: 16,
    fontWeight: "600",
  },
});
