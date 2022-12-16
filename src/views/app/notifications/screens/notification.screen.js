import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';

import { getNotifications } from '../../../../redux/actions/notificationAction';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { TitleBar } from '../../../../shared-components/TitleBar';

const NotificationScreen = (props) => {
    const { navigation, getNotifications,  notifications } = props;
    const theme = useTheme();

    const displayNotifications = () => {
        if(notifications) {
            return notifications.map(notification => {
                console.log(notification.text)
                return (
                    <Spacer key={notification.id} type="margin" position="bottom" customSize={20}>
                        <Text>{notification.text}</Text>
                        <Text>{notification.createdAt}</Text>
                    </Spacer>
                );
            })
        }
        
        return (<></>)
    }

    useEffect(() => {
        getNotifications();
    }, []);

    return (
        <Container style={{backgroundColor: "white"}}>

            <TitleBar
                navigation={navigation}
                text = "Notifications"
                backBtnDisabled = {true}
            />

            <Spacer type="padding" position="horizontal" customSize={124} >
                {displayNotifications()}
            </Spacer>

        </Container>
    );

}

const mapStateToProps = ({ notificationReducer }) => {
    const { notifications } = notificationReducer;
    
    return {
        notifications
    }
}

const mapDispatchToProps = {
    getNotifications
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);