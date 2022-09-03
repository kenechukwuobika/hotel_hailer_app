import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import { RFValue } from 'react-native-responsive-fontsize';

export const PopularPropertyContainer = styled(TouchableOpacity)`
    width: ${RFValue(242)}px;
    height: ${RFValue(359)}px;
    border-radius: ${RFValue(8)}px;
    padding-horizontal: ${RFValue(8)}px;
    padding-vertical: ${RFValue(8)}px;
`;

export const PopularPropertyImage = styled(Image)`
    width: 100%;
    height: ${RFValue(274)}px;
    border-radius: ${RFValue(8)}px
`;

export const NearbyPropertyContainer = styled(TouchableOpacity)`
    width: ${RFValue(242)}px;
    height: ${RFValue(113)}px;
    background-color: 'yellow',
    border-radius: ${RFValue(8)}px;
    padding-horizontal: ${RFValue(8)}px;
    padding-vertical: ${RFValue(8)}px;
`;

export const NearbyPropertyImage = styled(Image)`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: ${RFValue(6)}px
`;

export const SinglePropertyImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: ${RFValue(8)}px
`;

export const SinglePropertyImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(401)}px;
    position: relative
`;

export const PropertyContentContainer = styled.View`
    width: 100%;
    height: 100%
    position: absolute;
    padding: ${RFValue(16)}px;
`;

export const BulletMarker = styled.View`
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    background-color: ${props => props.theme.colors.white};
    border-radius: ${RFValue(100)}px;
`;

export const PropertyIconContainer = styled.View`
    position: relative;
    padding-horizontal: ${RFValue(8)}px;
    padding-vertical: ${RFValue(8)}px;
    background-color: "rgba(0,0,0,0.2)";
    border-radius: ${RFValue(100)}px;
`;

export const PropertyTextContainer = styled.View`
    width: ${RFValue(154)}px;
`;

export const ReviewSummaryCard = styled.View`
    width: 100%;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(16)}px;
    background-color: ${props => props.theme.colors.greys.g5};
    border-radius: ${RFValue(8)}px;
`;

export const ReviewSummaryImage = styled.View`
    width: ${RFValue(24)}px;
    height: ${RFValue(24)}px;
    background-color: red;
    border-color: ${props => props.theme.colors.white};
    border-width: ${RFValue(1)}px;
    border-radius: ${RFValue(100)}px;
    margin-right: ${RFValue(-10)}px;
`;