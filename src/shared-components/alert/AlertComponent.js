import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Animated, Easing } from 'react-native';
import { useTheme } from 'styled-components';
import { Aligner } from '../../shared-components/aligner/AlignerComponent';
import { Spacer } from '../../shared-components/spacer/spacerComponent';
import { Text } from '../../shared-components/typography/Text';

import { clearLoginError } from '../../redux/actions/authAction';

const Alert = (props) => {
    const { clearLoginError } = props;
    const theme = useTheme();
    const fade = useRef(new Animated.Value(0)).current;

    Animated.timing(fade, {
        toValue: 0.8,
        duration: 200,
        easing: Easing.in,
        useNativeDriver: false,
    }).start();

    const fadeOut = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 200,
            easing: Easing.in,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if(finished){
                clearLoginError()
            }
        });
    }

    return(
        <Animated.View style={{
            position: "absolute",
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            opacity: fade
        }}>
            <View style={{
                position: "absolute",
                flex: 1,
                backgroundColor: "black",
                width: "100%",
                height: "100%",
                alignItems: "center",
            }}>
            </View>

            <View style={{
                backgroundColor: "white",
                width: "80%",
                height: 150,
                borderRadius: 8,
                opacity: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Spacer type="padding" position="horizontal" customSize={8}>
                    <Spacer type="padding" position="vertical" customSize={16}>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1}}>
                            <Text>{props.message}</Text>
                        </View>
                        <View style={{ width: "100%" }}>
                            <Aligner justify="space-between">
                                <Text options={{ color: theme.colors.primary.default, fontFamily: theme.fontFamilies.mulishBold }}>Sign up</Text>
    
                                <TouchableOpacity onPress={fadeOut}>
                                    <Text options={{ color: theme.colors.indicators.error, fontFamily: theme.fontFamilies.mulishBold }}>Try again</Text>
                                </TouchableOpacity>
                            </Aligner>
                        </View>
                    </Spacer>
                </Spacer>
            </View>
        </Animated.View>
    )
}

const mapDispatchToProps = { 
    clearLoginError
}

export default connect(null, mapDispatchToProps)(Alert);