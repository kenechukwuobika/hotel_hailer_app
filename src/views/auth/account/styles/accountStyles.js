import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get("window");

export const XmlContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    backgroundColor: transparent
`;

export const LoginContainer = styled.View`
    position: absolute;
    bottom: 25%;
    backgroundColor: transparent;
`;

export const optionsContainer = styled.View`
    backgroundColor: transparent;
    flex-direction: row;
    justify-content: space-between
`;

export const TextContainer = styled.View`
    backgroundColor: transparent;
    width: ${width >= 360 ? RFValue(75) : 100}%;
`;

export const CircleContainer = styled.View`
    flex-direction: row;
    postion: relative;
    align-items: center
`;

export const WhiteCircle = styled.View`
    borderRadius: 50px;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: white
`;

export const BlueCircle = styled.View`
    borderRadius: 50px;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: ${props => props.theme.colors.primary.p5};
    opacity: 0.6;
    margin-left: ${RFValue(-8)}px
`;