import {router, useLocalSearchParams} from 'expo-router';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from "../../constants/Colors";

export default function MatchDetailPage() {
    const { id: matchId } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Match Detail Screen - { matchId }</Text>

            <TouchableOpacity style={styles.link} onPress={() => router.back()}>
                <Text style={styles.linkText}>Go back to list matches</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: Colors.text,
    },
});
