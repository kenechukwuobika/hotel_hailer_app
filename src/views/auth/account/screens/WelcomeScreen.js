import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';

import { TextContainer, BlueCircle, WhiteCircle, CircleContainer } from '../styles/accountStyles';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/typography/Text';
import Button from '../../../../shared-components/button/buttonComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';

import { loginAction, clearLoginError } from '../../../../redux/actions/authAction';
import { useTheme } from 'styled-components';

const WelcomeScreen = (props) => {
    const theme = useTheme();
    const navigateToRegister = () => {
        props.navigation.push('register')
    }

    const navigateToLogin = () => {
        props.navigation.push('login')
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

const mapStateToProps = ({ auth }) => {
    const { error } = auth;
    return {
        error
    }
}

const mapDispatchToProps = { 
    loginAction,
    clearLoginError
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)