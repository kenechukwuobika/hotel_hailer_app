import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import { getNearbyProperty } from '../../../../redux/actions/propertyAction';

import ScrollList from '../../../../shared-components/scroll-list.component';
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
    const { getNearbyProperty, nearbyProperties, navigation } = props;
    const theme = useTheme();
    const menuItems = ['Hotel', 'Motel', 'Villa', 'Home', 'Apartment'];
    const [location, setLocation] = useState(null);

    return (
        <Container style={{backgroundColor: "white"}}>
            <TitleBar
                navigation={navigation}
                text = "Search Place"
                type = "search"
                link = {false}
            />

            <Text>Recent Searches</Text>
            
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