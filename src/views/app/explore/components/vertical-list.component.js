import React from "react";
import { FlatList } from "react-native";

const HorizontalList = (props) => {
    const { data, length } = props;
    
    if(!data){

    }

    return(
        <FlatList 
            data={data}
            horizontal={true}
            scrollEnabled={props.scrollEnabled}
            renderItem={({ item }) => {
                return(
                    <>{React.cloneElement(props.children, {item})}</>
                )
            }}
        />
    )
}

HorizontalList.defaultProps = {
    scrollEnabled: true
}

export default HorizontalList;