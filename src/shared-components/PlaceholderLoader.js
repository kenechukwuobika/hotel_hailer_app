import { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

export const PlaceholderLoader = (props) => {
    const theme = useTheme();
    const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
    const position = useRef(new Animated.Value(0)).current;

    const color = position.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.colors.greys.g4, theme.colors.greys.g1]
    })
    
    function animate () {
        Animated.loop(Animated.stagger(1000, [
            Animated.timing( position, {
                toValue: 1,
                duration: 2000,
                easing: Easing.in,
                useNativeDriver: false,
                
            }),

            Animated.timing( position, {
                toValue: 0,
                duration: 2000,
                easing: Easing.in,
                useNativeDriver: false,
                
            })
        ]), {
            iterations: -1
        }).start()
    }

    useEffect(() => {
        animate()
    }, []);

    return (
        <Animated.View style={[styles.container, {backgroundColor: color || 1}]}>
            {/* <AnimatedGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['rgba(255,255,255, 0)', 'rgba(255,255,255, .8)']}
                style={[{opacity: position}, styles.inner]}
            /> */}
        </Animated.View>
    )
}


const styles = {
    container: {
        backgroundColor: "#C8CBD0",
        width: "100%",
        height: "100%",
        opacity: 1
    },

    inner: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: "100%",
    }
}