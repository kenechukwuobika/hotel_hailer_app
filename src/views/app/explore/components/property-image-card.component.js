import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';

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
    const { property } = props;
    const theme = useTheme();
    const arr = [1,2,3,4,5,6,7,8]

    return(
        <Spacer type="margin" position="bottom" customSize={16}>
            <SinglePropertyImageContainer>
                <SinglePropertyImage source={{ uri:`${property.coverImage}` }} />
                <PropertyContentContainer>
                    <Aligner style={{height: "100%"}} direction="column" justify="space-between">
                        <Aligner style={{width: "100%"}} justify="flex-end">
                            <PropertyIconContainer>
                                <SvgXml xml={love("white")} />
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