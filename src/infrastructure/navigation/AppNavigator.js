import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';

import PropertyNavigator from './PropertyNavigator';
import BookingNavigator from './BookingNavigator';

import HomeScreen from '../../views/app/explore/screens/home.screen';
import NotificationsScreen from '../../views/app/notifications/screens/notification.screen';

import SafeArea from '../../shared-components/SafeArea';
import ModalPopup from '../../shared-components/modal.component';

import { 
    compass,
    bell,
    love,
    baggage,
    user
} from '../../../assets/icons';

const AppNavigator = (props) => {

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
        const routeName = route.name.toLowerCase();
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
        <SafeArea>
            <appTab.Navigator 
                screenOptions={createScreenOptions}
                backBehavior="history"
            >
                <appTab.Screen name="Explore" component={PropertyNavigator} />
                <appTab.Screen name="Notification" component={NotificationsScreen} />
                <appTab.Screen name="Saved" component={HomeScreen} />
                <appTab.Screen name="bookings" component={BookingNavigator} />
                <appTab.Screen name="Profile" component={HomeScreen} />
            </appTab.Navigator>

            <ModalPopup />
        </SafeArea>
    )
}

export default AppNavigator;