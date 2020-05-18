import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const buttonStyles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 45,
        minWidth: '100%',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.PrimaryText,
        fontWeight: '600',
    },
    primary: {
        backgroundColor: colors.Primary,
    },
    secondary: {
        backgroundColor: colors.Secondary,
    }
});
