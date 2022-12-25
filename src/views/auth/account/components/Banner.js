import { useState, useEffect } from 'react';
import { Keyboard, Animated, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { rectangleSvg } from '../../../../../assets/icons';
import { useTheme } from 'styled-components';

import { XmlContainer, LoginContainer } from '../styles/accountStyles';
import { Spacer } from '../../../../shared-components/Spacer';
import { Text } from '../../../../shared-components/Text';

const Banner = (props) => {
    const theme = useTheme();
    const [isKeyboadVisible, setIsKeyboadVisible] = useState(false);

    const displaySVG = () => {
        if(!isKeyboadVisible){
            return(
                <>
                    <SvgXml height="35%" width="100%" preserveAspectRatio='none' xml={rectangleSvg()} />

                    <Spacer type="margin" position="bottom" size="xl" />
                    
                    <XmlContainer>
                        <LoginContainer>
                            <Spacer type="padding" position="left" size="lg">
                                <Spacer type="margin" position="bottom" size="sm">
                                    <Text variant="header">{props.title}</Text>
                                </Spacer>
                                <Text options={{ fontFamily: theme.fontFamilies.mulish, color: theme.colors.white }}>{props.subTitle}</Text>
                            </Spacer>
                        </LoginContainer>
                    </XmlContainer>
                </>
            )
        }
        else{
            return (
                <Spacer type="margin" position="bottom" customSize={60} />
            )
        }
    }

    useEffect(() => {
        Keyboard.addListener(
            "keyboardDidShow",
            () => {
                return setIsKeyboadVisible(true)
            }
        );

        Keyboard.addListener(
            "keyboardDidHide",
            (e) => {
                return setIsKeyboadVisible(false)
            }
        );

        () => Keyboard.removeAllListeners();
    }, []);

    return (
        <>{displaySVG()}</>
    )
}

export default Banner;