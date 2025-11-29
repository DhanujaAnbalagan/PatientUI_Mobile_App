import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Concern = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const concerns: Concern[] = [
  { id: "hypertension", name: "Hypertension", icon: "heart-outline" },
  { id: "anxiety", name: "Anxiety", icon: "chatbubble-ellipses-outline" },
  { id: "obesity1", name: "Obesity", icon: "body-outline" },
  { id: "diabetes", name: "Diabetes", icon: "medkit-outline" },
  { id: "obesity2", name: "Obesity", icon: "fitness-outline" },
  { id: "hypertension2", name: "Hypertension", icon: "pulse-outline" },
  { id: "rubella", name: "Rubella", icon: "person-outline" },
  { id: "hypothermia", name: "Hypothermia", icon: "snow-outline" },
  { id: "frostbite", name: "Frostbite", icon: "snow" },
];

export default function SelectConcern() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>("hypertension");

  const handleSelect = (c: Concern) => {
    setSelectedId(c.id);
    router.push({
      pathname: "/consult/doctors",
      params: { concernId: c.id, concernName: c.name },
    } as any);
  };

  return (
    <View style={styles.root}>
      {/* header background with curves */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#1A3C34" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Concern</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Top Concerns</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.grid}>
            {concerns.map((c) => {
              const isSelected = c.id === selectedId;
              return (
                <TouchableOpacity
                  key={c.id}
                  style={styles.cardWrapper}
                  onPress={() => handleSelect(c)}
                >
                  <View
                    style={[
                      styles.cardCircle,
                      isSelected && styles.cardCircleSelected,
                    ]}
                  >
                    <Ionicons
                      name={c.icon}
                      size={26}
                      color={isSelected ? "#1A7F4A" : "#4F6F63"}
                    />
                  </View>
                  <Text
                    style={[
                      styles.cardLabel,
                      isSelected && styles.cardLabelSelected,
                    ]}
                    numberOfLines={1}
                  >
                    {c.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Fake bottom nav bar – only Consult active */}
      <View style={styles.bottomBar}>
        <BottomTab icon="home-outline" label="Home" />
        <BottomTab icon="cart-outline" label="Shop" />
        <BottomTab icon="call-outline" label="Consult" active />
        <BottomTab icon="chatbubbles-outline" label="Forum" />
        <BottomTab icon="notifications-outline" label="Bulletin" />
      </View>
    </View>
  );
}

type BottomTabProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
};

function BottomTab({ icon, label, active }: BottomTabProps) {
  return (
    <View style={styles.tabItem}>
      <Ionicons
        name={icon}
        size={20}
        color={active ? "#FFFFFF" : "#D8E3DD"}
      />
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F6F8F4" },
  headerWrapper: {
    backgroundColor: "#DDEFD9",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  header: { flexDirection: "row", alignItems: "center" },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 12,
    color: "#1A3C34",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 80,
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7B8D87",
    marginBottom: 16,
  },
  scrollContent: { paddingBottom: 40 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: "30%",
    alignItems: "center",
    marginBottom: 24,
  },
  cardCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#F4F8F4",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1E9E4",
  },
  cardCircleSelected: {
    borderColor: "#1A7F4A",
    backgroundColor: "#E6F5EC",
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 11,
    textAlign: "center",
    color: "#6B7C75",
  },
  cardLabelSelected: {
    color: "#1A7F4A",
    fontWeight: "600",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: "#1A7F4A",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  tabItem: { alignItems: "center" },
  tabLabel: { fontSize: 10, marginTop: 4, color: "#D8E3DD" },
  tabLabelActive: { color: "#FFFFFF", fontWeight: "600" },
});
