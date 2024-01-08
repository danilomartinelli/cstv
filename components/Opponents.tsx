import {Image, StyleSheet, Text, View} from "react-native";
import { Match } from "../types";
import Colors from "../constants/Colors";

interface OpponentsProps {
    opponents: Match["opponents"];
}

export const Opponents = ({ opponents }: OpponentsProps) => {
    return (
        <View style={styles.opponents}>
            <View style={styles.imageContainer}>
                <Image source={{uri: opponents[0].opponent.image_url}} resizeMode="contain" style={styles.image}/>
                <Text style={styles.opponentName}>{opponents[0].opponent.name}</Text>
            </View>
            <Text style={styles.vsText}>vs</Text>
            <View style={styles.imageContainer}>
                <Image source={{uri: opponents[1].opponent.image_url}} resizeMode="contain" style={styles.image}/>
                <Text style={styles.opponentName}>{opponents[1].opponent.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    opponents: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        flexGrow: 1,
    },
    vsText: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    image: {
        width: 60,
        height: 60,
    },
    imageContainer: {
        alignItems: 'center',
        gap: 10,
    },
    opponentName: {
        color: Colors.text,
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: '400',
    }
});
