import {useNavigation} from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showCancel = true}) => {
    const navigation = useNavigation();

    function handleGoBackToHomepage() {
        navigation.navigate("OrphanagesMap");
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Icon name="arrow-left" size={24} color="#15B6D6"/>
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {showCancel ?
                <BorderlessButton onPress={handleGoBackToHomepage}>
                    <Icon name="x" size={24} color="#FF669D"/>
                </BorderlessButton>
                : <View/>
            }
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#F9FAFC",
        borderBottomWidth: 1,
        borderColor: "#DDE3F0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: {
        fontFamily: "Nunito-SemiBold",
        color: "#8FA7B3",
        fontSize: 16,
    }
});
