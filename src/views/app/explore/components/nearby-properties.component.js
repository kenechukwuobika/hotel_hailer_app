import { View } from "react-native";
import { useTheme } from "styled-components";

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';

import { NearbyPropertyContainer, NearbyPropertyImage } from '../styles/property-card.styles';

import { capitalize, formatPrice } from '../../../../utils/Formatters';

export const NearbyPropertiesCard = (props) => {
    const theme = useTheme();
    const { item, onPress } = props;
    return(
        <Spacer type="margin" position="right" customSize={24}>
            <NearbyPropertyContainer  onPress={() => onPress(item._id)}>
                <Aligner justify="space-between">
                    <NearbyPropertyImage source={{ uri:`${item.coverImage}` }} />
                    
                    <Spacer type="margin" position="right" customSize={8} />

                    <View>
                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Aligner justify="space-between">
                                <Text options={{ fontFamily: theme.fontFamilies.mulishSemiBold, width: "138px" }}>{capitalize(item.name)}</Text>
                            </Aligner>
                        </Spacer>
                                                                    
                        <Spacer type="margin" position="bottom" customSize={8}>
                            <Text>
                                <Text options={{ 
                                    color: theme.colors.primary.default,
                                    fontFamily: theme.fontFamilies.ralewaySemiBold 
                                }}>
                                    N{formatPrice(item.unitPrice)}/
                                </Text>
                                <Text variant="caption" options={{ 
                                    color: theme.colors.greys.g1
                                }}>night</Text>
                            </Text>
                        </Spacer>
                        
                        <Text>{capitalize(item.state)} ({Math.round(item.distance)}{item.unit})</Text>
                    </View>
                </Aligner>
            </NearbyPropertyContainer>
        </Spacer>
    )
}

export const NearbyPropertiesLoader = (props) => {
    return(
        <Spacer type="margin" position="right" customSize={24}>
            <NearbyPropertyContainer>
                <PlaceholderLoader width={242} style={{ width: "100%" }} />
            </NearbyPropertyContainer>
        </Spacer>
    )
}