import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MyBookings() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const bookings = [
    {
      id: 1,
      doctor: "Dr. Prem",
      specialty: "Orthodontist",
      status: "Upcoming",
      date: "Tuesday, 13/09/2023",
      time: "10:30 AM",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      doctor: "Dr. Deepa Godara",
      specialty: "Orthodontist",
      status: "Completed",
      date: "Tuesday, 13/09/2023",
      time: "10:30 AM",
      image: "https://i.pravatar.cc/100?img=52",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>

      <View style={styles.tabRow}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Orders</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {bookings.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rowTop}>
              <Image source={{ uri: item.image }} style={styles.docImg} />
              <View style={{ flex: 1 }}>
                <Text style={styles.docName}>{item.doctor}</Text>
                <Text style={styles.special}>{item.specialty}</Text>
                <Text
                  style={[
                    styles.status,
                    item.status === "Upcoming"
                      ? styles.upcoming
                      : styles.completed,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <Ionicons name="calendar-outline" size={14} color="#1A3C34" />
              <Text style={styles.cardText}>{item.date}</Text>
              <Ionicons name="time-outline" size={14} color="#1A3C34" />
              <Text style={styles.cardText}>{item.time}</Text>
            </View>

            <View style={styles.btnRow}>
              <TouchableOpacity
                style={styles.viewBtn}
                onPress={() => router.push("/consult/appointment-details")}
              >
                <Text style={styles.viewBtnText}>View Details</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.callBtn}
                onPress={() => router.push("/consult/call")}
              >
                <Text style={styles.callBtnText}>Start Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* DISCLAIMER POPUP */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Disclaimer</Text>
            <Text style={styles.modalText}>
              By continuing, you consent to this call being recorded for quality
              and support services. Please provide accurate details to help the
              doctor assist you effectively.
            </Text>

            <TouchableOpacity
              style={styles.proceedBtn}
              onPress={() => {
                setShowModal(false);
                router.push("/consult/call");
              }}
            >
              <Text style={styles.proceedText}>Proceed</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A3C34",
    margin: 20,
  },

  tabRow: { flexDirection: "row", marginHorizontal: 20, marginBottom: 10 },
  activeTab: {
    backgroundColor: "#1A3C34",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTabText: { color: "#fff", fontWeight: "600" },
  tab: {
    backgroundColor: "#E5F0EA",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  tabText: { color: "#1A3C34" },

  card: {
    backgroundColor: "#F7FDF9",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  rowTop: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  docImg: { width: 50, height: 50, borderRadius: 10, marginRight: 12 },
  docName: { fontWeight: "700", color: "#1A3C34" },
  special: { fontSize: 12, color: "#6B7A71" },
  status: {
    fontSize: 11,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  upcoming: { backgroundColor: "#FFE7C4", color: "#A05A00" },
  completed: { backgroundColor: "#CDEFD3", color: "#1A7F4A" },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginVertical: 6,
  },
  cardText: { fontSize: 12, color: "#1A3C34" },

  btnRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  viewBtn: {
    backgroundColor: "#1A3C34",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  viewBtnText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  callBtn: {
    backgroundColor: "#1A7F4A",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  callBtnText: { color: "#fff", fontSize: 13, fontWeight: "600" },

  modalBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  modalText: {
    fontSize: 13,
    color: "#444",
    marginBottom: 20,
    textAlign: "center",
  },
  proceedBtn: {
    backgroundColor: "#1A7F4A",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  proceedText: { color: "#fff", fontWeight: "700", textAlign: "center" },
  cancelText: { color: "#666", fontWeight: "600" },
});
