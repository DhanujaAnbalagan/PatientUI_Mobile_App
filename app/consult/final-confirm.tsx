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

export default function FinalConfirm() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    doctorName?: string;
    date?: string;
    time?: string;
    consultationType?: string;
    fee?: string;
  }>();

  const doctorName = params.doctorName ?? "Dr. Prem";
  const date = params.date ?? "23 November 2023";
  const time = params.time ?? "17:28 PM";
  const consultationType =
    params.consultationType === "phone"
      ? "Phone Consultation"
      : params.consultationType === "video"
      ? "Video Consultation"
      : "Chat Consultation";

  const walletBalance = "₹ 660"; // Static for now
  const consultationFee = params.fee ?? "₹ 50";

  return (
    <View style={styles.container}>
      {/* Top Doctor Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=12" }}
          style={styles.doctorImg}
        />
        <View style={styles.verifyIcon}>
          <Ionicons name="checkmark-circle" size={22} color="#fff" />
        </View>
      </View>

      <Text style={styles.title}>Appointment Confirmed</Text>
      <Text style={styles.subtitle}>
        Thank you for choosing our Experts to help guide you
      </Text>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Row label="Expert" value={doctorName} />
        <Row label="Appointment Date" value={date} />
        <Row label="Appointment Time" value={time} />
        <Row label="Consultation Type" value={consultationType} />
        <Row label="Current Wallet Balance" value={walletBalance} />
        <Row label="Consultation Fee" value={consultationFee} />
      </View>

      {/* Payment Button */}
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => router.push("/consult/booking-confirm")}
      >
        <Text style={styles.payText}>Make payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },
  doctorImg: { width: 120, height: 120 },
  verifyIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#1A7F4A",
    borderRadius: 50,
    padding: 3,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
    marginTop: 12,
    color: "#1A3C34",
  },
  subtitle: {
    width: "90%",
    textAlign: "center",
    color: "#7C8C86",
    marginTop: 4,
    marginBottom: 25,
    fontSize: 13,
  },
  infoBox: {
    width: "88%",
    backgroundColor: "#F5FBF7",
    borderRadius: 14,
    padding: 16,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  rowLabel: { color: "#495752", fontSize: 13 },
  rowValue: { color: "#1A3C34", fontSize: 13, fontWeight: "600" },

  payBtn: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    paddingVertical: 14,
    borderRadius: 10,
  },
  payText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
