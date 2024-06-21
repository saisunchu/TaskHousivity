import React from 'react';
import {StyleSheet} from 'react-native';
// import {AppProps} from './helpers/interface';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './reducers';



const App = () => {
  return (
    <Provider store={store}>
    
        <MainNavigation />
    
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
