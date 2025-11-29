import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const dates = [
  "06 Feb",
  "07 Feb",
  "08 Feb",
  "09 Feb",
  "10 Feb",
  "11 Feb",
  "12 Feb",
  "13 Feb",
];

export default function AppointmentScreen() {
  const router = useRouter();
  const { doctorName, consultationType } =
    useLocalSearchParams<{ doctorName?: string; consultationType?: string }>();

  const [selectedDate, setSelectedDate] = useState("06 Feb");

  const onConfirmDate = () => {
    router.push({
      pathname: "/consult/choose-time-slot",
      params: {
        doctorName: doctorName ?? "Dr. Prem",
        consultationType: consultationType ?? "video",
        date: selectedDate,
      },
    } as any);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBg}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#1A3C34" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Date</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressRow}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Doctor card */}
      <View style={styles.doctorBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={styles.doctorImg}
        />
        <View>
          <Text style={styles.docName}>{doctorName ?? "Dr. Prem"}</Text>
          <Text style={styles.docSub}>Male-Female Infertility</Text>
        </View>
      </View>

      <Text style={styles.label}>Pick Appointment Date</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {dates.map((d) => (
            <TouchableOpacity
              key={d}
              style={[
                styles.dateBtn,
                selectedDate === d && styles.selectedBtn,
              ]}
              onPress={() => setSelectedDate(d)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === d && styles.selectedBtnText,
                ]}
              >
                {d}
              </Text>
              <Text
                style={[
                  styles.day,
                  selectedDate === d && styles.selectedBtnText,
                ]}
              >
                {/* fake weekday */}Friday
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.confirm} onPress={onConfirmDate}>
        <Text style={styles.confirmText}>Confirm Date</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  headerBg: {
    backgroundColor: "#DFF2E2",
    padding: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#1A3C34",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  dot: {
    width: 45,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#D9E4DF",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#1A7F4A",
  },

  doctorBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  doctorImg: { width: 50, height: 50, borderRadius: 10, marginRight: 12 },
  docName: { fontSize: 15, fontWeight: "700", color: "#1A3C34" },
  docSub: { fontSize: 12, color: "#87948F" },

  label: {
    marginLeft: 20,
    marginTop: 18,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#1A3C34",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginBottom: 20,
  },
  dateBtn: {
    width: 90,
    backgroundColor: "#EEF1F0",
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  dateText: { fontWeight: "600", color: "#3C4B45" },
  day: { fontSize: 11, color: "#7D8F85", marginTop: 4 },
  selectedBtn: { backgroundColor: "#1A7F4A" },
  selectedBtnText: { color: "#fff" },

  confirm: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    paddingVertical: 14,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
