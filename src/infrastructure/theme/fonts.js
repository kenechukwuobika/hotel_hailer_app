/**
 * This file is used define typography variables
 * 
 */

import { RFValue } from 'react-native-responsive-fontsize';

export const fontFamilies = {
    raleway: "Raleway_400Regular",
    ralewayBold: "Raleway_700Bold",
    ralewaySemiBold: "Raleway_600SemiBold",
    mulish: "Mulish_400Regular",
    mulishSemiBold: "Mulish_600SemiBold",
    mulishBold: "Mulish_700Bold",
}

export const fontWeights = {
    regular: "400Regular",
    semi: "600SemiBold",
    bold: "700Bold",
    extraBold: "800ExtraBold",
};

export const fontSizes = {
    label: RFValue(10),
    caption: RFValue(12),
    body: RFValue(14),
    title: RFValue(18),
    ProductTitle: RFValue(20),
    h5: RFValue(24),
    h4: RFValue(28),
    h3: RFValue(32),
    h2: RFValue(36),
    h1: RFValue(40),
};

// const fontSizesArray = Array.from({length: 20}, (_, i) => ( i + 1 ) * 2);

// let sizes = {};

// fontSizesArray.forEach(size => {
//     sizes = {...sizes, [size]: `${size}`}
// });

// export const fontSizes = {...sizes};