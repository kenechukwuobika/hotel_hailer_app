import styled from 'styled-components';

const AlignStyle = styled.View`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap};
`;

export const  Aligner = (props) => {
    return (
        <AlignStyle {...props}>{props.children}</AlignStyle>
    )
}

Aligner.defaultProps = {
    justify: "center",
    align: "center",
    direction: "row",
    wrap: "nowrap"
}