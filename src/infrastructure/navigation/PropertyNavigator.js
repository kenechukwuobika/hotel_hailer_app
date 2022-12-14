import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../views/app/explore/screens/home.screen';
import propertyList from '../../views/app/explore/screens/property-list.screen';
import propertyShow from '../../views/app/explore/screens/property-show.screen';
import ModalScreen from '../../views/app/modal/screens/modal.screen';

const PropertyNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="homeScreen" component={HomeScreen} />
            <Stack.Screen name="propertyList" component={propertyList} />
            <Stack.Screen name="propertyShow" component={propertyShow} />
            <Stack.Screen name="modal" component={ModalScreen} />
        </Stack.Navigator>
    )
}

export default PropertyNavigator;