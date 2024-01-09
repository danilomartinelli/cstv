import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import {useFetch} from "../hooks/useFetch";
import {Match} from "../types";
import {FlashList} from "@shopify/flash-list";
import {Card} from "../components/Card";
import {router} from "expo-router";
import {useRecoilState} from "recoil";
import {matchState} from "../store/match";
import {useMemo} from "react";

export default function MainPage() {
    const [, setMatch] = useRecoilState(matchState);

    const {data: runningMatches, loading: loadingRunningMatches} = useFetch<Match[]>(
        "https://api.pandascore.co/csgo/matches/running?filter[opponents_filled]=true",
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_PANDA_SCORE_API_KEY}`
            }
        }
    )

    const {data: upcomingMatches, loading: loadingUpcomingMatches} = useFetch<Match[]>(
        "https://api.pandascore.co/csgo/matches/upcoming?filter[opponents_filled]=true",
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_PANDA_SCORE_API_KEY}`
            }
        }
    )
    
    const matches = useMemo(() => {
        return [...(runningMatches || []), ...(upcomingMatches || [])]
    }, [runningMatches, upcomingMatches])

    const handlePress = (item: Match) => {
        setMatch(item)
        router.push("/matchDetail")
    }

    if (loadingRunningMatches || loadingUpcomingMatches) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Partidas</Text>
            <FlashList
                data={matches}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <Card match={item}/>
                    </TouchableOpacity>
                )}
                estimatedItemSize={176}
                ItemSeparatorComponent={() => <View style={{height: 23}}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        color: Colors.text,
        fontFamily: 'Roboto',
        marginBottom: 24,
    }
});
