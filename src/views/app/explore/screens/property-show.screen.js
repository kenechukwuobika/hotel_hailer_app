import { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from 'styled-components';
import { SvgXml } from 'react-native-svg';

import { PropertyImageCard } from '../components/property-image-card.component';
import { ReviewSummary } from '../components/review-summary.component';

import { Text } from '../../../../shared-components/Text';
import { Container } from '../../../../shared-components/Container';
import { TitleBar } from '../../../../shared-components/TitleBar';
import { Spacer } from '../../../../shared-components/Spacer';
import Expandable from '../components/expandable.component';

import { getOneProperty, clearOneProperty } from '../../../../redux/actions/propertyAction';
import { getPropertyReview } from '../../../../redux/actions/reviewAction';

import Button from '../../../../shared-components/Button';
import { Aligner } from '../../../../shared-components/Aligner';
import BottomTab from '../../../../shared-components/bottom-tab.component';

import { caretRight } from '../../../../../assets/icons';
import { formatPrice } from '../../../../utils/Formatters';

const propertyShow = (props) => {
    const theme = useTheme();
    const [textHeight, setTextHeight] = useState(0);
    const { navigation, route, getOneProperty, clearOneProperty, property, getPropertyReview, reviews } = props;
    const { propertyId } = route.params;

    useEffect(() => {
        if(propertyId){
            getOneProperty(propertyId);
            getPropertyReview(propertyId, {fields: "user"});
        }

        return () => clearOneProperty();
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

            <ScrollView style={{
                marginBottom: 50
            }}>
                <Spacer type="padding" position="horizontal" customSize={24}>
                    <PropertyImageCard property={property} />
                    
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <ReviewSummary
                            ratingsAverage={property.ratingsAverage}
                            ratingsQuantity={property.ratingsQuantity}
                            reviews={reviews}
                        />
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={24}>
                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Text options={{
                                fontFamily: theme.fontFamilies.ralewayExtraBold
                            }}>About</Text>
                        </Spacer>

                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Expandable text="See more" height={textHeight}>
                                <Text onLayout={(event) => {
                                    setTextHeight(event.nativeEvent.layout.height)
                                }}
                                options={{
                                    lineHeight: "21px"
                                }}
                                >{property.shortDesc}</Text>
                            </Expandable>
                        </Spacer>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={24}>
                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Text options={{
                                fontFamily: theme.fontFamilies.ralewayExtraBold
                            }}>Features</Text>
                        </Spacer>

                        <Expandable text="See more" height={textHeight}>
                            <Aligner width={283} justify="space-between">
                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>

                                <Spacer type="margin" position="right" customSize={24}>
                                    <Aligner>
                                        <Spacer type="margin" position="right" customSize={4}>
                                            <SvgXml xml={caretRight()} />
                                        </Spacer>
                                        <Text>Wi-Fi</Text>
                                    </Aligner>
                                </Spacer>
                            </Aligner>
                        </Expandable>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={80}>
                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Text options={{
                                fontFamily: theme.fontFamilies.ralewayExtraBold
                            }}>Location</Text>
                        </Spacer>

                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Expandable text="See more" height={textHeight}>
                                <Text onLayout={(event) => {
                                    setTextHeight(event.nativeEvent.layout.height)
                                }}
                                options={{
                                    lineHeight: "21px"
                                }}
                                >{property.shortDesc}</Text>
                            </Expandable>
                        </Spacer>
                    </Spacer>

                </Spacer>

                
            </ScrollView>

            <BottomTab navigation={navigation}>
                <Aligner justify="space-between">
                    <Text>
                        <Text variant="ProductTitle" options={{ color: theme.colors.primary.default }}>
                            ₦{formatPrice(property.unitPrice)}/
                        </Text>
                        <Text variant="caption">
                            night
                        </Text>
                    </Text>

                    <View style={{ width: 156 }}>
                        <Button
                            variant="solid" 
                            text="Book now"
                        />
                    </View>
                </Aligner>
            </BottomTab>

        </Container>
    )
}

const mapStateToProps = ({ propertyReducer, reviewReducer }) => {
    const { property } = propertyReducer;
    const { reviews } = reviewReducer;
    
    return {
        property,
        reviews
    }
}

const mapDispatchToProps = {
    getOneProperty,
    clearOneProperty,
    getPropertyReview
}


export default connect(mapStateToProps, mapDispatchToProps)(propertyShow);