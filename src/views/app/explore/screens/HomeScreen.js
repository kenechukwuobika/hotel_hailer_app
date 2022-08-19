import React from 'react';
import { SvgXml } from 'react-native-svg';

import { Text } from '../../../../shared-components/typography/Text';
import { Container } from '../../../../shared-components/Container';
import { Input } from '../../../../shared-components/Form/formComponent';
import { Spacer } from '../../../../shared-components/spacer/spacerComponent';
import { Aligner } from '../../../../shared-components/aligner/AlignerComponent';
import { Menu } from '../components/Menu';

import location from '../../../../../assets/svg/location';
import { useTheme } from 'styled-components';

export default HomeScreen = (props) => {
    const menuItems = ['Hotel', 'Motel', 'Villa', 'Home', 'Apartment'];
    const theme = useTheme();
    return (
        <Container>
            <Spacer type="margin" position="top" customSize={53}>
                <Spacer type="padding" position="horizontal" customSize={24}>
                    
                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Input placeholder="Search Place" />
                    </Spacer>
                    
                    <Spacer type="margin" position="bottom" customSize={24}>
                        <Aligner justify="flex-start">
                            <Spacer type="margin" position="right" customSize={8}>
                                <SvgXml xml={location} width={10} height={16} />
                            </Spacer>
                            <Text
                                color= "blue"
                                fontFamily= {theme.fontFamilies.mulishBold}
                                options={{ color: theme.colors.primary.default, textDecoration: "underline" }}
                            >
                                Around current location
                            </Text>
                        </Aligner>
                    </Spacer>

                    <Menu menuItems={menuItems} activeItem={menuItems[0]} />

                    <Aligner justify="space-between">
                        <Text variant="title" color= "dark">Popular</Text>
                        <Text color= 'blue'>See all</Text>
                    </Aligner>
                </Spacer>
            </Spacer>
        </Container>
    );
}