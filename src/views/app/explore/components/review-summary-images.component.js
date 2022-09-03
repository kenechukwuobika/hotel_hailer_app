import { useTheme } from "styled-components";
import { Aligner } from '../../../../shared-components/Aligner';

import { 
    ReviewSummaryImage,
} from '../styles/property-card.styles';

const ReviewSummaryImages = (props) => {
    const { userImages } = props;
    const theme = useTheme();
    const arr = [1,2,3,4]

    const displayImages = () => {
        return arr.map((image, index) => {
            return (
                <ReviewSummaryImage key={index} />
            )
        })
    }

    return(
        <Aligner>{displayImages()}</Aligner>
    )
}

export default ReviewSummaryImages;