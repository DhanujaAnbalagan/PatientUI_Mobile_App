import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function PaymentSuccess() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    fee?: string;
    consultationType?: string;
  }>();

  const fee = params.fee ?? "₹50";
  const type =
    params.consultationType === "video"
      ? "Video Consultation"
      : params.consultationType === "phone"
      ? "Phone Consultation"
      : "Chat Consultation";

  const walletBalance = "₹ 660"; // static for now

  return (
    <View style={styles.container}>
      {/* Doctor + Success Badge */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=12" }}
          style={styles.doctorImg}
        />
        <View style={styles.checkIcon}>
          <Ionicons name="checkmark-outline" size={20} color="#fff" />
        </View>
      </View>

      <Text style={styles.paid}>Paid {fee}</Text>
      <Text style={styles.subtitle}>{type} Booked Successfully</Text>

      {/* Wallet Info */}
      <Ionicons
        name="wallet-outline"
        size={22}
        color="#1A3C34"
        style={{ marginTop: 20 }}
      />

      <Text style={styles.walletLabel}>Available Balance</Text>
      <Text style={styles.walletValue}>{walletBalance}</Text>

      {/* CTA */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.replace("/consult/bookings")}
      >
        <Text style={styles.btnText}>Check Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.replace("/consult/success")}
      >
        <Text style={styles.btnText}>Check The appointment Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#CFF3D2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorImg: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  checkIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1A7F4A",
    borderRadius: 14,
    padding: 4,
  },
  paid: { fontSize: 20, fontWeight: "700", color: "#1A3C34" },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#54665C",
  },
  walletLabel: { marginTop: 8, fontSize: 12, color: "#76857D" },
  walletValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A3C34",
    marginTop: 4,
  },
  btn: {
    marginTop: 40,
    width: "75%",
    paddingVertical: 14,
    backgroundColor: "#1A7F4A",
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
