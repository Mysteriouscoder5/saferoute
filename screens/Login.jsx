import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../db/firebase";
// import auth from "@react-native-firebase/auth";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("+91 762-033-0512");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  // const login = async () => {
  //   const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
  //   if (!confirmationResult) {
  //     return;
  //   }
  //   confirmationResult.confirm();
  // };
  // async function signInWithPhoneNumber(phoneNumber) {
  //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  if (!confirm) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <TouchableOpacity onPress={() => confirmCode()}>
        <Text>confirm code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
