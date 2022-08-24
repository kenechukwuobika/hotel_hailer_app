import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Text } from '../../../../shared-components/typography/Text';
import { Container } from '../../../../shared-components/Container';
import { Input } from '../../../../shared-components/Form/formComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';
import { PlaceholderLoader } from '../../../../shared-components/loader/PlaceholderLoader';
import { Menu } from '../components/Menu';

import location from '../../../../../assets/svg/location';

export default HomeScreen = (props) => {
    const theme = useTheme();
    const [activeItem, setActiveItem] = useState(null);
    const [products, setProducts] = useState([]);
    const [nearbyproducts, setNearbyProducts] = useState([]);
    const menuItems = ['Hotel', 'Motel', 'Villa', 'Home', 'Apartment'];

    useEffect(() => {
        setTimeout(() => {
            setProducts([1,2,3,4,5])
        }, 5000)
    
        setTimeout(() => {
            setNearbyProducts([1,2,3,4,5])
        }, 8000)
    }, [])

    const renderPopularProducts = () => {
        const arr = [1,2,3,4,5]
        if(!products || products.length === 0) {
            return(
                <FlatList 
                    data={arr}
                    horizontal={true}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        return(
                            <Spacer type="margin" position="right" customSize={24}>
                                <View style = {{ 
                                    width: 242,
                                    height: 359,
                                    borderRadius: 8,
                                }}>
                                    <PlaceholderLoader width={242} style={{ width: "100%" }} />
                                </View>
                            </Spacer>
                        )
                    }}
                />
            )
        }
        
        return(
            <FlatList 
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
        )
    }

    const renderNearbyProducts = () => {
        const arr = [1,2,3,4,5]
        if(!nearbyproducts || nearbyproducts.length === 0) {
            return(
                <FlatList 
                    data={arr}
                    horizontal={true}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        return(
                            <Spacer type="margin" position="right" customSize={24}>
                                <View style = {{ 
                                    width: 242,
                                    height: 113,
                                    borderRadius: 8,
                                }}>
                                    <PlaceholderLoader width={242} style={{ width: "100%" }} />
                                </View>
                            </Spacer>
                        )
                    }}
                />
            )
        }
        
        return(
            <FlatList 
                data={products}
                horizontal={true}
                renderItem={({ product }) => {
                    return(
                        <Spacer type="margin" position="right" customSize={24}>
                            <TouchableOpacity onPress={() => console.log("pressed")}>
                                <View style = {{ 
                                    width: 242,
                                    height: 113,
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    paddingHorizontal: 8,
                                    paddingVertical: 8,
                                }}>
                                    <Aligner justify="space-between">
                                        <Image source={require('../../../../../assets/images/product.jpg')} style={{ width: 80, height: 80, borderRadius: 6 }} />
                                        <Spacer type="margin" position="right" customSize={8} />

                                        <View>
                                            <Spacer type="margin" position="bottom" customSize={8}>
                                                <Aligner justify="space-between">
                                                    <Text options={{ fontFamily: theme.fontFamilies.mulishSemiBold, width: "138px" }}>Transcorp Hilton Abuja</Text>
                                                </Aligner>
                                            </Spacer>
                                                                                        
                                            <Spacer type="margin" position="bottom" customSize={8}>
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
                                            </Spacer>
                                            
                                            <Text options={{ fontFamily: theme.fontFamilies.mulishSemiBold }}>Transcor</Text>
                                        </View>
                                    </Aligner>
            
                                </View>
                            </TouchableOpacity>
                        </Spacer>
                    )
                }}
            />
        )
    }

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

                </Spacer>
            </Spacer>
            <Spacer type="padding" position="horizontal" customSize={24}>
                <Menu menuItems={menuItems} activeItem={activeItem} onChangeMenuItem={onChangeMenuItem} />
            </Spacer>

            <ScrollView>
                <Spacer type="padding" position="horizontal" customSize={24}>

                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Aligner justify="space-between">
                            <Text variant="title" color= "dark">Popular</Text>
                            <Text options={{color: theme.colors.primary.default}}>See all</Text>
                        </Aligner>
                    </Spacer>
                </Spacer>

                <Spacer type="padding" position="left" customSize={24}>
                    {renderPopularProducts()}
                </Spacer>
                
                <Spacer type="margin" position="bottom" customSize={16} />

                <Spacer type="padding" position="horizontal" customSize={24}>
                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Aligner justify="space-between">
                            <Text variant="title" color= "dark">Nearby</Text>
                            <Text options={{color: theme.colors.primary.default}}>See all</Text>
                        </Aligner>
                    </Spacer>
                </Spacer>

                <Spacer type="padding" position="left" customSize={24}>
                    {renderNearbyProducts()}
                </Spacer>
            </ScrollView>
        </Container>
    );
}