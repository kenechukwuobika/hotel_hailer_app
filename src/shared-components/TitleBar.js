import styled, { useTheme } from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

import { Spacer } from './Spacer';
import { Aligner } from './Aligner';
import { Text } from './Text';

import { arrowLeft, filter } from '../../assets/icons';

import { showModal, hideModal } from '../../src/redux/actions/modalAction';

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

const mapDispatchToProps = {
    showModal,
    hideModal
}

export const TitleBar = connect(null, mapDispatchToProps)((props) => {
    const { navigation, type, link, showModal, hideModal, backBtnDisabled, marginBottom } = props;
    const theme = useTheme();
    const canGoBack = navigation.canGoBack();

    const goBack = () => {
        const canGoBack = navigation.canGoBack();
        if(canGoBack){
            navigation.goBack();
        }
    }

    const goToSearch = () => {
        if(!link) {
            return;
        }
        navigation.push("modal", { type: "search" })
    }

    const displayBar = () => {
        if(type === "search") {
            return(
                <TitleBarStyle>
                    <Aligner justify="center" align="center" style={{ flex: 1 }}>
                        {
                            canGoBack && backBtnDisabled &&
                            <Spacer type="margin" position="right" customSize={8}>
                                <TouchableOpacity onPress={goBack}>
                                    <SvgXml xml={arrowLeft()} />
                                </TouchableOpacity>
                            </Spacer>
                        }
                        <TouchableOpacity onPress={goToSearch} style={{ flex: 1 }}>
                            <Text style={{ color: theme.colors.greys.g3 }}>{props.text}</Text>
                        </TouchableOpacity>
                    </Aligner>

                    <TouchableOpacity onPress={() => showModal("filter")}>
                        <SvgXml xml= {filter()} />
                    </TouchableOpacity>
                </TitleBarStyle>
            )
        }
        
        return (
            <View style={{
                position: "relative",
            }}>
                {
                    canGoBack && !backBtnDisabled &&
                    <TouchableOpacity onPress={goBack} style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                    }} >
                        <SvgXml xml={arrowLeft()} />
                    </TouchableOpacity>
                }
                <Aligner justify="center" align="center">
                    <Text options={{ fontFamily: theme.fontFamilies.ralewayExtraBold }}>{props.text}</Text>
                </Aligner>
            </View>
        )
    }

    return (
        <Spacer type="padding" position="horizontal" customSize={24}>
            <Spacer type="margin" position="bottom" customSize={marginBottom}>
                {displayBar()}
            </Spacer>
        </Spacer>
    )
})

TitleBar.defaultProps = {
    link: true,
    marginBottom: 24
};