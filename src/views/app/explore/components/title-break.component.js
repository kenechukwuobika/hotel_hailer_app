import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { Aligner } from "../../../../shared-components/Aligner";
import { Spacer } from "../../../../shared-components/Spacer";
import { Text } from "../../../../shared-components/Text";

const TitleBreak = props => {
    const theme = useTheme();
    return(
        <Spacer type="padding" position="horizontal" customSize={24}>
            <Spacer type="margin" position="bottom" customSize={8}>
                <Aligner justify="space-between">
                    <Text variant="title" color= "dark">{props.title}</Text>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text options={{color: theme.colors.primary.default}}>See all</Text>
                    </TouchableOpacity> 
                </Aligner>
            </Spacer>
        </Spacer>
    )
}

export default TitleBreak;