import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components";

import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';
import { Text } from '../../../../shared-components/typography/Text';

const MenuItem = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const Menu = (props) => {
    const theme = useTheme();
    let fontWeight = 700;
    let backgroundColor = theme.colors.indicators.success;
    
    if(props.activeItem){
        fontWeight = 700;
        backgroundColor = theme.colors.primary.default;
    }

    const displayMenuItem = () => {
        if(!props.menuItems){
            return <></>
        }
        
        return props.menuItems.map((item, index) => {
            let marginRight = 8;
            if(props.menuItems.length-1 === index){
                marginRight = 0;
            }

            return (
                <Spacer key={item} type="margin" position="right" customSize={`${marginRight}`}>
                    <TouchableOpacity>
                        <MenuItem style={{ borderRadius: 5, backgroundColor }}>
                            <Spacer type="padding" position="horizontal" customSize={8}>
                                <Spacer type="padding" position="vertical" customSize={8}>
                                    <Text>{item}</Text>
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