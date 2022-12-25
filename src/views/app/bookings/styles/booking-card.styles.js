import { TouchableOpacity, Image, View } from "react-native";
import styled from "styled-components";
import { RFValue } from 'react-native-responsive-fontsize';

export const BookingCardContainer = styled(TouchableOpacity)`
    border-radius: ${RFValue(8)}px;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(16)}px;
    background-color: ${props => props.theme.colors.greys.g5};
    marginBottom: ${RFValue(24)}px;
`;

export const BookingDetails = styled(View)`
    border-radius: ${RFValue(8)}px;
    padding-horizontal: ${RFValue(8)}px;
    padding-vertical: ${RFValue(8)}px;
    background-color: ${props => props.theme.colors.white};
    width: 100%;
`;

export const BookingDetailsImage = styled(Image)`
    border-radius: ${RFValue(8)}px;
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    marginRight: ${RFValue(8)}px;
`;

export const BookingDetailsLoader = styled(View)`
    width: ${RFValue(135)}px;
    height: ${RFValue(6)}px;
    background-color: ${props => props.theme.colors.greys.g5};
`;

export const BookingDetailsFiller = styled(View)`
    width: ${props => props.width}%;
    height: ${RFValue(6)}px;
    background-color: ${props => props.status === "completed" ? 
        props.theme.colors.indicators.successBorder : props.theme.colors.primary.default 
    };
`;

export const BookingDetailsStatus = styled(View)`
    border-radius: ${RFValue(80)}px;
    padding-horizontal: ${RFValue(10)}px;
    padding-vertical: ${RFValue(4)}px;
    background-color: ${props => props.backgroundColor};
`;

export const BookingCardBody = styled(View)`
    position: relative;
`;

// export const BookingCardOverlay = styled(View)`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-color: black;
//     z-index: 1;
//     opacity: 0.7;
// `;