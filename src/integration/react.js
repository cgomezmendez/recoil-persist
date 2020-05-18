import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useTransactionObservation_UNSTABLE, RecoilRoot as Root } from 'recoil';


export const PersistGate = ({ children, isReady, loading }) => {
    useTransactionObservation_UNSTABLE(({ atomValues, atomInfo, modifiedAtoms, transactionMetadata }) => {
        for (const modifiedAtom of modifiedAtoms) {
            AsyncStorage.setItem(modifiedAtom, JSON.stringify({ value: atomValues.get(modifiedAtom) }));
        }
    })

    return (
        isReady && children
        || (
            { loading }
        )
    );
}

export const RecoilRoot = ({ children, loading }) => {
    const [isReady, setIsReady] = useState(false);
    const initialState = ({ set }) => {
        AsyncStorage.getAllKeys((error, keys) => {
            console.log(error);
            const promises = keys.map((key) =>
                AsyncStorage.getItem(key)
            );
            Promise.all(promises).then((values) => {
                for (let i = 0; i < promises.length; i++) {
                    const key = keys[i];
                    const value = JSON.parse(values[i]).value;
                    set({ key }, value);
                }
                setIsReady(true);
            });
        });
    }

    return (
        <Root initializeState={initialState}>
            <PersistGate isReady={isReady} children={children} loading={loading} />
        </Root>
    )
}