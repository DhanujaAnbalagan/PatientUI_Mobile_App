import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const doctors = [
  {
    id: "1",
    name: "Dr. Prem",
    specialty: "Gynecology + 2 others",
    languages: "Hindi, English, Telugu",
    experience: "Exp : 7 years",
    price: "₹15/min",
    offer: "Free (5min)",
    rating: "4.5",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "2",
    name: "Dr. Prem",
    specialty: "Gynecology + 2 others",
    languages: "Hindi, English, Telugu",
    experience: "Exp : 7 years",
    price: "₹15/min",
    offer: "Free (5min)",
    rating: "4.5",
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: "3",
    name: "Dr. Prem",
    specialty: "Gynecology + 2 others",
    languages: "Hindi, English, Telugu",
    experience: "Exp : 7 years",
    price: "₹15/min",
    offer: "Free (5min)",
    rating: "4.5",
    image: "https://i.pravatar.cc/100?img=20",
  },
];

export default function DoctorsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ concernName?: string }>();

  const openConsultation = (doctorName: string) => {
    router.push({
      pathname: "/consult/consultation",
      params: { doctorName },
    } as any);
  };

  return (
    <View style={styles.root}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#1A3C34" />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {params.concernName ?? "Doctors"}
        </Text>

        <View style={styles.headerRight}>
          <Ionicons name="wallet-outline" size={20} color="#1A3C34" />
          <Text style={styles.balance}>₹150</Text>
        </View>
      </View>

      {/* FILTER TABS – visual only */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterRow}
      >
        <FilterPill name="All" active />
        <FilterPill name="Hair" />
        <FilterPill name="Diabetes" active />
        <FilterPill name="D" />
        <FilterPill name="Filter" icon="options-outline" />
      </ScrollView>

      {/* DOCTOR LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {doctors.map((doc) => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onSchedule={() => openConsultation(doc.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

/******** Components ********/

const DoctorCard = ({
  doctor,
  onSchedule,
}: {
  doctor: (typeof doctors)[number];
  onSchedule: () => void;
}) => (
  <View style={styles.card}>
    <Image source={{ uri: doctor.image }} style={styles.docImage} />

    <View style={styles.docInfo}>
      <View style={styles.rowBetween}>
        <Text style={styles.docName}>{doctor.name}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={15} color="#FFB800" />
          <Text style={styles.rating}>{doctor.rating}</Text>
        </View>
      </View>

      <Text style={styles.spec}>{doctor.specialty}</Text>
      <Text style={styles.subInfo}>{doctor.languages}</Text>
      <Text style={styles.subInfo}>{doctor.experience}</Text>

      <Text style={styles.price}>
        {doctor.price} <Text style={styles.free}>{doctor.offer}</Text>
      </Text>

      <View style={styles.buttonRow}>
        <Button label="Schedule" outline onPress={onSchedule} />
        <Button label="Free Call" onPress={() => {}} />
      </View>
    </View>
  </View>
);

const Button = ({
  label,
  outline,
  onPress,
}: {
  label: string;
  outline?: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.btn, outline && styles.btnOutline]}
    onPress={onPress}
  >
    <Text style={[styles.btnText, outline && styles.btnTextOutline]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const FilterPill = ({
  name,
  active,
  icon,
}: {
  name: string;
  active?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
}) => (
  <TouchableOpacity style={[styles.pill, active && styles.pillActive]}>
    {icon && (
      <Ionicons
        name={icon}
        size={16}
        color={active ? "#fff" : "#1A3C34"}
        style={{ marginRight: 6 }}
      />
    )}
    <Text style={[styles.pillText, active && styles.pillTextActive]}>
      {name}
    </Text>
  </TouchableOpacity>
);

/******** STYLES ********/

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F9F8" },

  header: {
    paddingTop: 45,
    paddingHorizontal: 18,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  headerText: { fontSize: 16, fontWeight: "700", color: "#1A3C34" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  balance: { marginLeft: 6, fontSize: 13, fontWeight: "600" },

  filterRow: {
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  pill: {
    backgroundColor: "#F0F4F2",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  pillActive: {
    backgroundColor: "#1A7F4A",
  },
  pillText: { fontSize: 13, color: "#1A3C34" },
  pillTextActive: { color: "#fff", fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    elevation: 2,
  },
  docImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  docInfo: { flex: 1 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between" },
  docName: { fontWeight: "700", fontSize: 14, color: "#1A3C34" },
  spec: { fontSize: 12, color: "#4A6159", marginTop: 2 },
  subInfo: { fontSize: 11, color: "#7D8F85", marginTop: 2 },
  price: { fontSize: 11, marginTop: 4, color: "#4A6159" },
  free: { color: "#00A144", fontWeight: "700" },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  rating: { fontSize: 12, marginLeft: 2, fontWeight: "600" },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  btn: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#1A7F4A",
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1A7F4A",
  },
  btnText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  btnTextOutline: { color: "#1A7F4A" },
});
