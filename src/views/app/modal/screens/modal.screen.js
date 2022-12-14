import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import { showModal, hideModal } from '../../../../redux/actions/modalAction';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

import { Filter } from '../components/filter.component';

const ModalScreen = (props) => {
    const { displayModal, modalType, hideModal } = props;
    const theme = useTheme();
    console.log(modalType)
    
    const showMods = () => {
        switch (modalType) {
            case "filter":
                return (<Filter />);
        
            default:
                break;
        }
    }

    return (
        <Container style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            display: displayModal ? "flex" : "none",
        }}>
            <View style={{
                flex: 1
            }}>
                <Spacer type="padding" position="horizontal" customSize={24}>
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <TouchableOpacity onPress={hideModal}>
                            <Text>Hide</Text>
                        </TouchableOpacity>
                    </Spacer>
                    <View>
                        {showMods()}
                    </View>
                </Spacer>
            </View>
            
        </Container>
    );

}

const mapStateToProps = ({ modalReducer }) => {
    const { displayModal, modalType } = modalReducer;
    
    return {
        displayModal, modalType
    }
}

const mapDispatchToProps = {
    showModal,
    hideModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);