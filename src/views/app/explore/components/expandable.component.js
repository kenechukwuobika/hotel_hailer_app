import { useEffect } from "react";
import { useState, useRef } from "react";
import { TouchableOpacity, View, Animated, Easing } from "react-native";
import { SvgXml } from 'react-native-svg';
import { RFValue } from "react-native-responsive-fontsize";

import { Spacer } from "../../../../shared-components/Spacer";
import { Text } from "../../../../shared-components/Text";
import { caretRight } from '../../../../../assets/icons';
import { Aligner } from "../../../../shared-components/Aligner";

const Expandable = (props) => {
    const height = RFValue(42);
    const [collapsed, setCollapsed ] = useState(true);

    const onShowContent = () => {
        setCollapsed(false)
    }

    const onHideContent = () => {
        setCollapsed(true)
    }

    const showExpandableText = () => {
        if(!collapsed){
            return <></>
        }
        return (
            <TouchableOpacity onPress={collapsed ? onShowContent : onHideContent}>
                <Aligner justify="flex-start">
                    <Spacer type="margin" position="right" customSize={8}>
                        {/* <Text options={{ textDecoration: "underline"}}>{collapsed ? props.text : "Collapse"}</Text> */}
                        <Text options={{ textDecoration: "underline"}}>{props.text}</Text>
                    </Spacer>
                    <Spacer type="margin" position="top" customSize={4}>
                        <SvgXml xml={caretRight()} />
                    </Spacer>
                </Aligner>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Spacer type="margin" position="bottom" customSize={8}>
                <View
                    style= {collapsed && {
                        height,
                        overflow: "hidden"
                    }}
                >
                    {props.children}
                    {collapsed && <View
                        style={{
                            opacity: .8,
                            backgroundColor: "white",
                            width: "100%",
                            height: 10,
                            position: "absolute",
                            bottom: 0
                        }}
                    ></View>}
                </View>
            </Spacer>

            {showExpandableText()}
        </>
    )
}

export default Expandable;