import { SvgXml } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';

import { PopularPropertyContainer, PopularPropertyImage } from '../styles/property-card.styles';

import { love, location } from '../../../../../assets/icons';

import { capitalize, formatPrice } from '../../../../utils/Formatters';

export const PopularPropertiesCard = (props) => {
    const theme = useTheme();
    const { item, onPress } = props;

    return(
        <Spacer type="margin" position="right" customSize={24}>
            <PopularPropertyContainer onPress={() => onPress(item._id)}>
                <PopularPropertyImage source={{ uri:`${item.coverImage}` }} />
                <Spacer type="margin" position="bottom" customSize={8} />
                
                <Spacer type="margin" position="bottom" customSize={8}>
                    <Aligner justify="space-between">
                        <Text 
                            options={{ fontFamily: theme.fontFamilies.mulishSemiBold }}
                        >
                            {capitalize(item.name)}
                        </Text>

                        <SvgXml xml={love("none", theme.colors.greys.g3)} />
                    </Aligner>
                </Spacer>

                <Aligner justify="space-between" wrap="wrap">
                    <Spacer type="margin" position="right" customSize={8}>
                        <Aligner>
                            <Spacer type="margin" position="right" customSize={4}>
                                <SvgXml xml={location()} width={12} height={12} />
                            </Spacer>
                            <Text>{capitalize(item.state)} ({Math.round(item.distance)}{item.unit})</Text>
                        </Aligner>
                    </Spacer>

                    <Text>
                            <Text options={{ 
                                color: theme.colors.primary.default,
                                fontFamily: theme.fontFamilies.ralewaySemiBold 
                            }}>
                                ₦{formatPrice(item.unitPrice)}/
                            </Text>

                        <Text variant="caption" options={{ 
                            color: theme.colors.greys.g1
                        }}>night</Text>
                    </Text>
                </Aligner>
            </PopularPropertyContainer>
        </Spacer>
    )
}

export const PopularPropertiesLoader = (props) => {
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