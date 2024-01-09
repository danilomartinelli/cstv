import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from "../components/Header";
import {useRecoilValue} from "recoil";
import {matchState} from "../store/match";
import {Opponents} from "../components/Opponents";
import {formatMatchDate} from "../utils/formatMatchDate";
import Colors from "../constants/Colors";
import {useFetch} from "../hooks/useFetch";
import {Player} from "../types";
import {PlayerCard} from "../components/PlayerCard";

export default function MatchDetailPage() {
    const match = useRecoilValue(matchState);

    if (!match) return null;

    const [{data: playersHomeTeam, loading: loadingPlayersHomeTeam}] = useFetch<Player[]>(
        `https://api.pandascore.co/csgo/players?filter[team_id]=${match.opponents[0].opponent.id}`,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_PANDA_SCORE_API_KEY}`
            }
        }
    )

    const [{data: playersGuestTeam, loading: loadingPlayersGuestTeam}] = useFetch<Player[]>(
        `https://api.pandascore.co/csgo/players?filter[team_id]=${match.opponents[1].opponent.id}`,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_PANDA_SCORE_API_KEY}`
            }
        }
    )

    if (loadingPlayersHomeTeam || loadingPlayersGuestTeam) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator/>
            </View>
        )
    }

    return (
        <>
            <Header title={`Liga X - Serie Y`} allowGoBack/>
            <View style={styles.container}>
                <View>
                    <Opponents opponents={match.opponents}/>
                </View>
                <Text style={[styles.dateText]}>
                    {
                        match.status === "running" ? "Agora" : formatMatchDate(match.scheduled_at)
                    }
                </Text>
                <ScrollView contentContainerStyle={styles.players}>
                    <View style={styles.column}>
                        {
                            playersHomeTeam?.map(player => (
                                <PlayerCard orientation="left" player={player} key={player.id}/>
                            ))
                        }
                    </View>
                    <View style={styles.column}>
                        {
                            playersGuestTeam?.map(player => (
                                <PlayerCard orientation="right" player={player} key={player.id}/>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    dateText: {
        color: Colors.text,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20
    },
    players: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: "45%",
        gap: 16,
    },
});
