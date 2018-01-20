import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components/index';

export default class App extends React.Component {
  render() {
    return (
      //"The Provider accepts one argument — which is our store. 
      //The Provider role is to glue React and Redux together."
      <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
