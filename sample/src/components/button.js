import React from 'react';
import {
    TouchableHighlight, TouchableNativeFeedback, Platform,
    View, Text
} from 'react-native';
import { buttonStyles } from './styles';




export const Button = ({ testID, label, isPrimary, style, onPress }) => {

    const button = () => (
        <View testID={testID} style={[buttonStyles.container,
        isPrimary ? buttonStyles.primary : buttonStyles.secondary]}>
            <Text style={buttonStyles.text}>{label}</Text>
        </View>
    )

    if (Platform.OS === 'ios') {
        return (
            <TouchableHighlight onPress={onPress} style={style}>
                {button()}
            </TouchableHighlight>
        );
    }
    return (
        <TouchableNativeFeedback onPress={onPress} style={style}>
            {button()}
        </TouchableNativeFeedback>
    );
}