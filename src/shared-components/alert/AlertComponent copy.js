import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Animated, Easing } from 'react-native';
import { useTheme } from 'styled-components';
import { SvgXml } from 'react-native-svg';

import info from '../../../assets/svg/info';

import { Aligner } from '../../shared-components/aligner/AlignerComponent';
import { Spacer } from '../../shared-components/spacer/spacerComponent';
import { Text } from '../../shared-components/typography/Text';
import Button from '../../shared-components/button/buttonComponent';

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
                backgroundColor: theme.colors.indicators.errorSurface,
                borderColor: theme.colors.indicators.errorBorder,
                borderWidth: 2,
                width: "80%",
                maxHeight: 150,
                borderRadius: 8,
                opacity: 1,
            }}>
                <Spacer type="padding" position="horizontal" customSize={40}>
                    <Spacer type="padding" position="vertical" customSize={16}>
                        <View style={{ position: "relative", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                            {/* <View style={{width: "100%"}}>
                                <SvgXml style={{ position: "absolute", left: 0, bottom: 0}} xml={info(theme.colors.indicators.error)} />
                                <Text style={{ textAlign: "center", marginLeft: 40 }} variant="h5" options={{ color: theme.colors.indicators.error }}>Login Failed</Text>
                            </View> */}

                            <View style={{width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row", flex: 1 }}>
                                <SvgXml xml={info(theme.colors.indicators.error)} />
                                <Text style={{ textAlign: "center", marginLeft: 20 }} variant="body" options={{ color: theme.colors.indicators.error }}>{props.message}</Text>
                            </View>

                            {/* <Text style={{  }}>{props.message}</Text> */}
                            
                            <Aligner style={{width: "100%"}} justify="space-between">
                                <TouchableOpacity onPress={fadeOut}>
                                    <Text options={{ color: theme.colors.indicators.error, fontFamily: theme.fontFamilies.mulishBold }}>Try again</Text>
                                </TouchableOpacity>

                                <View style={{ width: 78 }}>
                                    <Button
                                        onPress={fadeOut}
                                        text="Sign up"
                                        type="error"
                                    />
                                </View>
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