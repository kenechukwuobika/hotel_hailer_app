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
    justify-content: center;
    align-items: center;
    height: ${RFValue(45)}px;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    border-radius: ${RFValue(8)}px
`;

const defaultStyles = () => `
    justify-content: center;
    align-items: center;
    height: ${RFValue(45)}px;
    width: 100%;
`

const solid = (backgroundColor) => `
    background-color: ${backgroundColor};
    border-radius: ${RFValue(8)}px
`;

const hollow = (backgroundColor) => `
    border-radius: ${RFValue(8)}px;
    background-color: transparent;
    border-color: ${backgroundColor};
    border-width: 2px;
`;

const variants = {
    solid,
    hollow
}

const ButtonStyle = styled(TouchableOpacity)`
    ${() => defaultStyles()}
    ${(props) => variants[props.variant](props.backgroundColor)}
`;

const Button = (props) => {
    const theme = useTheme();
    const { type, isLoading, clearLoading, variant } = props;

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

    let textColor = variant === 'solid' ? theme.colors.white : theme.colors.primary.default;

    useEffect(() => {
        clearLoading();
    }, [])

    const onPress = () => {
        props.onPress();
    }

    if(variant === 'solid') {
        if(props.disabled){
            backgroundColor = theme.colors.greys.g4;
            textColor = "#A7A9BC";
        }
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
        <ButtonStyle onPress={onPress} disabled={props.disabled} backgroundColor={backgroundColor} {...props}>
            <Text options={{
                color: textColor
            }}>
                {displayChildren()}
            </Text>
        </ButtonStyle>
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