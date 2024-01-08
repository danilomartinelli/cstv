import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";
import {ArrowLeft} from "lucide-react-native";
import Colors from "../constants/Colors";

interface HeaderProps {
    title: string;
    allowGoBack?: boolean;
}

export const Header = ({title, allowGoBack = false}: HeaderProps) => {
    return (
        <View style={styles.topBar}>
            {
                allowGoBack && (
                    <TouchableOpacity style={styles.link} onPress={() => router.back()}>
                        <ArrowLeft color={Colors.text} />
                    </TouchableOpacity>
                )
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 34,
        marginBottom: 24,
        position: 'relative',
    },
    link: {
        position: 'absolute',
        left: 24,
        zIndex: 1,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.text,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Roboto',
    }
});