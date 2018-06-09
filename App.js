import React, { Component } from 'react';
import { VictoryLine, VictoryGroup, VictoryVoronoiContainer } from 'victory-native';
import { Line } from 'react-native-svg';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import data from './data';

const CHART_HEIGHT_PIXELS = 260;
const LONG_PRESS_TIME_MILLISECONDS = 450;

const FocusLine = (props) => {
  const {
    x,
    y,
  } = props;

  return (
    <Line
      stroke="red"
      strokeWidth="1"
      x1={x}
      x2={x}
      y1={y - CHART_HEIGHT_PIXELS}
      y2={y + CHART_HEIGHT_PIXELS}
    />
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: true,
      price: 0,
    }
  }

  handleTouchStart() {
    const that = this;
    this.intervalFunc = setInterval(() => {
      that.setState({scroll: false});

      console.log('TOUCH START');
      console.log(this.state.scroll);
    }, LONG_PRESS_TIME_MILLISECONDS);
  }

  handleTouchEnd() {
    clearInterval(this.intervalFunc);
    this.setState({scroll: true});

    console.log('TOUCH END');
    console.log(this.state.scroll);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        scrollEnabled={this.state.scroll}
      >
        <VictoryGroup
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={() => {}}
              labelComponent={<FocusLine />}
              onTouchStart={this.handleTouchStart.bind(this)}
              onTouchEnd={this.handleTouchEnd.bind(this)}
              onActivated={(points, props) => {
                console.log(`POINT: ${points[0].y}`);
                this.setState({ price: points[0].y });
              }}
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
        <Text>
          {this.state.price}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
