import React from 'react';
import { Text, TouchableHighlight, View, SafeAreaView } from "react-native"
import { useRecoilState } from 'recoil';
import { counterState } from "../../store/counterState";
import { Button } from '../../components/button';

export const CounterScreen = () => {
    const [counter, setCounter] = useRecoilState(counterState);

    const onUp = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    justifyContent: 'center', alignItems: 'center', flex: 1,
                    paddingHorizontal: 24
                }}>
                    <Text style={{ fontSize: 24, marginBottom: 14 }}>{counter}</Text>
                    <Button isPrimary label='Press me' onPress={onUp} />
                </View>
            </SafeAreaView>
        </> 
    );
}