import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Geojson } from 'react-native-maps'; // Import Geojson from 'react-native-maps'
import EmergencyModal from '../components/home/EmergencyModal';
import { mapData } from '../constants/mapData'; // Adjust the import path as needed
import { COLORS, INSETS, SHADOWS, SIZES, STYLES } from '../theme';

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
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
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
							fontFamily: 'bolder',
							fontSize: SIZES.l,
							textTransform: 'uppercase',
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
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 18.531512166020992,
					longitude: 73.86697718917728,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
					zoom: 15,
				}}
			>
				<Geojson // Use Geojson component
					geojson={mapData}
					strokeColor="red" // Adjust strokeColor and other style properties as needed
					fillColor="rgba(255, 0, 0, 0.5)"
				/>
			</MapView>
			<View
				style={{
					position: 'absolute',
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
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							gap: SIZES.m,
						},
						SHADOWS.small,
					]}
				>
					<View style={{ flex: 1 }}>
						<Text
							style={{
								fontFamily: 'semibold',
								color: COLORS.white,
								textTransform: 'capitalize',
								fontSize: SIZES.m,
							}}
						>
							turn right
						</Text>
						<Text
							style={{
								fontFamily: 'medium',
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
