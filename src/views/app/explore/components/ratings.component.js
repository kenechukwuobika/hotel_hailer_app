import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from '../../../../shared-components/Text';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { PlaceholderLoader } from '../../../../shared-components/PlaceholderLoader';

import { 
    ReviewSummaryCard,
} from '../styles/property-card.styles';

import Bullets from './bullets.component';

import { fullStar, emptyStar, halfStar } from '../../../../../assets/icons';

const Ratings = (props) => {
    const { ratingsAverage } = props;
    const theme = useTheme();    
    const arr = [1,2,3,4,5]

    const displayRatings = () => {
        return arr.map((element) => {
            if(element <= ratingsAverage){
                return (
                    <Spacer type="margin" position="right" customSize={8}>
                        <SvgXml xml={fullStar()} />
                    </Spacer>
                )
            }
            else {
                const diff = element - ratingsAverage;
                if(diff < 1 && ratingsAverage % 1 !== 0){
                    return (
                        <Spacer type="margin" position="right" customSize={8}>
                            <SvgXml xml={halfStar()} />
                        </Spacer>
                    )
                }
            }
            
            return (
                <Spacer type="margin" position="right" customSize={8}>
                    <SvgXml xml={emptyStar()} />
                </Spacer>
            )
        })
    }

    return(
        <Aligner>
            {displayRatings()}
        </Aligner>
    )
}

export default Ratings;