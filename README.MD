# Recoil Persist

Inspired by [t2zz](https://github.com/rt2zz) [Redux Persist](https://github.com/rt2zz/redux-persist).

Persist and rehydrate recoil store.


### Basic Usage

If you are using react, wrap your root component with RecoilRoot imported from *recoil-persist*. This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. NOTE the RecoilRoot loading prop can be null, or any react instance, e.g. loading={<Loading />}


    import {RecoilRoot} from 'recoil-perist';

    //... normal setup, import components etc.

    const App = () => {
        return (
            <RecoilRoot loading={null}>
                <RootComponent />
            </RecoilRoot>
        );
    }


### React Integration


Redux persist ships with react integration as a convenience. The RecoilRoot component delay rendering until persistence is complete:

loading prop: The provided loading value will be rendered until persistence is complete at which point children will be rendered.
function children: The function will be invoked with a single 

