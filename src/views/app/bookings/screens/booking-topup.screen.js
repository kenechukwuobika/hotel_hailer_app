import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';

import { getOneBooking, clearOneBooking } from '../../../../redux/actions/bookingAction';

import { InputHollow, Label, CheckBox, Error } from '../../../../shared-components/Form';
import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { Spacer } from '../../../../shared-components/Spacer';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Aligner } from '../../../../shared-components/Aligner';
import Button from '../../../../shared-components/Button';
import BottomTab from '../../../../shared-components/bottom-tab.component';
import ModalPopup from '../../../../shared-components/modal.component';

const BookingTopUp = (props) => {
    const [amount, setAmount] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const theme = useTheme();
    const { navigation, booking, getOneBooking, clearOneBooking, route } = props;
    const { id } = route.params;

    useEffect(() => {
        getOneBooking(id);

        () => clearOneBooking();
    }, []);

    const onChangeAmount = text => {
        setAmount(text);
    }

    if(!booking) {
        return (<></>)
    }

    const onPay = () => {
        console.log('paid');
    }

    const onShowModal = () => {
        setModalVisible(true);
    }

    const onHideModal = () => {
        setModalVisible(false);
    }

    const onBack = () => {
        navigation.goBack();
    }
    
    return (
        <>
            <Container style={{backgroundColor: "white"}}>
                
                <TitleBar
                    navigation={navigation}
                    text = "Bookings"
                />

                <ScrollView style={{
                    marginBottom: 100
                }}>
                    <Spacer type="padding" position="horizontal" customSize={24}>
                        <Label>Enter amount</Label>
                        <InputHollow placeholder='₦5000' value={amount} onChangeText={onChangeAmount} />
                    </Spacer>
                </ScrollView>

                <BottomTab navigation={navigation}>
                    <Aligner justify="center">
                        <View style={{ width: 156 }}>
                            <Spacer type="margin" position="right" customSize={16}>
                                <Button
                                    onPress={onBack}
                                    variant="hollow"
                                    text="Back"
                                />
                            </Spacer>
                        </View>

                        <View style={{ width: 156 }}>
                            <Button
                                onPress={onShowModal}
                                variant="solid"
                                text="Make payment"
                            />
                        </View>
                    </Aligner>
                </BottomTab>

            </Container>
            <ModalPopup
                modalVisible = {modalVisible}
                onHideModal = {onHideModal}
                header = "Confirm Payment"
                body = "Are you sure you want to proceed with this payment?"
                confirmationBtnText = "Pay"
                cancelBtnText = "Cancel"
                onConfirm = {onPay}
            />
        </>
    );

}

const mapStateToProps = ({ bookingReducer }) => {
    const { booking } = bookingReducer;
    
    return {
        booking
    }
}

const mapDispatchToProps = {
    getOneBooking,
    clearOneBooking
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingTopUp);