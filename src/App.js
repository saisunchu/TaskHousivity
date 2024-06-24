import React from 'react';
import {StyleSheet} from 'react-native';
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
