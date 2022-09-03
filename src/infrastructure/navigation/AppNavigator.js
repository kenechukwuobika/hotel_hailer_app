import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';

import PropertyNavigator from './PropertyNavigator';

import HomeScreen from '../../views/app/explore/screens/home.screen';
import NotificationsScreen from '../../views/app/notifications/screens/NotificationsScreen';

import { 
    compass,
    bell,
    love,
    baggage,
    user
} from '../../../assets/icons';

export default AppNavigator = () => {
    const appTab = createBottomTabNavigator();
    const theme = useTheme();
    const tabIcons = {
        explore: compass,
        notification: bell,
        saved: love,
        bookings: baggage,
        profile: user,
    }
    
    const createScreenOptions = (navigation) => {
        const { route } = navigation;
        const routeName = route.name;
        const iconName = tabIcons[routeName];
        const title = `${routeName.charAt(0).toUpperCase()}${routeName.slice(1)}`;
        return {
            headerShown: false,
            title,
            tabBarIcon: (tab) => {
                const { color } = tab;
                return (
                    <SvgXml xml={iconName(color)} />
                )
            },
            tabBarStyle: { 
                height: 75,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 16
            },
            tabBarIconStyle: {
                marginBottom: 0
            },
            tabBarLabelStyle: {
                marginBottom: 16
            },
            tabBarActiveTintColor: theme.colors.primary.default,
            tabBarInactiveTintColor: theme.colors.greys.g3,
            Animation: "slide_from_right",
        }
    };

    return (
        <appTab.Navigator 
            screenOptions={createScreenOptions}
            backBehavior="history"
        >
            <appTab.Screen name="explore" component={PropertyNavigator} />
            <appTab.Screen name="notification" component={NotificationsScreen} />
            <appTab.Screen name="saved" component={HomeScreen} />
            <appTab.Screen name="bookings" component={HomeScreen} />
            <appTab.Screen name="profile" component={HomeScreen} />
        </appTab.Navigator>
    )
}