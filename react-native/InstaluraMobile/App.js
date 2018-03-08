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
  Dimensions,
  FlatList
} from 'react-native';

import Post from './components/Post';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  // Faz a requisição pro servidor quando o componente carregar
  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json})) // seta o estado do componente
  }
  
  render() {
    return (
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={this.state.fotos}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});