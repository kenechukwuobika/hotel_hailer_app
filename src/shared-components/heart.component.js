import { connect } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

import { Spacer } from './Spacer';
import { Aligner } from './Aligner';

import { onSaveItem } from '../redux/actions/wishListAction';

import { arrowLeft, filter, love } from '../../assets/icons';
import { useState } from 'react';
import { useEffect } from 'react';

const heartStyle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.greys.g5};
    font-size: ${props => props.theme.fontSizes.body}px;
    padding-horizontal: ${RFValue(16)}px;
    padding-vertical: ${RFValue(11)}px;
    font-size: ${RFValue(14)}px;
    border-radius: ${RFValue(8)}px
`;

const MapStateToProps = ({ wishListReducer }) => {
    const { savedItems } = wishListReducer
    return { savedItems };
}

const MapDispatchToProps = {
    onSaveItem
}

export const Heart = connect(MapStateToProps, MapDispatchToProps)((props) => {
    const [ fill, setFill ] = useState(props.color);
    const [ stroke, setStroke ] = useState(props.stroke);
    const { onSaveItem, savedItems, property } = props;
    const theme = useTheme();

    useEffect(() => {
        onCheckList()
    }, [])

    const onCheckList = () => {
        if(savedItems) {
            const itemExists = savedItems.find(item => item._id ===  property._id);
            // console.log(savedItems[0]._id)
            // console.log(property._id)
            if(itemExists){
                return setFill(theme.colors.indicators.error)
            }
            setFill(theme.colors.greys.g3)
        }
    }

    const onPress = () => {
        // console.log('clicked')
        onSaveItem(property)
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <SvgXml xml={love(fill, stroke)} />
        </TouchableOpacity>
    )
})