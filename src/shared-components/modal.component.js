import React, { useEffect, useState } from 'react';
import Modal from "react-native-modal";
import { View, TouchableOpacity} from "react-native";
import styled from "styled-components";

import { Text } from './Text';
import { Container } from './Container';
import { Spacer } from './Spacer';
import { TitleBar } from './TitleBar';
import { Aligner } from './Aligner';
import Button from './Button';

const ModalContainer = styled(View)`
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    height: 40%;
    width: 100%;
    bottom: 0
`;

const ModalHeader = styled(View)`
    paddingVertical: 20px;
    borderBottomWidth: 1px
`;

const ModalBody = styled(View)`
    paddingVertical: 20px;
    paddingHorizontal: 20px;
`;

const ModalButtons = styled(View)`
    position: absolute;
    bottom: 0;
    width: 100%;
    paddingHorizontal: 20px;
    paddingVertical: 10px;
`;

const ModalPopup = (props) => {

    const onHideModal = () => {
        props.onHideModal();
    }

    const onConfirm = () => {
        props.onConfirm();
    }

    return (
            <Modal style={{ paddingVertical: 0,  margin: 0 }} isVisible={props.modalVisible}>
                <TouchableOpacity onPress={onHideModal} style={{ flex: 1 }}>
                </TouchableOpacity>

                <ModalContainer>
                   <ModalHeader>
                        <Aligner>
                            <Text>{props.header}</Text>
                        </Aligner>
                    </ModalHeader> 
                
                   <ModalBody>
                        <Aligner align="center">
                            <Text>{props.body}</Text>
                        </Aligner>
                    </ModalBody> 

                    <ModalButtons>
                        <Aligner>

                            <View style={{ width: 156 }}>
                                <Button
                                    variant = "hollow"
                                    text = {props.cancelBtnText}
                                    onPress={onHideModal}
                                />
                            </View>

                            <Spacer type="margin" position="right" customSize={20}>
                            </Spacer>

                            <View style={{ width: 156 }}>
                                <Button
                                    variant = "solid"
                                    text = {props.confirmationBtnText}
                                    onPress={onConfirm}
                                />
                            </View>
                        </Aligner>
                    </ModalButtons>
                   
                </ModalContainer>
            </Modal>
    )
}

export default ModalPopup;