import { ScrollView, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

export const Container = styled(View).attrs({
    contentContainerStyle: {
        height: '100%',
        flexGrow: 1,
    }
})`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    flex: 1;
    backgroundColor: transparent;
    paddingTop: ${RFValue(24)}px
`;

// export const Container = styled.View`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     padding: 0;
//     flex: 1;
//     backgroundColor: white;
// `;

export const BottomContainer = styled.View`
    position: absolute;
    bottom: ${RFValue(40)}px;
    width: 100%;
    padding: 0;
    flex: 1;
    backgroundColor: transparent;
`;