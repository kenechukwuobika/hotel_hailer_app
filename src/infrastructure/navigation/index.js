import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import { getSavedItems } from '../../redux/actions/wishListAction';

const CustomNavigator = (props) => {
    const { getSavedItems, savedItems } = props;
    const [ token, setToken ] = useState(null);


    return(
        <>
            <NavigationContainer>    
                <AuthNavigator />
            </NavigationContainer>
        </>
    )
}

const mapStateToProps = ({ wishListReducer }) => {
    const { savedItems } = wishListReducer;
    
    return {
        savedItems
    }
}

const mapDispatchToProps = {    
    getSavedItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavigator);