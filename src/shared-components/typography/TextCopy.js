import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fontFamilies.raleway};
  color: ${theme.colors.blues.b1};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 150;
`;

const raleway = (theme, options={}) => `
    font-family: Raleway_${theme.fontFamilies[options.weight]};
    font-size: ${options.fontSize}px;
    color: ${options.color};
`;

const mulish = (theme, options={}) => `
    font-family: Mulish_${theme.fontFamilies[options.weight]};
    font-size: ${options.fontSize}px;
    color: ${options.color};
`;

const variants = {
    raleway,
    mulish
};

export const TextStyle = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme, options }) => variants[variant](theme, options)}
`;

export const TextCopy = (props) => {
    const theme = useTheme();
    const defaultStyles = {
        raleway: {
            weight: theme.fontWeights.regular,
            fontSize: theme.fontWeights.body,
            color: theme.colors.greys.g1
        },
        mulish: {
            weight: theme.fontWeights.bold,
            fontSize: theme.fontWeights.h1,
            color: theme.colors.greys.g1
        },
    }

    console.log(props)
    if(props.color){
        
    }
    return (
        <TextStyle {...props}>{props.children}</TextStyle>
    )
}


TextCopy.defaultProps = {
  variant: "raleway"
};