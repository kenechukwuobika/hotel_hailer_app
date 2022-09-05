import { useEffect } from "react";
import { useState, useRef } from "react";
import { TouchableOpacity, View, Animated, Easing } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Spacer } from "../../../../shared-components/Spacer";
import { Text } from "../../../../shared-components/Text";

const Expandable = (props) => {
    const height = useRef(new Animated.Value(0)).current;
    // const heightValue = height.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [42, props.height]
    // })
    const [collapsed, setCollapsed ] = useState(true);
    const [totalHeight, setTotalHeight ] = useState(null);
    // let totalHeight = 0;
    // console.log("totalHeight")
    // console.log(totalHeight)

    // useEffect(() => {
    //     Animated.timing(height, {
    //         toValue: collapsed ? RFValue(42) : RFValue(totalHeight),
    //         duration: 200,
    //         easing: Easing.in,
    //         useNativeDriver: false
    //     }).start();
    // }, [collapsed])

    // useEffect(() => {
    //     if(RFValue(props.height) >= RFValue(42)){
    //         // totalHeight = props.height
    //         setTotalHeight(props.height)
    //     }
    // }, [props.height])

    const onShowContent = () => {
        setCollapsed(false)
    }

    const onHideContent = () => {
        setCollapsed(true)
    }

    const showExpandableText = () => {
        if(collapsed){
            return (
                <TouchableOpacity onPress={onShowContent}>
                    <Text>{props.text}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <TouchableOpacity onPress={onHideContent}>
                <Text>Collapse</Text>
            </TouchableOpacity>
        )
    }

    const displayContent = () => {
        if(collapsed){
            return (
                <>
                    <Spacer type="margin" position="bottom" customSize={8}>
                        <Animated.View
                            style= {props.height && {
                                height: height,
                                backgroundColor: "red"
                            }}
                        >
                            {props.children}
                        </Animated.View>
                    </Spacer>

                    {showExpandableText()}
                </>
            )
        }

        return (
            <>
                <Spacer type="margin" position="bottom" customSize={8}>
                    <Animated.View
                        style= {{
                            height: height,
                            backgroundColor: "red"
                        }}
                    >
                        {props.children}
                    </Animated.View>
                </Spacer>

                {showExpandableText()}
            </>
        )
    }

    return (
        <>
            {/* <Spacer type="margin" position="bottom" customSize={8}>
                <Animated.View
                
                style= {{
                    height: heightValue
                }}
                >
                    {props.children}
                </Animated.View>
            </Spacer> */}

            {displayContent()}
        </>
    )
}

export default Expandable;