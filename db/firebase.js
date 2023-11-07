import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyBHC5At3g1jIAryTAYyxKqwBH-ba2VgtD4",
  authDomain: "fireapp-f19e0.firebaseapp.com",
  projectId: "fireapp-f19e0",
  storageBucket: "fireapp-f19e0.appspot.com",
  messagingSenderId: "185219767165",
  appId: "1:185219767165:web:79ecea968081698b9e8a14",
  measurementId: "G-TCS1C1570C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//  const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
