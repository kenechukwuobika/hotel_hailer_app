import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Keyboard, Animated, View } from 'react-native';
import { useTheme } from 'styled-components';

import Banner from '../components/Banner';
import { InputHollow, Label, CheckBox, Error } from '../../../../shared-components/Form';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/Text';
import Button from '../../../../shared-components/Button';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import Alert from '../../../../shared-components/Alert';

import { loginAction, showLoading, clearLoading, clearLoginError } from '../../../../redux/actions/authAction';

const LoginScreen = (props) => {
    const theme = useTheme();
    const { error, clearLoginError, loginAction, showLoading, clearLoading, isLoading, isSignedIn } = props;
    const [rememberMe, setRememberMe] = useState(false);
    const [usernameEmail, setUsernameEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);
    const [isKeyboadVisible, setIsKeyboadVisible] = useState(false);

    // const AnimatedSVG = Animated.createAnimatedComponent(SvgXml)
    const slideUp = new Animated.Value(0);

    useEffect(() => {
        if(isSignedIn){
            props.navigation.push("home")
        }
    }, [isSignedIn])

    useEffect(() => {
        if(error){
            // setPassword('');
            setModalVisible(true)
        }
    }, [error])

    useEffect(() => {
        if(usernameEmail && password){
            setLoginBtnDisabled(false)
        }
        else{
            setLoginBtnDisabled(true)
        }
    }, [usernameEmail, password])

    useEffect(() => {
        if(isLoading){
            setLoginBtnDisabled(true)
        }
    }, [isLoading])

    const onChangeUsernameEmail = text => {
        clearLoginError();
        setUsernameEmail(text);
    }

    const onChangePassword = text => {
        clearLoginError();
        setPassword(text);
    }

    const onLogin = () => {
        const loginData = {
            username: usernameEmail,
            password
        }
        showLoading();
        loginAction(loginData)
    }

    const navigateAway = () => {
        props.navigation.push('register')
    }

    const onRememberMe = () => {
        setRememberMe(!rememberMe)
    }
    return (
        <>
            <Container>
                <Banner
                    title="Login"
                    subTitle="Welcome back, kindly login"
                />
                
                <Spacer type="padding" position="horizontal" size="lg">

                    {error && 
                        <Spacer type="margin" position="bottom" size="sm">
                            <Aligner justify="center" align="center">
                                <Error>{error}</Error>
                            </Aligner>
                        </Spacer>
                    }

                    <Spacer type="margin" position="bottom" size="md">
                        <Label>E-mail/Username</Label>
                        <InputHollow placeholder='Enter email/username' value={usernameEmail} onChangeText={onChangeUsernameEmail} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="md">
                        <Label>Password</Label>
                        <InputHollow secureTextEntry={true} placeholder='Enter password' value={password} onChangeText={onChangePassword} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="xl">
                        <Aligner justify="space-between" align="center" >
                            <Aligner justify="center" align="center">
                                <Spacer type="margin" size="sm" position="right">
                                    <CheckBox isChecked={rememberMe} onPress={onRememberMe} />
                                </Spacer>

                                <Text variant="caption" options={{ fontFamily: theme.fontFamilies.mulish }}>Remember me</Text>
                            </Aligner>

                            <Text variant="caption" options={{ fontFamily: theme.fontFamilies.mulish, color: theme.colors.primary.default }}>Forgot Password?</Text>
                        </Aligner>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={135}>
                        <Button
                            onPress={onLogin}
                            disabled={loginBtnDisabled}
                            text="Login"
                        />
                    </Spacer>

                </Spacer>

                <BottomContainer>
                    <Aligner justify="center" align="center" >
                        <Text> Don't have an account? </Text>
                        <TouchableOpacity onPress={navigateAway}>
                            <Text options={{ fontFamily: theme.fontFamilies.mulishBold, color: theme.colors.primary.default }}>Register</Text>
                        </TouchableOpacity>
                    </Aligner>
                </BottomContainer>
            </Container>
        </>
    );
}

const mapStateToProps = ({ auth }) => {
    const { error, isLoading, isSignedIn } = auth;
    return {
        error,
        isLoading,
        isSignedIn
    }
}

const mapDispatchToProps = { 
    loginAction,
    showLoading, 
    clearLoading,
    clearLoginError
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)