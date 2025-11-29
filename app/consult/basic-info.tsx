import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function BasicInfo() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    doctorName?: string;
    consultationType?: string;
    date?: string;
    time?: string;
    severity?: string;
    duration?: string;
    unit?: string;
  }>();

  const [gender, setGender] = useState("Prefer not to say");
  const [age, setAge] = useState("28 years");
  const [height, setHeight] = useState("171 cms");
  const [weight, setWeight] = useState("63 kg");

  const handleConfirm = () => {
    router.push({
      pathname: "/consult/final-confirm",
      params: {
        ...params,
        gender,
        age,
        height,
        weight,
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
        <Text style={styles.headerText}>Basic Info</Text>
      </View>

      {/* Doctor row */}
      <View style={styles.doctorRow}>
        <Ionicons name="person-circle-outline" size={45} color="#1A7F4A" />
        <View>
          <Text style={styles.docName}>{params.doctorName ?? "Dr. Prem"}</Text>
          <Text style={styles.docSub}>Gynecology + 2 others</Text>
          <Text style={styles.docSub}>Instant Call - ₹15/min</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>
        Please confirm your basic information
      </Text>

      {/* Fields */}
      <View style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Gender</Text>
        <TextInput value={gender} onChangeText={setGender} style={styles.fieldInput} />
      </View>

      <View style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Age</Text>
        <TextInput value={age} onChangeText={setAge} style={styles.fieldInput} />
      </View>

      <View style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Height</Text>
        <TextInput value={height} onChangeText={setHeight} style={styles.fieldInput} />
      </View>

      <View style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Weight</Text>
        <TextInput value={weight} onChangeText={setWeight} style={styles.fieldInput} />
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
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
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#1A3C34",
  },
  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  docName: { fontSize: 16, fontWeight: "700", color: "#1A3C34" },
  docSub: { fontSize: 12, color: "#7B8A84" },

  sectionLabel: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 13,
    color: "#1A3C34",
  },

  fieldBox: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 11,
    color: "#888",
    marginBottom: 4,
  },
  fieldInput: {
    borderWidth: 1,
    borderColor: "#E0E4E3",
    borderRadius: 10,
    padding: 10,
    fontSize: 13,
  },

  confirmBtn: {
    backgroundColor: "#1A7F4A",
    width: "85%",
    padding: 14,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  confirmText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
