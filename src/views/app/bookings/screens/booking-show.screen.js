import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import { View, ScrollView } from 'react-native';

import { getOneBooking, clearOneBooking } from '../../../../redux/actions/bookingAction';
import BookingCard from '../components/booking-card.component';

import { BookingInfoContainer } from '../styles/booking-info.styles ';

import exclamationFull from '../../../../../assets/icons/exclamationFull';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { Spacer } from '../../../../shared-components/Spacer';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Aligner } from '../../../../shared-components/Aligner';
import Button from '../../../../shared-components/Button';
import BottomTab from '../../../../shared-components/bottom-tab.component';

const BookingShow = (props) => {
    const { navigation, booking, getOneBooking, clearOneBooking, route } = props;
    const { id } = route.params;
    const theme = useTheme();

    useEffect(() => {
        getOneBooking(id);

        () => clearOneBooking();
    }, []);

    if(!booking) {
        return (<></>)
    }

    return (
        <Container style={{backgroundColor: "white"}}>

            <TitleBar
                navigation={navigation}
                text = "Bookings"
            />

            <ScrollView style={{
                marginBottom: 100
            }}>
                <Spacer type="padding" position="horizontal" customSize={24} >
                    <BookingCard item={booking} onPress={() => console.log('keiks')} />

                    <Spacer type="margin" position="bottom" customSize={24} >
                        <Text options={{
                            fontFamily: theme.fontFamilies.ralewayExtraBold
                        }}>Contact the property owner</Text>

                        <Text variant="caption">Discuss changes to your booking or enquire about payments and refunds</Text>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={24} >
                        <Text>Phone number</Text>
                        <Text options={{
                            fontFamily: theme.fontFamilies.ralewayExtraBold,
                            color: theme.colors.primary.default,
                        }}>+234 (0) 801 234 5678</Text>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={24} >
                        <Text>E-mail</Text>
                        <Text options={{
                            fontFamily: theme.fontFamilies.ralewayExtraBold,
                            color: theme.colors.primary.default,
                        }}>hotel@gmail.com</Text>
                    </Spacer>


                    <BookingInfoContainer>
                        <Aligner align="flex-start">
                            <Spacer type="margin" position="right" customSize={8}>
                                <SvgXml xml={exclamationFull()} />
                            </Spacer>

                            <Text options={{
                                fontFamily: theme.fontFamilies.mulish,
                                color: theme.colors.primary.default,
                            }}>We're here to help answer your questions and manage your booking. Click here to contact customer service</Text>
                        </Aligner>
                    </BookingInfoContainer>
                </Spacer>
            </ScrollView>

            <BottomTab navigation={navigation}>
                <Aligner justify="center">
                    <View style={{ width: 156 }}>
                        <Spacer type="margin" position="right" customSize={16}>
                            <Button
                                variant="hollow"
                                text="Cancel Booking"
                            />
                        </Spacer>
                    </View>

                    <View style={{ width: 156 }}>
                        <Button
                            variant="solid"
                            text="Quick Top-up"
                        />
                    </View>
                </Aligner>
            </BottomTab>

        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow);