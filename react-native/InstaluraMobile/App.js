/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const fotos = [
      {id: 1, usuario: 'rafael'},
      {id: 2, usuario: 'alberto'},
      {id: 3, usuario: 'guilherme'}
    ];

    return (
      <ScrollView style={{marginTop: 20}}>
        {fotos.map(foto =>
          <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image
              source={require('./resources/img/alura.jpg')} 
              style={{width: width, height: width}}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

