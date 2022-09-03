import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fontFamilies.raleway};
  color: ${theme.colors.blues.b1};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const defaults = (theme) => {
    body: `
    font-family: ${theme.fontFamilies.raleway};
    color: ${theme.colors.blues.b1};
  `
};

const header = (theme) => `
    font-family: ${theme.fontFamilies.mulishBold};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.h1}px;
`;

const h5 = (theme) => `
    font-family: ${theme.fontFamilies.ralewaySemiBold};
    font-size: ${theme.fontSizes.h5}px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body}px;
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption}px;
`;

const title = (theme) => `
    font-family: ${theme.fontFamilies.ralewaySemiBold};
    font-size: ${theme.fontSizes.title}px;
`;

const ProductTitle = (theme) => `
    font-family: ${theme.fontFamilies.ralewayBold};
    color: ${theme.colors.white};
    line-height: 30px;
    font-size: ${theme.fontSizes.ProductTitle}px;
`;

const link = (theme) => `
    font-family: ${theme.fontFamilies.ralewaySemiBold};
    font-size: ${theme.fontSizes.caption}px;
`;

const variants = {
    header,
    body,
    caption,
    title,
    ProductTitle,
    link,
    h5
};

export const TextStyle = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
  ${({ options }) => objectString(options)}
`;

export const Text = (props) => {
    return (
        <TextStyle {...props}>{props.children}</TextStyle>
    )
}


Text.defaultProps = {
  variant: "body",
  options: {}
};

const objectString = obj  => {
    if(typeof(obj) !== "object"){
        return;
    }
    let string = ``;
    const objLenght = Object.keys(obj).length;
    let counter = 1;
    for (let key in obj){
        string += `${key}: ${obj[key]}`
        if(counter <= objLenght-1){
            string += `;`
        }
        ++counter;
    }
    return string;
}