import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Modal, View, KeyboardAvoidingView } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { XmlContainer, LoginContainer } from '../styles/accountStyles';
import { xml } from '../../../../../assets/svg/recatngleSvg';
import { InputHollow, Label, CheckBox, Error } from '../../../../shared-components/Form/formComponent';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/typography/Text';
import Button from '../../../../shared-components/button/buttonComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';

import { loginAction, showLoading, clearLoginError } from '../../../../redux/actions/authAction';
import { useTheme } from 'styled-components';

const LoginScreen = (props) => {
    const theme = useTheme();
    const { error, clearLoginError, loginAction, showLoading, isLoading } = props;
    const [rememberMe, setRememberMe] = useState(false);
    const [usernameEmail, setUsernameEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);

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
                <SvgXml height="35%" width="100%" preserveAspectRatio='none' xml={xml} />
                
                <Spacer type="margin" position="bottom" size="xl" />

                <XmlContainer>
                    <LoginContainer>
                        <Spacer type="padding" position="left" size="lg">
                            <Text variant="header">Login</Text>
                            <Text options={{ fontFamily: theme.fontFamilies.mulish, color: theme.colors.white }}>Welcome back, kindly login</Text>
                        </Spacer>
                    </LoginContainer>
                </XmlContainer>
                
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
                            disabled={loginBtnDisabled}
                            onPress={onLogin}
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
    const { error, isLoading } = auth;
    return {
        error,
        isLoading
    }
}

const mapDispatchToProps = { 
    loginAction,
    showLoading,
    clearLoginError
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)