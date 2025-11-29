import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function YourConcern() {
  const router = useRouter();
  const { doctorName, consultationType, date, time } =
    useLocalSearchParams<{
      doctorName?: string;
      consultationType?: string;
      date?: string;
      time?: string;
    }>();

  const [severity, setSeverity] = useState(50);
  const [duration, setDuration] = useState("28");
  const [unit, setUnit] = useState<"Days" | "Weeks" | "Months" | "Year">(
    "Days"
  );

  const onProceed = () => {
    router.push({
      pathname: "/consult/basic-info",
      params: {
        doctorName,
        consultationType,
        date,
        time,
        severity: String(severity),
        duration,
        unit,
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
        <Text style={styles.headerText}>Your Concern</Text>
      </View>

      {/* Doctor Info */}
      <View style={styles.doctorCard}>
        <Ionicons name="person-circle-outline" size={45} color="#1A7F4A" />
        <View>
          <Text style={styles.docName}>{doctorName ?? "Dr. Prem"}</Text>
          <Text style={styles.docSpecial}>Gynecology • 7 years exp.</Text>
          <Text style={styles.docRate}>Instant Call - ₹15/min</Text>
        </View>
      </View>

      {/* Concern Input */}
      <TextInput
        placeholder="Please select a concern"
        value="Diabetes"
        editable={false}
        style={styles.input}
      />

      {/* Severity */}
      <Text style={styles.label}>Select severity of your concern</Text>
      <Slider
        style={{ width: "85%", alignSelf: "center" }}
        minimumValue={0}
        maximumValue={100}
        value={severity}
        onValueChange={(val) => setSeverity(val)}
        minimumTrackTintColor="#1A7F4A"
        maximumTrackTintColor="#D9E4DF"
        thumbTintColor="#1A7F4A"
      />
      <View style={styles.severityRow}>
        <Text>Mild</Text>
        <Text style={{ fontWeight: "bold", color: "#1A7F4A" }}>Moderate</Text>
        <Text>Severe</Text>
      </View>

      {/* Duration */}
      <Text style={styles.label}>How long have you been facing?</Text>
      <View style={styles.durationInput}>
        <TextInput
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
          style={{ flex: 1 }}
        />
        <Ionicons name="chevron-down-outline" size={20} color="#999" />
      </View>

      {/* Time unit selection */}
      <View style={styles.unitRow}>
        {(["Days", "Weeks", "Months", "Year"] as const).map((item) => (
          <TouchableOpacity key={item} onPress={() => setUnit(item)}>
            <Text style={[styles.unit, unit === item && styles.unitActive]}>
              {unit === item ? "● " : "○ "}
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceed} onPress={onProceed}>
        <Text style={styles.proceedText}>Proceed</Text>
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
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#1A3C34",
  },
  doctorCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 12,
  },
  docName: { fontWeight: "700", fontSize: 16 },
  docSpecial: { fontSize: 13, color: "#666" },
  docRate: { fontSize: 12, color: "#1A7F4A" },

  input: {
    width: "85%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E5E8E7",
    padding: 12,
    borderRadius: 10,
    marginVertical: 14,
  },
  label: {
    marginLeft: 20,
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
    color: "#1A3C34",
  },
  severityRow: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  durationInput: {
    width: "85%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  unitRow: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 24,
  },
  unit: { fontSize: 12, color: "#555" },
  unitActive: { color: "#1A7F4A", fontWeight: "700" },

  proceed: {
    backgroundColor: "#1A7F4A",
    width: "85%",
    padding: 14,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 10,
  },
  proceedText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
