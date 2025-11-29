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
import { useRouter, useLocalSearchParams } from "expo-router";

const timeSlots = {
  Morning: ["09:00 AM", "09:35 AM", "10:05 AM"],
  Afternoon: ["12:00 PM", "12:35 AM", "01:05 PM"],
  Evening: ["06:00 PM", "07:00 PM", "08:05 PM"],
};

export default function ChooseTimeSlot() {
  const router = useRouter();
  const { doctorName, consultationType, date } =
    useLocalSearchParams<{
      doctorName?: string;
      consultationType?: string;
      date?: string;
    }>();

  const [selectedSlot, setSelectedSlot] = useState<string>("10:05 AM");

  const handleConfirm = () => {
    router.push({
      pathname: "/consult/your-concern",
      params: {
        doctorName: doctorName ?? "Dr. Prem",
        consultationType: consultationType ?? "video",
        date: date ?? "06 Feb",
        time: selectedSlot,
      },
    } as any);
  };

  return (
    <View style={styles.container}>
      {/* HEADER BG with curves */}
      <View style={styles.headerBg}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#1A3C34" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Time Slot</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressRow}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      {/* Doctor Info */}
      <View style={styles.doctorBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={styles.doctorImg}
        />
        <View>
          <Text style={styles.doctorName}>{doctorName ?? "Dr. Prem"}</Text>
          <Text style={styles.doctorSub}>Chat Consultation - Free</Text>
        </View>
      </View>

      <Text style={styles.pickLabel}>Pick a time slot</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(timeSlots).map(([period, slots], i) => (
          <View key={i}>
            <Text style={styles.period}>{period}</Text>

            <View style={styles.grid}>
              {slots.map((slot) => (
                <TouchableOpacity
                  key={slot}
                  style={[
                    styles.slotBtn,
                    selectedSlot === slot && styles.activeSlot,
                  ]}
                  onPress={() => setSelectedSlot(slot)}
                >
                  <Text
                    style={[
                      styles.slotText,
                      selectedSlot === slot && styles.activeSlotText,
                    ]}
                  >
                    {slot}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

/******** STYLES ********/

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
  doctorName: { fontSize: 15, fontWeight: "700", color: "#1A3C34" },
  doctorSub: { fontSize: 12, color: "#87948F" },

  pickLabel: {
    marginLeft: 20,
    marginTop: 18,
    fontSize: 14,
    fontWeight: "600",
    color: "#1A3C34",
  },

  period: {
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 13,
    color: "#798881",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginBottom: 10,
  },

  slotBtn: {
    backgroundColor: "#EEF1F0",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 10,
  },
  slotText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#3C4B45",
  },

  activeSlot: {
    backgroundColor: "#1A7F4A",
  },
  activeSlotText: {
    color: "#fff",
  },

  confirmBtn: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    paddingVertical: 14,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
});
