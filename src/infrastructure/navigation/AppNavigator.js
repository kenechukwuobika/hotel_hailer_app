import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Spacer } from '../../shared-components/spacer/spacerComponent';
import HomeScreen from '../../views/app/explore/screens/HomeScreen';
import NotificationsScreen from '../../views/app/notifications/screens/NotificationsScreen';

import compass from '../../../assets/svg/compass';
import bell from '../../../assets/svg/bell';
import love from '../../../assets/svg/love';
import baggage from '../../../assets/svg/baggage';
import user from '../../../assets/svg/user';

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
            tabBarInactiveTintColor: theme.colors.greys.g3
            
        }
    };

    return (
        <appTab.Navigator 
            screenOptions={createScreenOptions}
        >
            <appTab.Screen name="explore" component={HomeScreen} />
            <appTab.Screen name="notification" component={NotificationsScreen} />
            <appTab.Screen name="saved" component={HomeScreen} />
            <appTab.Screen name="bookings" component={HomeScreen} />
            <appTab.Screen name="profile" component={HomeScreen} />
        </appTab.Navigator>
    )
}