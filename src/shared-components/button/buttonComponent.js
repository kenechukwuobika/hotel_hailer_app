import React, { useEffect } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Text } from '../typography/Text';
import { clearLoading } from '../../redux/actions/authAction';


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

// const fadeAnim = new Animated.Value(0);

// Animated.timing(fadeAnim, {
//     toValue: 1,
//     duration: 10000,
// }).start();

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
    const { isLoading, clearLoading } = props;
    let backgroundColor = theme.colors.primary.default;
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
        <ButtonView onPress={onPress} disabled={props.disabled} backgroundColor={backgroundColor}>
            <Text options={{
                color: textColor
            }}>
                {displayChildren()}
            </Text>
        </ButtonView>
    )
}

const mapStateToProps = ({ auth }) => {
    const { isLoading } = auth;
    return { isLoading, auth }
}

const mapDispatchToProps = { 
    clearLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)