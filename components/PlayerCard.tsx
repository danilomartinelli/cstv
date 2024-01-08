import {View, Text, StyleSheet, Image} from "react-native";
import {Player} from "../types";
import Colors from "../constants/Colors";

type Orientation = "left" | "right";

interface PlayerCardProps {
    player: Player;
    orientation: Orientation;
}

const Content = ({player, orientation}: { player: Player, orientation: Orientation }) => {
    return (
        <View style={[styles.content, orientation === "left" ? styles.leftContent : styles.rightContent]}>
            <Text numberOfLines={1} style={styles.nickname}>{player.slug}</Text>
            <Text numberOfLines={1} style={styles.fullName}>{`${player.first_name} ${player.last_name}`}</Text>
        </View>
    )
}

const ImagePlaceholder = ({player, orientation}: { player: Player, orientation: Orientation }) => {
    return player.image_url ? (
        <Image
            style={[
                styles.placeholder,
                orientation === "left" ? {marginRight: 10} : {marginLeft: 10},
            ]}
            source={{uri: player.image_url}}
        />
    ) : (
        <View style={[
            styles.placeholder,
            orientation === "left" ? {marginRight: 10} : {marginLeft: 10},
        ]}/>
    )
}

export const PlayerCard = ({player, orientation}: PlayerCardProps) => {
    return (
        <View style={[styles.container, orientation === "left" ? styles.leftContainer : styles.rightContainer]}>
            {
                orientation === "left" ? (
                    <>
                        <Content orientation={orientation} player={player}/>
                        <ImagePlaceholder orientation={orientation} player={player}/>
                    </>
                ) : (
                    <>
                        <ImagePlaceholder orientation={orientation} player={player}/>
                        <Content orientation={orientation} player={player}/>
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#272639",
        height: 54,
        flexDirection: "row",
        gap: 16,
        width: "100%",
        marginTop: 5
    },
    content: {
        marginBottom: 8,
        justifyContent: "flex-end"
    },
    placeholder: {
        height: 48,
        width: 48,
        borderRadius: 8,
        backgroundColor: "#C4C4C4",
        marginTop: -5
    },
    nickname: {
        color: Colors.text,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "700",
        maxWidth: 80,
        overflow: 'hidden',
    },
    fullName: {
        color: "#6C6B7E",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        maxWidth: 80,
        overflow: 'hidden',
    },
    leftContainer: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: "flex-end",
    },
    rightContainer: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        justifyContent: "flex-start",
    },
    leftContent: {
        alignItems: "flex-end",
    },
    rightContent: {
        alignItems: "flex-start",
    }
});