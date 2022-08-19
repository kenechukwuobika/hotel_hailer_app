import { View, Animated } from 'react-native';
import { Text } from '../../../../shared-components/typography/Text';

const NotificationsScreen = () => {

    const position = new Animated.ValueXY(0, 0);
    Animated.spring( position, {
        toValue: { x: 120, y: 150 }
    }).start()

    return (
        <View style={styles.container}>
            <Animated.Text style={position.getLayout()}>
                NotificationsScreen
            </Animated.Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default NotificationsScreen;