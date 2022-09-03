import { useRef, useState } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { BulletMarker } from '../styles/property-card.styles';

import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { useEffect } from 'react';

export const Bullets = (props) => {

    const AnimatedBulletMarker = Animated.createAnimatedComponent(BulletMarker);
    const width = new Animated.Value(6);
    const [kei, setKei] = useState(props.activeIndex)

    const increaseWidth = () => Animated.timing(width, {
        toValue: 26,
        duration: 300,
        easing: Easing.in,
        useNativeDriver: false,
    }).start();

    useEffect(() => {
        console.log(width)
    }, [width])
    console.log(width)
    
    const displayBullets = () => {
        return props.images.map((image, index) => {
            if(kei === index){
                increaseWidth();
            }
            return (
                <Spacer key={index} type="margin" position="right" customSize={4}>
                    <TouchableOpacity onPress={() => setKei(index)}>
                        <AnimatedBulletMarker
                            style={{ width: kei === index ? width : 6 }}
                        />
                    </TouchableOpacity>
                </Spacer>
            )
        })
    }

    return(
        <Aligner>
            {displayBullets()}
        </Aligner>
    )
}