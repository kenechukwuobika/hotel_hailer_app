import { useTheme } from "styled-components";
import { Aligner } from '../../../../shared-components/Aligner';

import { 
    ReviewSummaryImage,
} from '../styles/property-card.styles';

const ReviewSummaryImages = (props) => {
    const { reviews } = props;
    const theme = useTheme();
    const arr = [1,2,3,4];

    console.log(reviews)

    const displayImages = () => {
        if(!reviews) {
            return (<></>);
        }

        return reviews.map((review, index) => {
            console.log(review.user)
            return (
                <ReviewSummaryImage key={index} source={{ uri:`${review.user.image}` }} />
            )
        })
    }

    return(
        <Aligner>{displayImages()}</Aligner>
    )
}

export default ReviewSummaryImages;