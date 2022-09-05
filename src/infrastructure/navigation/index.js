import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SafeArea from '../../shared-components/SafeArea';

const CustomNavigator = (props) => {
    
    const getToken = async () => {
        const authToken = await AsyncStorage.getItem("authToken");
        return authToken
    }

    return(
        <NavigationContainer>
            { getToken() ? 
                <SafeArea>
                    <AppNavigator />
                </SafeArea>
                :
                <AuthNavigator />
            }
        </NavigationContainer>
    )
}

const mapStateToProps = ({ auth }) => {
    const { token, user } = auth;
    
    return {
        token,
        user
    }
}

export default connect(mapStateToProps)(CustomNavigator);