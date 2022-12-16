import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import { getNearbyProperty } from '../../../../redux/actions/propertyAction';
import { signoutAction } from '../../../../redux/actions/authAction';

import HorizontalList from '../components/horizontal-list.component';
import { Menu } from '../components/menu.component';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

import { PopularPropertiesCard, PopularPropertiesLoader } from '../components/popular-properties.component';
import { NearbyPropertiesCard, NearbyPropertiesLoader} from '../components/nearby-properties.component';
import TitleBreak from '../components/title-break.component';

import { 
    love,
    location as svgLocation
} from '../../../../../assets/icons';

const HomeScreen = (props) => {
    const { getNearbyProperty, nearbyProperties, navigation, isSignedIn, signoutAction } = props;
    const theme = useTheme();
    const menuItems = ['Hotel', 'Motel', 'Villa', 'Home', 'Apartment'];
    const [location, setLocation] = useState(null);

    const getPermissions = async () => {
        // try {
        //     const granted = await PermissionsAndroid.request(
        //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //       {
        //         'title': 'Example App',
        //         'message': 'Example App access to your location '
        //       }
        //     )

        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         console.log(navigation.geolocation)
        //         // props.navigator.geolocation.getCurrentPosition (
        //         //     (position) => { alert("value:" + position) },
        //         //     (error)    => { console.log(error) },
        //         //     {
        //         //       enableHighAccuracy: true,
        //         //       timeout:            20000,
        //         //       maximumAge:         10000
        //         //     }
        //         //   )
        //     //   console.log(PermissionsAndroid.RESULTS)
        //       alert("You can use the location");
        //     } else {
        //       console.log("location permission denied")
        //       alert("Location permission denied");
        //     }
        //   } catch (err) {
        //     console.warn(err)
        //   }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }
    
        let loc = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest
        });
        setLocation(loc)
    }

    useEffect(() => {
        getPermissions();
    }, [])

    useEffect(() => {
        if (!isSignedIn) {
            signoutAction();
            props.navigation.navigate("Welcome");
        }

    }, [isSignedIn])

    useEffect(() => {
        if(location){
            const { latitude, longitude } = location.coords;
            const unit = "km";
            const data = {lat: latitude, lng: longitude, unit};
            getNearbyProperty(data);
        }
    }, [location]);

    const selectProperty = (propertyId) => {
        navigation.push("propertyShow", { propertyId })
    }

    const seeAll = (type) => {
        navigation.push("propertyList", { title: "popular", type })
    }

    const renderPopularProducts = () => {
        const arr = [1,2,3,4,5]
        if(!nearbyProperties || nearbyProperties.length === 0) {
            return(
                <HorizontalList data={arr} scrollEnabled={false}>
                    <PopularPropertiesLoader />
                </HorizontalList>
            )
        }
        
        return(
            <HorizontalList data = {nearbyProperties}>
                <PopularPropertiesCard onPress={selectProperty} />
            </HorizontalList>
        )
    }

    const renderNearbyProducts = () => {
        const arr = [1,2,3,4,5]
        
        if(!nearbyProperties || nearbyProperties.length === 0) {
            return(
                <HorizontalList data={arr} scrollEnabled={false}>
                    <NearbyPropertiesLoader />
                </HorizontalList>
            )
        }
        
        return(
            <HorizontalList data = {nearbyProperties}>
                <NearbyPropertiesCard onPress={selectProperty} />
            </HorizontalList>
        )
    }

    return (
        <Container style={{backgroundColor: "white"}}>
            <TitleBar
                navigation={navigation}
                text = "Search Place"
                type = "search"
                marginBottom = {8}
            />

            <ScrollView>
                
                <Spacer type="padding" position="horizontal" customSize={24}>
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <Aligner justify="flex-start">
                            <Spacer type="margin" position="right" customSize={8}>
                                <SvgXml xml={svgLocation()} width={10} height={16} />
                            </Spacer>
                            <Text
                                options={{ color: theme.colors.primary.default }}
                            >
                                Around current location
                            </Text>
                        </Aligner>
                    </Spacer>
                </Spacer>

                <>
                    <Spacer type="padding" position="horizontal" customSize={24}>
                        <Menu menuItems={menuItems} />
                    </Spacer>

                    <TitleBreak title="Popular" onPress={() => seeAll("popular")} />

                    <Spacer type="padding" position="left" customSize={24}>
                        {renderPopularProducts()}
                    </Spacer>
                    
                    <Spacer type="margin" position="bottom" customSize={16} />

                    <TitleBreak title="Nearby" onPress={() => seeAll("popular")} />

                    <Spacer type="padding" position="left" customSize={24}>
                        {renderNearbyProducts()}
                    </Spacer>
                </>
            </ScrollView>
        </Container>
    );

}

const mapStateToProps = ({ propertyReducer }) => {
    const { nearbyProperties, isSignedIn } = propertyReducer;
    
    return {
        nearbyProperties,
        isSignedIn
    }
}

const mapDispatchToProps = {
    getNearbyProperty,
    signoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);