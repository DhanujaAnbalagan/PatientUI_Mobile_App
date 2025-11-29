import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ChooseConsultation() {
  const router = useRouter();
  const [selected, setSelected] = useState(2); // default: video selected

  const types = [
    {
      id: 1,
      title: "Phone Consultation",
      price: "₹ 15/min",
      time: "(20min)",
    },
    {
      id: 2,
      title: "Video Consultation",
      price: "₹ 35/min",
      time: "(30min)",
    },
    {
      id: 3,
      title: "Chat Consultation",
      price: "₹ 50",
      time: "(30 texts)\nValid: 72 hours",
    },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#1A3C34" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Choose Consultation</Text>
      </View>

      {/* Doctor Preview */}
      <View style={styles.doctorBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=10" }}
          style={styles.doctorImage}
        />
        <View>
          <Text style={styles.docName}>Dr. Prem</Text>
          <Text style={styles.docSpec}>Male-Female Infertility</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {types.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.optionCard,
              selected === item.id && styles.optionActive,
            ]}
            onPress={() => setSelected(item.id)}
          >
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Text style={styles.optionPrice}>{item.price}</Text>
            <Text style={styles.optionTime}>{item.time}</Text>

            <View style={styles.radioContainer}>
              {selected === item.id ? (
                <Ionicons name="checkmark-circle" size={22} color="#1A7F4A" />
              ) : (
                <Ionicons name="radio-button-off" size={22} color="#8AA095" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.proceed}
        onPress={() => router.push("/consult/call")}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

/*********** STYLES ***********/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9F8",
  },
  header: {
    marginTop: 45,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
    color: "#1A3C34",
  },

  doctorBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginHorizontal: 20,
  },
  doctorImage: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 12,
  },
  docName: { fontWeight: "700", fontSize: 14, color: "#1A3C34" },
  docSpec: { color: "#5F6F67", fontSize: 12, marginTop: 2 },

  optionsContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  optionCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
  },
  optionActive: {
    borderWidth: 2,
    borderColor: "#1A7F4A",
  },
  optionTitle: { fontWeight: "600", color: "#3B4A42" },
  optionPrice: { fontWeight: "700", fontSize: 16, marginTop: 5 },
  optionTime: { fontSize: 12, color: "#7D8F85", marginTop: 2 },
  radioContainer: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },

  proceed: {
    width: "85%",
    backgroundColor: "#1A7F4A",
    paddingVertical: 14,
    alignSelf: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 35,
  },
  proceedText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
