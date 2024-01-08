import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import {Match} from "../types";
import {formatMatchDate} from "../utils/formatMatchDate";

interface CardProps {
    match: Match;
}

export const Card = ({match}: CardProps) => {
    return (
        <View style={styles.container}>
            <View style={[styles.date, match.status === "running" && styles.runningDate]}>
                <Text style={[styles.dateText, match.status === "running" && styles.runningText]}>
                    {
                        match.status === "running" ? "Agora" : formatMatchDate(match.scheduled_at)
                    }
                </Text>
            </View>
            <View style={styles.opponents}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: match.opponents[0].opponent.image_url}} resizeMode="contain" style={styles.image}/>
                    <Text style={styles.opponentName}>{match.opponents[0].opponent.name}</Text>
                </View>
                <Text style={styles.vsText}>vs</Text>
                <View style={styles.imageContainer}>
                    <Image source={{uri: match.opponents[1].opponent.image_url}} resizeMode="contain" style={styles.image}/>
                    <Text style={styles.opponentName}>{match.opponents[1].opponent.name}</Text>
                </View>
            </View>
            <View style={styles.league}>
                <Image source={{uri: match.league.image_url}} resizeMode="contain" style={styles.leagueImage}/>
                <Text style={styles.leagueText}>
                    {`${match.league.name} - ${match.serie.full_name}`}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "rgba(250, 250, 250, 0.20)",
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 16,
        padding: 8,
    },
    dateText: {
        color: Colors.text,
        fontFamily: 'Roboto',
        fontSize: 8,
        fontWeight: '700',
    },
    runningDate: {
        backgroundColor: "#F42A35"
    },
    runningText: {
        textTransform: "uppercase"
    },
    container: {
        position: 'relative',
        height: 176,
        width: '100%',
        backgroundColor: Colors.tint,
        borderRadius: 16,
    },
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
    league: {
        borderTopColor: "rgba(255, 255, 255, 0.5)",
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 32,
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
    },
    leagueImage: {
        width: 16,
        height: 16,
    },
    leagueText: {
        color: Colors.text,
        fontFamily: 'Roboto',
        fontSize: 8,
        fontWeight: '400',
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