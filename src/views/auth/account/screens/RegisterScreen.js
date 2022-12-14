import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { signupAction, showLoading, clearAuthError } from '../../../../redux/actions/authAction';

import Banner from '../components/Banner';
import { InputHollow, Label, Error } from '../../../../shared-components/Form';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/Text';
import Button from '../../../../shared-components/Button';
import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';

const RegisterScreen = (props) => {
    const theme = useTheme();
    const { signupErrors, clearAuthError, signupAction, showLoading, clearLoading, isLoading, isSignedIn } = props;
    const [errors, setErrors] = useState({});
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerBtnDisabled, setRegisterBtnDisabled] = useState(true);
    
    useEffect(() => {
        clearAuthError();
    }, []);
    
    useEffect(() => {
        if(userName && email && password && Object.keys(errors).length === 0){
            setRegisterBtnDisabled(false)
        }
        else{
            setRegisterBtnDisabled(true)
        }
    }, [userName, email, password]);

    // useEffect(() => {
    //     if(isLoading){
    //         setRegisterBtnDisabled(true)
    //     }
    // }, [isLoading])

    const navigateAway = () => {
        props.navigation.push('Login');
    }

    const onChangeUsername = text => {
        setUserName(text);
        // validateUsername()
    }

    const onChangeEmail = text => {
        setEmail(text);
        // validateEmail();
    }

    const onChangePassword = text => {
        setPassword(text);
    }

    const validateUsername = () => {
        const existingErrors = {...errors};
        if(userName.length < 2) {
            existingErrors.userName = "Invalid username";
            setErrors(existingErrors);
        }else{
            clearInputErrors("userName")
        }
    }

    const validateEmail = () => {
        const existingErrors = {...errors};
        
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            existingErrors.email = "Invalid email";
            setErrors(existingErrors);
        }

        else if(email.length < 4) {
            existingErrors.email = "Invalid email";
            setErrors(existingErrors);
        }

        else{
            clearInputErrors("email");
        }
    }

    const clearInputErrors = (key) => {
        const existingErrors = {...errors};
        delete(existingErrors[key]);
        setErrors(existingErrors);
    }

    const onRegister = () => {
        const registerData = {
            userName,
            email,
            password
        }
        showLoading();
        signupAction(registerData);
        // props.navigation.push('Home');
    }

    const displayErrors = () => {
        console.log(signupErrors)
        if(signupErrors){
            return signupErrors.map(signupError => {
                return (
                    <Spacer type="margin" position="bottom" size="sm">
                        <Aligner justify="center" align="center">
                            <Error>{signupError}</Error>
                        </Aligner>
                    </Spacer>
                )
            });
        }

        return(<></>);
    }

    return (
        <>
            <Container>
                <Banner
                    title="Register"
                    subTitle="Join the world of opportunities"
                />
                
                <Spacer type="padding" position="horizontal" size="lg">

                    {displayErrors()}
                    
                    <Spacer type="margin" position="bottom" size="md">
                        <Aligner justify="space-between" align="center">
                            <Label>E-mail</Label>
                            {errors.email && <Error>{errors.email}</Error>}
                        </Aligner>
                        <InputHollow error={errors.email ? true : false} placeholder='Enter email' value={email} onChangeText={onChangeEmail} />
                    </Spacer>

                    <Spacer type="margin" position="bottom" size="md" customSize={4}>
                        <Aligner justify="space-between" align="center">
                            <Label>Username</Label>
                            {errors.userName && <Error>{errors.userName}</Error>}
                        </Aligner>
                        <InputHollow error={errors.userName ? true : false} placeholder='Enter username' value={userName} onChangeText={onChangeUsername} />
                        <Error>{errors.userName && errors.userName}</Error>
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
    const { signupErrors, isLoading, isSignedIn } = auth;
    return {
        signupErrors,
        isLoading,
        isSignedIn
    }
}

const mapDispatchToProps = { 
    signupAction,
    showLoading,
    clearAuthError
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)