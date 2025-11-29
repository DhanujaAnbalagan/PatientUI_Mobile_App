// app/consult/no-answer.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function NoAnswerScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Doctor card */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Dr. Prem</Text>
        <Text style={styles.special}>Male-Female Infertility</Text>
        <Text style={styles.noAnswer}>No Answer</Text>

        {/* Yellow info banner */}
        <View style={styles.infoBanner}>
          <Ionicons name="notifications-outline" size={20} color="#417A35" />
          <Text style={styles.infoText}>
            Tap on the bell icon to get notified when Dr. Prem is online
          </Text>
        </View>
      </View>

      {/* Bottom suggestion card */}
      <View style={styles.bottomCard}>
        <Text style={styles.bottomText}>
          Start a Chat Consultation with Dr. Prem or consult another expert now.
        </Text>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.outlineBtn}
            onPress={() => router.push("/consult/select-concern")}
          >
            <Text style={styles.outlineText}>See More Experts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push("/consult/your-concern")}
          >
            <Text style={styles.primaryText}>Start Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingTop: 80 },
  card: {
    alignSelf: "center",
    width: "85%",
    backgroundColor: "#F7FDF9",
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: "700", color: "#1A3C34" },
  special: { fontSize: 12, color: "#6B7A71", marginBottom: 4 },
  noAnswer: { fontSize: 13, color: "#E46A39", marginBottom: 14 },

  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF4D6",
    borderRadius: 16,
    padding: 10,
    marginTop: 4,
  },
  infoText: {
    flex: 1,
    fontSize: 11,
    color: "#4B5F40",
    marginLeft: 8,
  },

  bottomCard: {
    position: "absolute",
    bottom: 40,
    left: "7.5%",
    right: "7.5%",
    backgroundColor: "#F7F7F7",
    borderRadius: 18,
    padding: 16,
  },
  bottomText: {
    fontSize: 12,
    color: "#4B4B4B",
    marginBottom: 14,
    textAlign: "center",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outlineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#1A7F4A",
    borderRadius: 20,
    paddingVertical: 10,
    marginRight: 8,
    alignItems: "center",
  },
  outlineText: {
    color: "#1A7F4A",
    fontSize: 13,
    fontWeight: "600",
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#1A7F4A",
    borderRadius: 20,
    paddingVertical: 10,
    marginLeft: 8,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
