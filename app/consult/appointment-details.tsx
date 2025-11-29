import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AppointmentDetails() {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string>("Appointment");

  const toggleSection = (s: string) => {
    setOpenSection(openSection === s ? "" : s);
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.headerBg}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#1A3C34" />
        </TouchableOpacity>
        <Text style={styles.header}>Appointment Details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* DOCTOR CARD */}
        <View style={styles.doctorCard}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=12" }}
            style={styles.avatar}
          />
          <View style={styles.docLabelBox}>
            <Text style={styles.smallLabel}>Doctor name</Text>
            <Text style={styles.docName}>Dr. Prem</Text>
          </View>
        </View>

        {/* SECTIONS */}
        {renderSection(
          "Appointment Details",
          "Appointment",
          openSection,
          toggleSection,
          [
            ["Appointment ID", "APPLF10247816"],
            ["Appointment type", "Freeaudio"],
            ["Appointment fee", "0 INR"],
            ["Duration", "1 min"],
            ["Appointment date", "19 Nov, 2024"],
            ["Appointment time", "01:51 PM"],
            ["Booking Status", "Completed"],
            ["Routine status", "Not assigned"],
          ]
        )}

        {renderSection(
          "Symptoms Details",
          "Symptoms",
          openSection,
          toggleSection,
          [
            ["Symptoms", "Anxiety"],
            ["Description", "N/A"],
            ["Severity", "Moderate"],
            ["Symptoms Duration", "weeks"],
            ["Sleep pattern", "N/A"],
          ]
        )}

        {renderSection(
          "Coupons Details",
          "Coupons",
          openSection,
          toggleSection,
          [
            ["Coupon Code", "N/A"],
            ["Coupon Discount", "N/A"],
            ["Discount amount", "0"],
          ]
        )}

        {renderSection(
          "Booking Details",
          "Booking",
          openSection,
          toggleSection,
          [
            ["Booked by", "Patient"],
            ["Booking date", "19 Nov, 2024"],
            ["Booking time", "01:51 PM"],
            ["Payment date", "29 Jan, 2025"],
            ["Payment Time", "01:58 PM"],
          ]
        )}

        {/* FOOTER BUTTON */}
        <TouchableOpacity style={styles.attachBox}>
          <Text style={styles.attachText}>Attach report</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

/* --- Collapsible Section Renderer --- */
const renderSection = (
  title: string,
  section: string,
  openSection: string,
  toggleSection: (s: string) => void,
  rows: string[][]
) => (
  <View style={styles.box}>
    <TouchableOpacity style={styles.boxHeader} onPress={() => toggleSection(section)}>
      <Text style={styles.boxTitle}>{title}</Text>
      <Ionicons
        name={openSection === section ? "chevron-down" : "chevron-forward"}
        size={18}
        color="#4A6159"
      />
    </TouchableOpacity>

    {openSection === section && (
      <View style={styles.detailsContainer}>
        {rows.map(([label, value], index) => (
          <View key={index} style={styles.detailRow}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

/* --------- STYLES --------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },

  headerBg: {
    backgroundColor: "#DFF2E2",
    paddingTop: 50,
    paddingBottom: 18,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#1A3C34",
  },

  doctorCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    alignItems: "center",
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  docLabelBox: { marginTop: 10, alignItems: "center" },
  smallLabel: { fontSize: 10, color: "#87948F" },
  docName: { fontWeight: "700", color: "#000" },

  box: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  boxHeader: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A3C34",
  },
  detailsContainer: { padding: 14 },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  label: { fontSize: 12, color: "#6B7C78" },
  value: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1A3C34",
  },

  attachBox: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#1A7F4A",
    padding: 14,
    borderRadius: 10,
    marginVertical: 20,
  },
  attachText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
