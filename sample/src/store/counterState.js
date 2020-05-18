import {atom} from 'recoil';

export const counterState = atom({
    key: 'Counter',
    default: 0,
    persistence_UNSTABLE: {
        type: 'url',
        backButton: false
    }
})