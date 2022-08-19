import styled from 'styled-components';

const AlignStyle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`;

export const Aligner = (props) => {
    return (
        <AlignStyle {...props}>{props.children}</AlignStyle>
    )
}

Aligner.defaultProps = {
    justify: "center",
    align: "center"
}