import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default CustomNavigator = (props) => {
    
    const authenticated = true;

    return(
        <NavigationContainer>
            { authenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}