import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';

import WelcomeScreen from '../../views/auth/account/screens/WelcomeScreen';
import LoginScreen from '../../views/auth/account/screens/LoginScreen';
import RegisterScreen from '../../views/auth/account/screens/RegisterScreen';

export default AuthNavigator = (props) => {
    
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={AppNavigator} />
        </Stack.Navigator>
    )
}