import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { COLORS, icons, images, SIZES } from '../constants';
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from '../components';

// Generate action for hamburger menu and user's avatar
// Also give functionality to "show all" buttons

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} />,
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} />,
					headerTitle: '',
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push(`/search/${searchTerm}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
