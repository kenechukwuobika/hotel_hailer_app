import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalScreen from '../../views/app/modal/screens/modal.screen';

const ModalNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="modalScreen" component={ModalScreen} />
        </Stack.Navigator>
    )
}

export default ModalNavigator;