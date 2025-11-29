// app/video/call-disconnected.tsx
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CallDisconnected() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        style={{ position: "absolute", top: 60, left: 20 }}
        onPress={() => router.back()}
      >
        <Ionicons name="close-outline" size={28} color="#1A3C34" />
      </TouchableOpacity>

      {/* Doctor Photo */}
      <Image
        source={{ uri: "https://i.pravatar.cc/200?img=12" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Dr. Prem</Text>

      {/* Disconnected error */}
      <Text style={styles.disconnected}>Call Disconnected</Text>

      {/* Details row */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Consultation Duration</Text>
        <Text style={styles.value}>05:56</Text>
        <Text style={styles.label}>Total Amount Deducted</Text>
        <Text style={styles.value}>₹369</Text>
      </View>

      {/* Warning banner */}
      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          Your call ended due to low balance. Add at least ₹25 to continue.
        </Text>
        <TouchableOpacity style={styles.rechargeBtn}>
          <Text style={styles.rechargeText}>Recharge Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", alignItems: "center" },
  avatar: { width: 70, height: 70, borderRadius: 35, marginTop: 90 },
  name: { fontSize: 15, fontWeight: "bold", marginTop: 8 },
  disconnected: { color: "#C2483C", fontWeight: "600", marginTop: 6 },
  infoBox: {
    width: "85%",
    marginTop: 24,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
  },
  label: { fontSize: 12, color: "#777" },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A3C34",
    marginBottom: 10,
  },
  warningBox: {
    width: "90%",
    backgroundColor: "#FFF5D6",
    position: "absolute",
    bottom: 40,
    padding: 16,
    borderRadius: 12,
  },
  warningText: { fontSize: 12, color: "#7A5A33", marginBottom: 10 },
  rechargeBtn: {
    backgroundColor: "#1A7F4A",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  rechargeText: { color: "#fff", fontWeight: "700" },
});
