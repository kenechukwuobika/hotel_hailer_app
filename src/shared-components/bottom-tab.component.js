import React, { useEffect } from 'react';
import { View } from "react-native";
import styled from "styled-components";
import { RFValue } from 'react-native-responsive-fontsize';
import { useIsFocused } from "@react-navigation/native";

const BottomTabStyle = styled(View)`
    width: ${RFValue(242)}px;
    position: absolute;
    backgroundColor: ${props => props.theme.colors.greys.g5};
    paddingVertical: ${RFValue(24)}px;
    paddingHorizontal: ${RFValue(10)}px;
    width: 100%;
    bottom: 0
`;

const BottomTab = (props) => {

    const { navigation, children } = props;
    const isFocused = useIsFocused();

    useEffect(() => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        
        return () => navigation.getParent()?.setOptions({
          tabBarStyle: {
            height: 75,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 16
          }
        });
    }, [isFocused]);


    return(
        <BottomTabStyle>
            {children}
        </BottomTabStyle>
    )
}

export default BottomTab;