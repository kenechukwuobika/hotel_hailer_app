import { useState } from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';
import { Heart } from '../../../../shared-components/heart.component';

import { 
    SinglePropertyImage,
    SinglePropertyImageContainer,
    PropertyContentContainer,
    PropertyIconContainer,
    PropertyTextContainer
} from '../styles/property-card.styles';

import { Bullets } from './bullets.component';

import { love, expandFull, location } from '../../../../../assets/icons';

import { capitalize } from '../../../../utils/Formatters';

export const PropertyImageCard = (props) => {
    const [heartFill, setHeartFill] = useState('white');
    const [heartStroke, setHearStroke] = useState('none');
    const { property } = props;
    const theme = useTheme();
    const onSaveItem = async () => {
        setHeartFill("red");
        setHearStroke("red")
        const savedItems = await AsyncStorage.getItem("saved_items");
        const item = savedItems.find(item => item.id === propertyId);
        if(item) {
            const savedItems = await AsyncStorage.removeItem("saved_items")
        }
    }

    return(
        <Spacer type="margin" position="bottom" customSize={16}>
            <SinglePropertyImageContainer>
                <SinglePropertyImage source={{ uri:`${property.coverImage}` }} />
                <PropertyContentContainer>
                    <Aligner style={{height: "100%"}} direction="column" justify="space-between">
                        <Aligner style={{width: "100%"}} justify="flex-end">
                            <PropertyIconContainer>
                                <Heart
                                    color={heartFill}
                                    stroke={heartStroke}
                                    property={property}
                                />
                            </PropertyIconContainer>
                        </Aligner>

                        <View style={{width: "100%"}}>
                            <Spacer type="margin" position="bottom" customSize={8}>
                                <Aligner justify="space-between">
                                    <PropertyTextContainer>
                                        <Spacer type="margin" position="bottom" customSize={8}>
                                            <Text 
                                                variant="ProductTitle"
                                                style={{textAlign: "left"}}
                                            >
                                                { capitalize(property.name) }
                                            </Text>
                                        </Spacer>

                                        <Spacer type="margin" position="bottom" customSize={8}>
                                            <Aligner justify="flex-start">
                                                <Spacer type="margin" position="right" customSize={6}>
                                                    <SvgXml xml={location()} width={12} height={12} />
                                                </Spacer>
                                                
                                                <Text
                                                    variant="caption"
                                                    options = {{color: theme.colors.white}}
                                                >
                                                    { capitalize(property.state)} ({property.distance})km
                                                </Text>
                                            </Aligner>
                                        </Spacer>
                                    </PropertyTextContainer>

                                    <PropertyIconContainer style={{ alignSelf: "flex-end" }}>
                                        <SvgXml xml={expandFull()} />
                                    </PropertyIconContainer>
                                </Aligner>
                            </Spacer>

                            <Bullets images={property.images} activeIndex={0} />
                        </View>

                    </Aligner>
                </PropertyContentContainer>
            </SinglePropertyImageContainer>
        </Spacer>
    )
}

export const PropertyImageCardLoader = (props) => {
    const theme = useTheme();
    const { item } = props;
    return(
        <Spacer type="margin" position="right" customSize={24}>
            <PopularPropertyContainer>
                <PlaceholderLoader width={242} style={{ width: "100%" }} />
            </PopularPropertyContainer>
        </Spacer>
    )
}