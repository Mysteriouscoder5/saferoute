import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, {
  Geojson,
  PROVIDER_GOOGLE,
  AnimatedRegion,
  MarkerAnimated,
  Animated,
} from "react-native-maps"; // Import Geojson from 'react-native-maps'
import EmergencyModal from "../components/home/EmergencyModal";
import { mapData } from "../constants/mapData"; // Adjust the import path as needed
import { COLORS, INSETS, SHADOWS, SIZES, STYLES } from "../theme";

// const mapData = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [
//           [
//             [0, 0],
//             [100, 0],
//             [100, 100],
//             [0, 100],
//             [0, 0]
//           ]
//         ]
//       }
//     }
//   ]
// };

const Home = () => {
  const insets = INSETS();
  const [emergencyModal, setEmergencyModal] = useState(false);
  const mapRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: 18.531512166020992,
    longitude: 73.86697718917728,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const fitToCoordinates = () => {
    const coordinates = [
      {
        latitude: 18.53196890882775,
        longitude: 73.86680242091813,
      },
      {
        latitude: 18.53196841144322,
        longitude: 73.86727889859199,
      },
      {
        latitude: 18.531048267417844,
        longitude: 73.86679258889967,
      },
      {
        latitude: 18.53104418887618,
        longitude: 73.86680737780537,
      },
    ];
    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: {
        right: SIZES.width / 10,
        bottom: SIZES.height / 10,
        left: SIZES.width / 10,
        top: SIZES.height / 10,
      },
    });
  };

  useEffect(() => {
    fitToCoordinates();
  }, []);
  
  //   useEffect(() => {
  //     addDoc(collection(db, "users"), { username: "prajwal" });
  //   }, []);

  return (
    <View style={STYLES.container}>
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
        <TouchableOpacity
          onPress={() => {
            fitToCoordinates();
          }}
        >
          <MaterialIcons name="gps-fixed" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* animated map view */}
      <Animated
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={new AnimatedRegion(region)}
      >
        <Geojson // Use Geojson component
          geojson={mapData}
          strokeColor="red" // Adjust strokeColor and other style properties as needed
          fillColor="rgba(255, 0, 0, 0.5)"
        />
        {/* <MarkerAnimated
          draggable
          coordinate={
            new AnimatedRegion({
              latitude: 18.531662418844746,
              longitude: 73.86693117007346,
            })
          }
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate.latitude);
            console.log(e.nativeEvent.coordinate.longitude);
          }}
        /> */}
      </Animated>
      {/* animated map view */}

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
