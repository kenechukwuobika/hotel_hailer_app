import { Text, TextInput, TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { SvgXml } from 'react-native-svg';
import { checkmarkSvg } from '../../../assets/svg/checkmarkSvg'
import { RFValue } from 'react-native-responsive-fontsize';

export const Label = styled(Text)`
    fontFamily: ${props => props.theme.fontFamilies.mulish}
    font-size: ${props => props.theme.fontSizes.label}px;
    color: ${({ theme }) => theme.colors.greys.g1}
`;

export const InputHollow = styled(TextInput)`
    border-bottom-width: ${1}px;
    border-bottom-color: ${props => props.theme.colors.greys.g3};
    font-size: ${props => props.theme.fontSizes.body}px;
`;

export const InputStyle = styled(TextInput)`
    background-color: ${props => props.theme.colors.greys.g5};
    font-size: ${props => props.theme.fontSizes.body}px;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(11)}px;
    font-size: ${RFValue(14)}px;
    border-radius: ${RFValue(8)}px
`;

export const Input = (props) => {
    const theme = useTheme();
    return (
        <InputStyle
            placeholder={props.placeholder}
            placeholderTextColor = {theme.colors.greys.g3}
        />
    )
}

export const Error = styled(Text)`
    color: ${props => props.theme.colors.indicators.error};
    font-size: ${props => props.theme.fontSizes.caption}px;
`;

const CheckBoxStyle = styled.View`
    border-color: ${props => props.isChecked ? "#0094FF" : "#E5E3ED"};
    background-color: ${props => props.isChecked ? "#0094FF" : "transparent"};
    border-width: ${RFValue(2)}px;
    width: ${RFValue(16)}px;
    height: ${RFValue(16)}px;
    border-radius: ${RFValue(3)}px
`;

export const CheckBox = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <CheckBoxStyle {...props}>
                {props.isChecked && <SvgXml height="100%" width="100%" xml={checkmarkSvg} />}
            </CheckBoxStyle>
        </TouchableOpacity>
    )
}