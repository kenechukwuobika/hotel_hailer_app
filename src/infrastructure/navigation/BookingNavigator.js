import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../views/app/explore/screens/home.screen';
import BookingList from '../../views/app/bookings/screens/booking-list.screen';
import BookingShow from '../../views/app/bookings/screens/booking-show.screen';

const BookingNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="BookingList" component={BookingList} />
            <Stack.Screen name="BookingShow" component={BookingShow} />
        </Stack.Navigator>
    )
}

export default BookingNavigator;