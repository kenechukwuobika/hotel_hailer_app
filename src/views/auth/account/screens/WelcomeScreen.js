import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextContainer, BlueCircle, WhiteCircle, CircleContainer } from '../styles/accountStyles';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/Text';
import Button from '../../../../shared-components/Button';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

import { useTheme } from 'styled-components';

const WelcomeScreen = (props) => {
    const [ token, setToken ] = useState(null);
    const theme = useTheme();
    const { navigation } = props;
    
    const getToken = async () => {
        const authToken = await AsyncStorage.getItem("authToken");
        return authToken;
    }

    useEffect(() => {
        getToken().then(res => setToken(res));
    }, [])

    // useEffect(() => {
    //     if(token) {
    //         navigation.push("Home");
    //     }
    // }, [token])

    const navigateToRegister = () => {
        navigation.push('Register')
    }

    const navigateToLogin = () => {
        navigation.push('Login')
    }

    return (
        <>
            <Container>
                <Image source={require('../../../../../assets/images/bg.jpg')} style={{ width: "100%", height: "100%", position: "absolute"}} />
                
                <TextContainer>
                    <Spacer type="margin" position="top" customSize={80}>
                        <Spacer type="padding" position="horizontal" size="lg">

                            <Spacer type="margin" position="bottom" customSize={40}>
                                <CircleContainer>
                                    <WhiteCircle/>
                                    <BlueCircle/>

                                    <Spacer type="margin" position="right" customSize={8}/>

                                    <Text variant="title" options={{ color: theme.colors.white}}>Hotel</Text>
                                </CircleContainer>
                            </Spacer>

                            <Spacer type="margin" position="bottom" customSize={8}>
                                <Text variant="header">Find your perfect place to stay</Text>
                            </Spacer>

                            <Text options={{ color: theme.colors.white}}>Find your hotel easily and travel anywhere you want with us.</Text>
                        </Spacer>
                    </Spacer>
                </TextContainer>

                <BottomContainer>
                    <Spacer type="margin" position="bottom" size="sm">
                        <Spacer type="padding" position="horizontal" size="lg">
                            <Button 
                                onPress={navigateToRegister}
                                text="Sign up"
                            />
                        </Spacer>
                    </Spacer>

                    <Aligner justify="center" align="center" >
                        <Text color= "dark">Already have an account? </Text>
                        <TouchableOpacity onPress={navigateToLogin}>
                            <Text options={{ fontFamily: theme.fontFamilies.mulishBold, color: theme.colors.primary.default}}>Log in</Text>
                        </TouchableOpacity>
                    </Aligner>
                </BottomContainer> 
            </Container>
        </>
    );
}

export default WelcomeScreen;