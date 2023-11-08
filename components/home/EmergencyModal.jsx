import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Modal from "react-native-modal";
import { COLORS, INSETS, SIZES, STYLES } from "../../theme";
import { FontAwesome5, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as Haptics from "expo-haptics";

const EmergencyModal = ({ modalVisible, setModalVisible }) => {
  const insets = INSETS();
  const sos = (phone) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL(`tel:${phone}`);
  };
  const callEmergencyContact = (phone) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL(`tel:${phone}`);
  };
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }, []);
  return (
    <View>
      <Modal
        style={{ margin: 0 }}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: SIZES.width,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: SIZES.m,
            borderTopRightRadius: SIZES.m,
            padding: SIZES.m,
            paddingBottom: insets.bottom + SIZES.m,
          }}
        >
          <View style={{ flex: 1, gap: SIZES.m }}>
            <TouchableOpacity
              style={[
                STYLES.button,
                {
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: SIZES.m,
                  justifyContent: "flex-start",
                },
              ]}
              onPress={() => sos(7620330512)}
            >
              <FontAwesome5 name="fire" size={SIZES.m} color={COLORS.primary} />
              <Text style={[STYLES.buttonText, { color: COLORS.primary }]}>
                save our souls
              </Text>
              <AntDesign
                name="caretright"
                size={SIZES.m}
                color={COLORS.primary}
                style={{ marginLeft: "auto" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                STYLES.button,
                {
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: SIZES.m,
                  justifyContent: "flex-start",
                },
              ]}
              onPress={() => callEmergencyContact(7620330512)}
            >
              <Ionicons name="ios-call" size={SIZES.m} color={COLORS.primary} />
              <Text style={[STYLES.buttonText, { color: COLORS.primary }]}>
                emergency contact
              </Text>
              <AntDesign
                name="caretright"
                size={SIZES.m}
                color={COLORS.primary}
                style={{ marginLeft: "auto" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmergencyModal;

const styles = StyleSheet.create({});
