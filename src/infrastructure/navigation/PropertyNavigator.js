import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../views/app/explore/screens/home.screen';
import PropertyScreen from '../../views/app/explore/screens/property-show.screen';

const PropertyNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="homeScreen" component={HomeScreen} />
            <Stack.Screen name="propertyScreen" component={PropertyScreen} />
        </Stack.Navigator>
    )
}

export default PropertyNavigator;