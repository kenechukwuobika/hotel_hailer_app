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
import { capitalize, formatDate } from '../../../../utils/Formatters';

const NotificationScreen = (props) => {
    const { navigation, getNotifications,  notifications } = props;
    const theme = useTheme();

    const displayNotifications = () => {
        if(notifications) {
            return notifications.map(notification => {
                return (
                    <Spacer key={notification.id} type="margin" position="bottom" customSize={20}>
                        <Aligner justify="space-between">
                            <Spacer type="margin" position="right" customSize={8}>
                                <View style={{
                                    backgroundColor: "#E7E7ED",
                                    borderRadius: 50,
                                    width: 48,
                                    height: 48,
                                }}>

                                </View>
                            </Spacer>

                            <View style={{
                                flex: 1,
                            }}>
                                <Spacer type="margin" position="bottom" customSize={2}>
                                    <Text>{notification.text}</Text>
                                    
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate(`BookingShow`, { id: notification.payload.reference })
                                    }}>
                                        <Text
                                            variant="caption"
                                            options={{
                                                fontFamily: theme.fontFamilies.mulishBold,
                                                color: theme.colors.primary.default,
                                                textDecoration: 'underline',
                                                textTransform: 'capitalize'
                                            }}
                                        >
                                            {notification.payload.message}
                                        </Text>
                                    </TouchableOpacity>
                                </Spacer>
                                
                                <Text>{formatDate(notification.createdAt, false)}</Text>
                            </View>
                        </Aligner>
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

            <ScrollView>
                <Spacer type="padding" position="horizontal" customSize={24} >
                    {displayNotifications()}
                </Spacer>
            </ScrollView>

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