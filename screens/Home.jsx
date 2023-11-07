import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, INSETS, SHADOWS, SIZES, STYLES } from "../theme";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import EmergencyModal from "../components/home/EmergencyModal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/firebase";

const Home = () => {
  const insets = INSETS();
  const [emergencyModal, setEmergencyModal] = useState(false);
//   useEffect(() => {
//     addDoc(collection(db, "users"), { username: "prajwal" });
//   }, []);
  return (
    <View style={STYLES.container}>
      <StatusBar style="light" />
      <View
        style={[
          {
            padding: SIZES.m,
            paddingTop: insets.top + SIZES.m,
            backgroundColor: COLORS.primary,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomLeftRadius: SIZES.m,
            borderBottomRightRadius: SIZES.m,
          },
          SHADOWS.small,
        ]}
      >
        <TouchableOpacity onPress={() => setEmergencyModal(true)}>
          <FontAwesome5 name="fire" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontFamily: "bolder",
              fontSize: SIZES.l,
              textTransform: "uppercase",
              color: COLORS.white,
            }}
          >
            Fireapp
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="gps-fixed" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: SIZES.bottomNavbarHeight,
          left: 0,
          right: 0,
          padding: SIZES.m,
        }}
      >
        <View
          style={[
            {
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.m,
              padding: SIZES.m,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: SIZES.m,
            },
            SHADOWS.small,
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "semibold",
                color: COLORS.white,
                textTransform: "capitalize",
                fontSize: SIZES.m,
              }}
            >
              turn right
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                color: COLORS.white,
                opacity: 0.5,
                fontSize: SIZES.s,
              }}
            >
              towards staircase near room number 508
            </Text>
          </View>
          <View>
            <MaterialIcons name="directions" size={30} color={COLORS.white} />
          </View>
        </View>
      </View>
      {emergencyModal && (
        <EmergencyModal
          modalVisible={emergencyModal}
          setModalVisible={setEmergencyModal}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
