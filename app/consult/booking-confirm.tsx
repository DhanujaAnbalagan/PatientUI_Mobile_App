import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function BookingConfirm() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    doctorName?: string;
    date?: string;
    time?: string;
    consultationType?: string;
    fee?: string;
  }>();

  const doctorName = params.doctorName ?? "Dr. Prem";
  const date = params.date ?? "Tomorrow";
  const time = params.time ?? "11:30 AM";
  const consultationType =
    params.consultationType === "chat"
      ? "Chat"
      : params.consultationType === "phone"
      ? "Phone"
      : "Video Call";

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBg}>
        <Text style={styles.title}>Confirm Booking</Text>
      </View>

      {/* Doctor Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={styles.doctorImg}
        />
        <View>
          <Text style={styles.docName}>{doctorName}</Text>
          <Text style={styles.docSub}>Male-Female Infertility</Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsBox}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Consultation Type</Text>
          <Text style={styles.value}>{consultationType}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{time}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.label}>Fee</Text>
          <Text style={styles.fee}>₹ 35/min</Text>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() => router.push("/consult/payment-success")}
      >
        <Text style={styles.confirmText}>Confirm & Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerBg: {
    backgroundColor: "#E9F4EA",
    padding: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },
  card: {
    marginTop: 20,
    backgroundColor: "#F8F8F8",
    padding: 15,
    marginHorizontal: 25,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  doctorImg: { width: 50, height: 50, borderRadius: 25 },
  docName: { fontSize: 16, fontWeight: "600" },
  docSub: { fontSize: 13, color: "#777" },

  detailsBox: {
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: "#FAFAFA",
    padding: 18,
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: { fontSize: 15, color: "#555" },
  value: { fontSize: 15, fontWeight: "600", color: "#0B7A52" },
  fee: { fontSize: 16, fontWeight: "700", color: "#0B7A52" },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },

  confirmBtn: {
    backgroundColor: "#0B7A52",
    padding: 14,
    width: "85%",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  confirmText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
