import { useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const PlaceholderLoader = () => {
    const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
    const position = new Animated.ValueXY(0, 0);
    
    function animate () {
        Animated.loop(Animated.timing( position, {
            toValue: { x: 400, y: 0 },
            duration: 800,
            easing: Easing.in,
            useNativeDriver: false,
            
        }), {
            iterations: -1
        }).start()
    }

    useEffect(() => {
        animate()
    }, []);

    return (
        <View style={styles.container}>
            <AnimatedGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['rgba(255,255,255, 0)', 'rgba(255,255,255, .8)']}
                style={[position.getLayout(), styles.inner]}
            />
        </View>
    )
}


const styles = {
    container: {
        backgroundColor: "#C8CBD0",
        width: "100%",
        height: "100%"
    },

    inner: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '50%',
        height: "100%",
    }
}