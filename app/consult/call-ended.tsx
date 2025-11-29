import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CallEnded() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Back / Close */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/consult/bookings")}
      >
        <Ionicons name="chevron-back" size={26} color="#1A3C34" />
      </TouchableOpacity>

      {/* Doctor Image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/200?img=12" }}
        style={styles.avatar}
      />

      <Text style={styles.doctorName}>Dr. Prem</Text>

      {/* Green Status Dot */}
      <View style={styles.dot} />

      {/* Title */}
      <Text style={styles.callEnded}>Call Ended</Text>

      {/* Call Details */}
      <View style={styles.details}>
        <View style={styles.detailCol}>
          <Text style={styles.label}>Consultation Duration</Text>
          <Text style={styles.value}>05:56</Text>
        </View>

        <View style={styles.detailCol}>
          <Text style={styles.label}>Total Amount Deducted</Text>
          <Text style={styles.value}>₹ 369</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.callAgainBtn} 
        onPress={() => router.push("/consult/call")}>
        <Text style={styles.callAgainText}>Call Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.doneBtn} 
        onPress={() => router.push("/consult/bookings")}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>

    </View>
  );
}

/************ STYLES ************/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 80,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A3C34",
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#27AE60",
    borderRadius: 50,
    marginTop: 4,
    marginBottom: 14,
  },

  callEnded: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    color: "#1A3C34",
  },

  details: {
    width: "90%",
    backgroundColor: "#F3F5F4",
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },
  detailCol: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: "#7E8E89",
  },
  value: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A3C34",
    marginTop: 4,
  },

  callAgainBtn: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#1A7F4A",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
  },
  callAgainText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A7F4A",
  },

  doneBtn: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  doneText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
