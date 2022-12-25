import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';

import { getNearbyProperty } from '../../../../redux/actions/propertyAction';

import ScrollList from '../../../../shared-components/scroll-list.component';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

import { PopularPropertiesCard, PopularPropertiesLoader } from '../components/popular-properties.component';
import { NearbyPropertiesCard, NearbyPropertiesLoader} from '../components/nearby-properties.component';
import TitleBreak from '../components/title-break.component';

import { hideBottomBar } from '../../../../utils/hideBottomBar';

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
                <ScrollList data={arr} scrollEnabled={false}>
                    <PopularPropertiesLoader />
                </ScrollList>
            )
        }
        
        return(
            <ScrollList data = {nearbyProperties}>
                <PopularPropertiesCard onPress={selectProperty} />
            </ScrollList>
        )
    }

    return (
        <Container style={{backgroundColor: "white"}}>
            <TitleBar
                navigation={navigation}
                text = {title}
            />

                <Spacer type="padding" position="left" customSize={24}>
                    {renderPopularProducts()}
                </Spacer>
                
                <Spacer type="margin" position="bottom" customSize={16} />
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