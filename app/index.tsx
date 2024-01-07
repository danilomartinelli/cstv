import {Link} from 'expo-router';
import {StyleSheet, View, Text} from 'react-native';
import Colors from "../constants/Colors";

export default function MainPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>List Matches Screen</Text>

            <Link
                href={{
                    pathname: "/match-detail/[id]",
                    params: {id: '1'}
                }}
                style={styles.link}
            >
                <Text style={styles.linkText}>Go to match detail</Text>
            </Link>
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
        color: Colors.text
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
