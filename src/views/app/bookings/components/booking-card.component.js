import { FlatList, View } from 'react-native';
import { BookingCardContainer, BookingCardBody, BookingDetails, BookingDetailsFiller, BookingDetailsImage, BookingDetailsLoader, BookingDetailsStatus } from '../styles/booking-card.styles';
import { useTheme } from 'styled-components';

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { capitalize, formatDate, formatPrice } from '../../../../utils/Formatters';

const BookingCard = (props) => {
    const theme = useTheme();
    const { item, onPress } = props;

    const displayStatus = () => {
        const { status } = item;
        let color = theme.colors.indicators.pending;
        let backgroundColor = theme.colors.indicators.pendingSurface;
        switch (status) {
            case "completed":
                color = theme.colors.indicators.success;
                backgroundColor = theme.colors.indicators.successSurface;
                break;

            case "cancelled":
                color = theme.colors.indicators.error;
                backgroundColor = theme.colors.indicators.errorSurface;
                break;
        
            default:
                break;
        }

        return (
            <BookingDetailsStatus backgroundColor={backgroundColor}>
                <Text options={{ 
                    color: color
                }}>{status}</Text>
            </BookingDetailsStatus>
        )
    }
    if(!item) {
        return (<></>);
    }

    return (
        <BookingCardContainer 
            onPress={() => onPress(item.id)}
        >
            <Aligner justify="space-between">
                <Text options={{ fontFamily: theme.fontFamilies.ralewayExtraBold }}>{capitalize(item.property.name)}</Text>
                {displayStatus()}
            </Aligner>

            <BookingCardBody>
                <Aligner justify="space-between">
                    <Text>
                        <Text>{formatDate(item.lodgeStartDate, true, false)} - </Text>
                        <Text>{formatDate(item.lodgeEndDate, true, false)}</Text>
                    </Text>

                    <Text options={{ 
                        fontFamily: theme.fontFamilies.ralewayExtraBold,
                        color: theme.colors.primary.default
                    }}>₦{formatPrice(item.totalAmount)}</Text>
                </Aligner>
            
                <Spacer type="margin" position="vertical" customSize={16}>
                    <BookingDetails>
                        <Aligner justify="space-between">
                            <BookingDetailsImage source={{ uri:`${item.property.coverImage}` }} />
                            
                            <View style={{flex: 1}}>
                                
                                <Aligner justify="space-between">
                                    <Text options={{ 
                                        fontFamily: theme.fontFamilies.ralewayExtraBold,
                                        color: theme.colors.primary.default
                                    }}>₦{formatPrice(item.totalAmountPaid)}</Text>

                                    <Text options={{ 
                                        fontFamily: theme.fontFamilies.ralewayExtraBold,
                                        color: theme.colors.primary.default
                                    }}>{item.daysLeft}</Text>
                                </Aligner>

                                <Spacer type="margin" position="vertical" customSize={4} />

                                <Aligner justify="space-between">
                                    <Text>Left to pay</Text>

                                    <Text>Days left</Text>
                                </Aligner>

                                <Spacer type="margin" position="vertical" customSize={6} />

                                <Aligner justify="space-between">
                                    <BookingDetailsLoader>
                                        <BookingDetailsFiller status={item.status} width={item.paymentPercentage} />
                                    </BookingDetailsLoader>

                                    <Text options={{ 
                                        fontFamily: theme.fontFamilies.ralewayExtraBold,
                                    }}>{item.paymentPercentage}%</Text>
                                </Aligner>
                            </View>
                        </Aligner>
                    </BookingDetails>
                </Spacer>

                <Aligner justify="space-between">
                    <Text>Next Payment</Text>

                    <Text options={{ 
                        fontFamily: theme.fontFamilies.ralewayExtraBold,
                        color: theme.colors.primary.default
                    }}>{formatDate(item.nextPaymentDate)}</Text>
                </Aligner>
            </BookingCardBody >
        </BookingCardContainer>
    );
}

export default BookingCard;