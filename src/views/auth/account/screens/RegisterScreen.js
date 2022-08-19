import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { XmlContainer, LoginContainer } from '../styles/accountStyles';
import { xml } from '../../../../../assets/svg/recatngleSvg';
import { InputHollow, Label, Error } from '../../../../shared-components/Form/formComponent';
import { Container, BottomContainer } from '../../../../shared-components/Container';
import { Text } from '../../../../shared-components/typography/Text';
import Button from '../../../../shared-components/button/buttonComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';
import { useTheme } from 'styled-components';

export default RegisterScreen = (props) => {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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
        console.log(email)
        console.log(username)
        console.log(password)
        props.navigation.navigate('home')
    }

    return (
        <>
            <Container>
                <SvgXml height="35%" width="100%" preserveAspectRatio='none' xml={xml} />
                
                <Spacer type="margin" position="bottom" size="xl" />

                <XmlContainer>
                    <LoginContainer>
                        <Spacer type="padding" position="left" size="lg">
                            <Text variant="header">Register</Text>
                            <Text options={{ fontFamily: theme.fontFamilies.mulish, color: theme.colors.white }}>Join the world of opportunities</Text>
                        </Spacer>
                    </LoginContainer>
                </XmlContainer>
                
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