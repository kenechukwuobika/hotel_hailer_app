import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Text } from '../../../../shared-components/typography/Text';
import { Container } from '../../../../shared-components/Container';
import { Input } from '../../../../shared-components/Form/formComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';
import { Menu } from '../components/Menu';

import location from '../../../../../assets/svg/location';
import { useTheme } from 'styled-components';

export default HomeScreen = (props) => {
    const menuItems = ['Hotel', 'Motel', 'Villa', 'Home', 'Apartment'];
    const products = [
        {
            name: "Transcorp Hilton Abuja",
            image: "../../../../../assets/images/product.jpg",
            price: 104000
        },
        {
            name: "Transcorp Hilton Abuja",
            image: "../../../../../assets/images/product.jpg",
            price: 104000
        },
        {
            name: "Transcorp Hilton Abuja",
            image: "../../../../../assets/images/product.jpg",
            price: 104000
        },
        {
            name: "Transcorp Hilton Abuja",
            image: "../../../../../assets/images/product.jpg",
            price: 104000
        }
    ];

    const theme = useTheme();
    return (
        <Container>
            <Spacer type="margin" position="top" customSize={53}>
                <Spacer type="padding" position="horizontal" customSize={24}>
                    
                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Input placeholder="Search Place" />
                    </Spacer>
                    
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <Aligner justify="flex-start">
                            <Spacer type="margin" position="right" customSize={8}>
                                <SvgXml xml={location} width={10} height={16} />
                            </Spacer>
                            <Text
                                options={{ color: theme.colors.primary.default }}
                            >
                                Around current location
                            </Text>
                        </Aligner>
                    </Spacer>

                    <Menu menuItems={menuItems} activeItem={menuItems[0]} />

                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Aligner justify="space-between">
                            <Text variant="title" color= "dark">Popular</Text>
                            <Text options={{color: theme.colors.primary.default}}>See all</Text>
                        </Aligner>
                    </Spacer>
                </Spacer>
            </Spacer>

            <Spacer type="padding" position="left" customSize={24}>
                <FlatList 
                    // contentContainerStyle={{ flex: 1, width: "100%", height: "100%" }} style={{ flex: 1, width: "100%", height: "100%"}}
                    data={products}
                    horizontal={true}
                    renderItem={({ product }) => {
                        return(
                            <Spacer type="margin" position="right" customSize={24}>
                                <TouchableOpacity onPress={() => console.log("pressed")}>
                                    <View style = {{ 
                                        width: 242,
                                        height: 359,
                                        backgroundColor: 'white',
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        paddingVertical: 8,
                                        // alignItems: 'center',
                                        // justifyContent: 'center'
                                    }}>
                                        <Image source={require('../../../../../assets/images/product.jpg')} style={{ width: "100%" }} />
                                        <Spacer type="margin" position="bottom" customSize={8} />
                                        
                                        <Spacer type="margin" position="bottom" customSize={8}>
                                            <Aligner justify="space-between">
                                                <Text options={{ fontFamily: theme.fontFamilies.mulishSemiBold }}>Transcorp Hilton Abuja</Text>
                                                <Text>Abuja</Text>
                                            </Aligner>
                                        </Spacer>
                
                                        <Aligner justify="space-between">
                                            <Text options={{ fontFamily: theme.fontFamilies.mulishSemiBold }}>Transcor</Text>
                                            <Text>
                                                <Text options={{ 
                                                    color: theme.colors.primary.default,
                                                    fontFamily: theme.fontFamilies.ralewaySemiBold 
                                                }}>
                                                    N104,000/
                                                </Text>
                                                <Text variant="caption" options={{ 
                                                    color: theme.colors.greys.g1
                                                }}>night</Text>
                                            </Text>
                                        </Aligner>
                                    </View>
                                </TouchableOpacity>
                            </Spacer>
                        )
                    }}
                />
            </Spacer>
        </Container>
    );
}