import { Image, View } from "react-native";
import styled from "styled-components";
import { RFValue } from 'react-native-responsive-fontsize';

export const BookingInfoContainer = styled(View)`
    border-radius: ${RFValue(4)}px;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(16)}px;
    border-width: ${RFValue(1)}px;
    background-color: ${props => props.theme.colors.primary.p4};
    border-color: ${props => props.theme.colors.primary.default};
    marginBottom: ${RFValue(24)}px;
`;