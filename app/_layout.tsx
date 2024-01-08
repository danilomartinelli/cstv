import {useCallback} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Slot} from "expo-router";
import {StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import {StatusBar} from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {RecoilRoot} from "recoil";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const insets = useSafeAreaInsets();

    const [fontsLoaded] = useFonts({
        'Roboto': require('../assets/fonts/Roboto.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <RecoilRoot>
            <StatusBar style="light"/>
            <View style={[styles.container, { paddingTop: insets.top }]} onLayout={onLayoutRootView}>
                <Slot/>
            </View>
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
});