import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import { getNearbyProperty } from '../../../../redux/actions/propertyAction';

import VerticalList from '../components/vertical-list.component';
import { Menu } from '../components/menu.component';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

import { PopularPropertiesCard, PopularPropertiesLoader } from '../components/popular-properties.component';
import { NearbyPropertiesCard, NearbyPropertiesLoader} from '../components/nearby-properties.component';
import TitleBreak from '../components/title-break.component';

import { hideBottomBar } from '../../../../utils/hideBottomBar';

import { 
    love,
    location as svgLocation
} from '../../../../../assets/icons';

const HomeScreen = (props) => {
    const { getNearbyProperty, nearbyProperties, navigation, route } = props;
    const { title, type } = route.params;
    const theme = useTheme();

    useEffect(() => {
        hideBottomBar(navigation);
    }, []);

    const selectProperty = (propertyId) => {
        navigation.push("propertyShow", { propertyId })
    }

    const renderPopularProducts = () => {
        const arr = [1,2,3,4,5]
        if(!nearbyProperties || nearbyProperties.length === 0) {
            return(
                <VerticalList data={arr} scrollEnabled={false}>
                    <PopularPropertiesLoader />
                </VerticalList>
            )
        }
        
        return(
            <VerticalList data = {nearbyProperties}>
                <PopularPropertiesCard onPress={selectProperty} />
            </VerticalList>
        )
    }

    return (
        <Container style={{backgroundColor: "white"}}>
            <TitleBar
                navigation={navigation}
                text = {title}
            />

            <ScrollView>

                <TitleBreak title="Popular" />

                <Spacer type="padding" position="left" customSize={24}>
                    {renderPopularProducts()}
                </Spacer>
                
                <Spacer type="margin" position="bottom" customSize={16} />
            </ScrollView>
        </Container>
    );

}

const mapStateToProps = ({ propertyReducer }) => {
    const { nearbyProperties } = propertyReducer;
    
    return {
        nearbyProperties
    }
}

const mapDispatchToProps = {
    getNearbyProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);