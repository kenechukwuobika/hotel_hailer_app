import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTheme } from 'styled-components';

import { PropertyImageCard } from '../components/property-image-card.component';
import { ReviewSummary } from '../components/review-summary.component';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';

import { getOneProperty } from '../../../../redux/actions/propertyAction';
import { ScrollView } from 'react-native';

const PropertyScreen = (props) => {
    const theme = useTheme();
    const { navigation, route, getOneProperty, property } = props;
    const { propertyId } = route.params;

    useEffect(() => {
        if(propertyId){
            getOneProperty(propertyId);
        }
    }, [propertyId]);

    if(!property){
        return (<></>)
    }

    return(
        <Container style={{backgroundColor: "white"}}>
            <Spacer type="margin" position="bottom" customSize={24}>
                <TitleBar
                    navigation={navigation}
                    text = "Popular"
                />
            </Spacer>

            <ScrollView>
                <Spacer type="padding" position="horizontal" customSize={24}>
                    <PropertyImageCard property={property} />
                    
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <ReviewSummary
                            ratingsAverage={property.ratingsAverage}
                            ratingsQuantity={property.ratingsQuantity}
                            // userImages={property.userImages}
                        />
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Text options={{
                            fontFamily: theme.fontFamilies.ralewayExtraBold
                        }}>About</Text>
                    </Spacer>

                    <Spacer>
                        <Text>{property.shortDesc}</Text>
                    </Spacer>
                </Spacer>
            </ScrollView>

        </Container>
    )
}

const mapStateToProps = ({ propertyReducer }) => {
    const { property } = propertyReducer;
    
    return {
        property
    }
}

const mapDispatchToProps = {
    getOneProperty
}


export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);