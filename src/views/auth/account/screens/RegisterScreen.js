import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { loginAction, showLoading, clearLoginError } from '../../../../redux/actions/authAction';

import Banner from '../components/Banner';
import { InputHollow, Label, Error } from '../../../../shared-components/Form';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/Text';
import Button from '../../../../shared-components/Button';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

const RegisterScreen = (props) => {
    const theme = useTheme();
    const [errors, setErrors] = useState({});
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
        validateUsername()
    }

    const onChangeEmail = text => {
        setEmail(text);
        validateEmail();
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

    const validateUsername = () => {
        console.log(errors)
        const existingErrors = {...errors};
        existingErrors.username = "Invalid username"
        if(username.length < 2) {
            setErrors(existingErrors)
        }else{
            clearErrors("username")

        }
    }

    const validateEmail = () => {
        clearErrors("email");
        const existingErrors = {...errors};
        existingErrors.email = "Invalid email";
        if(email.length <= 2) {
            setErrors(existingErrors)
        }
    }

    const clearErrors = (key) => {
        const existingErrors = {...errors};
        delete(existingErrors[key])
        setErrors(existingErrors)
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
                            {errors.email && <Error>{errors.email}</Error>}
                        </Aligner>
                        <InputHollow placeholder='Enter email' value={email} onChangeText={onChangeEmail} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="md" customSize={4}>
                        <Aligner justify="space-between" align="center">
                            <Label>Username</Label>
                            {errors.username && <Error>{errors.username}</Error>}
                        </Aligner>
                        <InputHollow error={errors.username ? true : false} placeholder='Enter username' value={username} onChangeText={onChangeUsername} />
                        <Error>{errors.username && errors.username}</Error>
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