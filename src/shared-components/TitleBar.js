import styled, { useTheme } from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

import { Spacer } from './Spacer';
import { Aligner } from './Aligner';
import { Text } from './Text';

import { arrowLeft, filter } from '../../assets/icons';

const TitleBarStyle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.greys.g5};
    font-size: ${props => props.theme.fontSizes.body}px;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(11)}px;
    font-size: ${RFValue(14)}px;
    border-radius: ${RFValue(8)}px
`;

export const TitleBar = (props) => {
    const { navigation, type } = props;
    const theme = useTheme();

    const goBack = () => {
        const canGoBack = navigation.canGoBack();
        if(canGoBack){
            navigation.goBack();
        }
    }

    const displayBar = () => {
        if(type === "search") {
            return(
                <TitleBarStyle>
                    <Aligner justify="center" align="center">
                        <Spacer type="margin" position="right" customSize={8}>
                            <TouchableOpacity onPress={goBack}>
                                <SvgXml xml={arrowLeft()} />
                            </TouchableOpacity>
                        </Spacer>
                        <Text>{props.text}</Text>
                    </Aligner>

                    <TouchableOpacity>
                        <SvgXml xml= {filter()} />
                    </TouchableOpacity>
                </TitleBarStyle>
            )
        }
        
        return (
            <View style={{
                position: "relative",
            }}>
                <TouchableOpacity onPress={goBack} style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                }} >
                    <SvgXml xml={arrowLeft()} />
                </TouchableOpacity>
                <Aligner justify="center" align="center">
                    <Text options={{ fontFamily: theme.fontFamilies.ralewayExtraBold }}>{props.text}</Text>
                </Aligner>
            </View>
        )
    }

    return (
        <Spacer type="margin" position="top" customSize={24}>
             <Spacer type="padding" position="horizontal" customSize={24}>
                <Spacer type="margin" position="bottom" customSize={8}>
                    <TouchableOpacity>
                        {displayBar()}
                    </TouchableOpacity>
                </Spacer>
             </Spacer>
        </Spacer>
    )
}