import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBookings } from '../../../../redux/actions/bookingAction';
import BookingCard from '../components/booking-card.component';

import ScrollList from '../../../../shared-components/scroll-list.component';
import { Container } from '../../../../shared-components/Container';
import { Spacer } from '../../../../shared-components/Spacer';
import { TitleBar } from '../../../../shared-components/TitleBar';

const BookingList = (props) => {
    const { navigation, getBookings, bookings } = props;

    useEffect(() => {
        getBookings();
    }, []);

    const selectBooking = (id) => {
        navigation.push("BookingShow", { id })
    }

    return (
        <Container style={{backgroundColor: "white"}}>

            <TitleBar
                navigation={navigation}
                text = "Bookings"
                backBtnDisabled = {true}
            />

            <Spacer type="padding" position="horizontal" customSize={24} >
                <ScrollList data={bookings}>
                    <BookingCard onPress={selectBooking} />
                </ScrollList>
            </Spacer>

        </Container>
    );

}

const mapStateToProps = ({ bookingReducer }) => {
    const { bookings } = bookingReducer;
    
    return {
        bookings
    }
}

const mapDispatchToProps = {
    getBookings
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);