import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components";

import { Spacer } from '../../../../shared-components/Spacer';
import { Aligner } from '../../../../shared-components/Aligner';
import { Text } from '../../../../shared-components/Text';

const MenuItem = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const Menu = (props) => {
    const theme = useTheme();
    const [activeItem, setActiveItem] = useState(null);
    const { menuItems } = props;

    useEffect(() => {
        setActiveItem(menuItems[0])
    }, [])

    const onChangeMenuItem = (index) => {
        setActiveItem(menuItems[index])
    }

    const displayMenuItem = () => {
        if(!menuItems){
            return <></>
        }
        
        return menuItems.map((item, index) => {
            let marginRight = 8;
            if(menuItems.length-1 === index){
                marginRight = 0;
            }

            let fontFamily = theme.fontFamilies.raleway;
            let backgroundColor = "transparent";
            let color = theme.colors.blues.b1;

            if(activeItem === item){
                fontFamily = theme.fontFamilies.ralewaySemiBold;
                backgroundColor = theme.colors.primary.default;
                color = theme.colors.white;
            }

            return (
                <Spacer key={item} type="margin" position="right" customSize={`${marginRight}`}>
                    <TouchableOpacity onPress={() => onChangeMenuItem(index)}>
                        <MenuItem style={{ borderRadius: 5, backgroundColor }}>
                            <Spacer type="padding" position="horizontal" customSize={8}>
                                <Spacer type="padding" position="vertical" customSize={8}>
                                    <Text options={{fontFamily, color}}>{item}</Text>
                                </Spacer>
                            </Spacer>
                        </MenuItem>
                    </TouchableOpacity>
                </Spacer>
            )
        })
    }

    return (
        <Spacer type="margin" position="bottom" customSize={16}>
            <Aligner>
                {displayMenuItem()}
            </Aligner>
        </Spacer>
    )
}