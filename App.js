import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts as useRaleway, Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';
import { useFonts as useMulish, Mulish_400Regular, Mulish_600SemiBold, Mulish_700Bold } from '@expo-google-fonts/mulish';

import store from './src/redux/store';
import SafeArea from './src/shared-components/utils/SafeArea';
import CustomNavigator from './src/infrastructure/navigation';

import { theme } from './src/infrastructure/theme';

export default function App() {
    const [ralewayLoaded] = useRaleway({
        Raleway_400Regular,
        Raleway_600SemiBold,
        Raleway_700Bold,
        Raleway_800ExtraBold
    });

    const [mulishLoaded] = useMulish({
        Mulish_400Regular,
        Mulish_600SemiBold,
        Mulish_700Bold
    });


    if(!ralewayLoaded || !mulishLoaded){
        return null;
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SafeArea>
                    <CustomNavigator />
                </SafeArea>
            </ThemeProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
