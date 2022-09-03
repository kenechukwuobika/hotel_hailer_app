import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SafeArea from '../../shared-components/SafeArea';

export default CustomNavigator = (props) => {
    
    const authenticated = true;

    return(
        <NavigationContainer>
            { authenticated ? 
                <SafeArea>
                    <AppNavigator />
                </SafeArea>
                :
                <AuthNavigator />
            }
        </NavigationContainer>
    )
}