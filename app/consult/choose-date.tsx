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

const dates = [
  { day: "06 Feb", weekday: "Friday" },
  { day: "07 Feb", weekday: "Saturday" },
  { day: "08 Feb", weekday: "Sunday" },
  { day: "09 Feb", weekday: "Monday" },
  { day: "10 Feb", weekday: "Tuesday" },
  { day: "11 Feb", weekday: "Wednesday" },
  { day: "12 Feb", weekday: "Thursday" },
  { day: "13 Feb", weekday: "Friday" },
  { day: "14 Feb", weekday: "Saturday" },
  { day: "15 Feb", weekday: "Sunday" },
  { day: "16 Feb", weekday: "Monday" },
  { day: "17 Feb", weekday: "Tuesday" },
];

export default function ChooseDateScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<number>(0);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#1A3C34" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Choose Date</Text>
      </View>

      {/* Doctor Info */}
      <View style={styles.doctorBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={styles.doctorImg}
        />
        <View>
          <Text style={styles.doctorName}>Dr. Prem</Text>
          <Text style={styles.doctorSpec}>Male-Female Infertility</Text>
        </View>
      </View>

      <Text style={styles.subTitle}>Pick Appointment Date</Text>

      {/* Dates Grid */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {dates.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCard,
                selected === index && styles.activeCard,
              ]}
              onPress={() => setSelected(index)}
            >
              <Text
                style={[
                  styles.dateText,
                  selected === index && styles.activeText,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.weekdayText,
                  selected === index && styles.activeText,
                ]}
              >
                {item.weekday}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() => router.push("/consult/choose-time-slot")}
      >
        <Ionicons name="calendar" size={18} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.confirmText}>Confirm Date</Text>
      </TouchableOpacity>
    </View>
  );
}

/************ STYLES ************/
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingTop: 40 },
  headerWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 12,
    color: "#1A3C34",
  },

  doctorBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  doctorImg: {
    width: 55,
    height: 55,
    borderRadius: 14,
    marginRight: 12,
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A3C34",
  },
  doctorSpec: {
    fontSize: 12,
    color: "#71857A",
  },

  subTitle: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#50645A",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 100,
  },

  dateCard: {
    width: "28%",
    backgroundColor: "#F5F8F7",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  activeCard: {
    backgroundColor: "#1A7F4A",
  },
  dateText: { fontSize: 14, fontWeight: "600", color: "#1A3C34" },
  weekdayText: { fontSize: 11, color: "#6C7A74" },
  activeText: { color: "#FFFFFF" },

  confirmBtn: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    paddingVertical: 14,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
