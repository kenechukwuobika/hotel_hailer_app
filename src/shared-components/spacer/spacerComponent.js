import { RFValue } from "react-native-responsive-fontsize";
import styled, { useTheme } from "styled-components/native";

// const sizesMax = 40;
// let sizes = [];

// for(let i = 2; i <= sizesMax; i + 2){
//     sizes.push(i);
// }

// console.log(sizes)

const fontSizesArray = Array.from({length: 20}, (_, i) => ( i + 1 ) * 2);

let fontSizes = {};

fontSizesArray.forEach(size => {
    fontSizes = {...fontSizes, [size]: `${size}`}
});

// export const Spacer = styled.View`
    
// `;

// Spacer.defaultProps = {

// };

const sizeVariant = {
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
};

const typeVariant = {
    margin: "margin",
    padding: "padding"
}

const positionVariant = {
  top: "Top",
  left: "Left",
  right: "Right",
  bottom: "Bottom",
  horizontal: "Horizontal",
  vertical: "Vertical",
};

const getVariant = (type, position, size, customSize) => {
    const theme = useTheme();
    const sizeIndex = sizeVariant[size];
    const property = `${typeVariant[type]}${positionVariant[position]}`;
    const value = customSize ? customSize : theme.spaces[sizeIndex];
    return `${property}:${RFValue(value)}px`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ type, position, size, customSize, children }) => {
  const variant = getVariant(type, position, size, customSize);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
