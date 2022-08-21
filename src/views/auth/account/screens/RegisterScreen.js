import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { loginAction, showLoading, clearLoginError } from '../../../../redux/actions/authAction';

import Banner from '../components/Banner';
import { InputHollow, Label, Error } from '../../../../shared-components/Form/formComponent';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/typography/Text';
import Button from '../../../../shared-components/button/buttonComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';

const RegisterScreen = (props) => {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerBtnDisabled, setRegisterBtnDisabled] = useState(true);
    
    useEffect(() => {
        if(username && email && password){
            setRegisterBtnDisabled(false)
        }
        else{
            setRegisterBtnDisabled(true)
        }
    }, [username, email, password]);

    const navigateAway = () => {
        props.navigation.push('login')
    }

    const onChangeUsername = text => {
        setUsername(text);
    }

    const onChangeEmail = text => {
        setEmail(text);
    }

    const onChangePassword = text => {
        setPassword(text);
    }

    const onRegister = () => {
        // console.log(email)
        // console.log(username)
        // console.log(password)
        props.navigation.navigate('home')
    }

    return (
        <>
            <Container>
                <Banner
                    title="Register"
                    subTitle="Join the world of opportunities"
                />
                
                <Spacer type="padding" position="horizontal" size="lg">
                    
                    <Spacer type="margin" position="bottom" size="md">
                        <Aligner justify="space-between" align="center">
                            <Label>E-mail</Label>
                            <Error>Invalid e-mail or username</Error>
                        </Aligner>
                        <InputHollow placeholder='Enter email' value={email} onChangeText={onChangeEmail} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="md">
                        <Label>Username</Label>
                        <InputHollow placeholder='Enter username' value={username} onChangeText={onChangeUsername} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="md">
                        <Label>Password</Label>
                        <InputHollow secureTextEntry={true} placeholder='Enter password' value={password} onChangeText={onChangePassword} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="xl">
                        <Aligner justify="center" align="center" >
                            <Text variant="caption">By joining, you agree to Hotel's </Text>
                            <TouchableOpacity>
                                <Text variant="caption" options={{ fontFamily: theme.fontFamilies.mulishBold, color: theme.colors.primary.default, textDecoration: 'underline' }}>Terms of Service</Text>
                            </TouchableOpacity>
                        </Aligner>
                    </Spacer>

                    <Spacer type="margin" position="bottom" customSize={135}>
                        <Button 
                            onPress={onRegister}
                            disabled={registerBtnDisabled}
                            text="Sign up"
                        />
                    </Spacer>

                </Spacer>
                <BottomContainer>
                    <Aligner justify="center" align="center" >
                        <Text>Already a member? </Text>
                        <TouchableOpacity onPress={navigateAway}>
                            <Text options={{ fontFamily: theme.fontFamilies.mulishBold, color: theme.colors.primary.default }}>Login</Text>
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
    clearLoginError
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)