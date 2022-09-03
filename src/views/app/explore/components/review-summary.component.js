import { useTheme } from "styled-components";
import { SvgXml } from 'react-native-svg';

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';

import { 
    ReviewSummaryCard,
} from '../styles/property-card.styles';

import Ratings from './ratings.component';
import ReviewSummaryImages from './review-summary-images.component';

import { formatThousands } from '../../../../utils/Formatters';
import { caretRight } from '../../../../../assets/icons';
import { TouchableOpacity } from "react-native";

export const ReviewSummary = (props) => {
    const { ratingsAverage, ratingsQuantity, userImages } = props;
    const theme = useTheme();
    const arr = [1,2,3,4,5,6,7,8]

    return(
        <ReviewSummaryCard>
            <Aligner justify="space-between" align="flex-start">
                <Ratings
                    ratingsAverage={ratingsAverage}
                />

                <ReviewSummaryImages 

                />
            </Aligner>

            <TouchableOpacity>
                <Aligner justify="flex-start">
                    <Spacer type="margin" position="right" customSize={8}>
                        <Text
                            variant="caption"
                            options={{
                                fontFamily: theme.fontFamilies.ralewaySemiBold
                            }}
                        >
                            {formatThousands(ratingsQuantity)} Review(s)
                        </Text>
                    </Spacer>

                    <Spacer type="margin" position="top" customSize={2}>
                        <SvgXml xml={caretRight()} />
                    </Spacer>
                </Aligner>
            </TouchableOpacity>
        </ReviewSummaryCard>

    )
}

export const ReviewSummaryLoader = (props) => {
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