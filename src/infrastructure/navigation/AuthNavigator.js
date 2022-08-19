import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';

import WelcomeScreen from '../../views/auth/account/screens/WelcomeScreen';
import LoginScreen from '../../views/auth/account/screens/LoginScreen';
import RegisterScreen from '../../views/auth/account/screens/RegisterScreen';

export default AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="home" component={AppNavigator} />
        </Stack.Navigator>
    )
}