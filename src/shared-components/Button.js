import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Text } from './Text';
import { clearLoading } from '../redux/actions/authAction';


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const ButtonView = styled(AnimatedTouchableOpacity)`
    background-color: ${props => props.backgroundColor};
    justify-content: center;
    align-items: center;
    height: ${RFValue(45)}px;
    width: 100%;
    border-radius: ${RFValue(8)}px
`;

const Button = (props) => {
    const theme = useTheme();
    const { type, isLoading, clearLoading, hollow } = props;
    
    if(hollow) {}

    let backgroundColor = theme.colors.primary.default;
    
    switch (type) {
        case "primary":
            backgroundColor = theme.colors.primary.default;
            break;
        case "error":
            backgroundColor = theme.colors.indicators.error;
            break;
        case "success":
            backgroundColor = theme.colors.indicators.success;
            break;
    
        default:
            break;
    }

    let textColor = theme.colors.white;

    useEffect(() => {
        clearLoading();
    }, [])

    const onPress = () => {
        props.onPress();
    }

    if(props.disabled){
        backgroundColor = theme.colors.greys.g4;
        textColor = "#A7A9BC";
    }

    const displayChildren = () => {
        
        if(!isLoading){
            return (
                <Text options={{ color: textColor }}>{props.text}</Text>
            );
        }

        return (
            <ActivityIndicator size="small" animating={true} color={`#A7A9BC`} />
        )
    }

    return (
        <ButtonView onPress={onPress} disabled={props.disabled} style={{backgroundColor: backgroundColor}}>
            <Text options={{
                color: textColor
            }}>
                {displayChildren()}
            </Text>
        </ButtonView>
    )
}

Button.defaultProps = {
    type: 'primary'
}

const mapStateToProps = ({ auth }) => {
    const { isLoading } = auth;
    return { isLoading, auth }
}

const mapDispatchToProps = { 
    clearLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)