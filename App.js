import React, { Component } from 'react';
import { VictoryLine, VictoryGroup, VictoryVoronoiContainer } from 'victory-native';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import data from './data';

console.log(data);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const CHART_HEIGHT_PIXELS = 260;

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
      <VictoryGroup
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={() => {}}
          />
        }
        padding={10}
      >
        <VictoryLine
          style={{
            data: {
              stroke: 'black',
              strokeWidth: 2,
            },
            parent: {
              marginLeft: 0,
            },
          }}
          padding={{
            top: 50,
            bottom: 10,
          }}
          height={CHART_HEIGHT_PIXELS}
          data={data}
        />
      </VictoryGroup>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
