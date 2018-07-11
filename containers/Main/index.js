import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: -1,     // count clicks, start at -1 so 1st click incrs to index 0
      opacity: new Animated.Value(0),
    };

    this.function1 = this.function1.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.functions = [
      this.function1,
    ];
  }

  handleClick(){
    this.setState({ click: this.state.click + 1}, this.runFunction)
  }

  runFunction(){
    // exectute if click count hasn't exceeded no. of functions
    if(this.state.click > this.functions.length - 1) return null;
    else this.functions[this.state.click]();
  }

  function1(){
    Animated.timing(
      this.state.opacity, {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }

  render() {

    return (
      // Whole Screen is Touchable
      <TouchableOpacity
        style={styles.container}
        onPress={this.handleClick}
        activeOpacity={0.95}
      >

        <View style={styles.container}>
          <Image
            source={{uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}}
            style={[styles.backgroundImage, {zIndex: 0}]}
            resizeMode='contain'
          />
          <Animated.Image
            style={[
              {
                opacity: this.state.opacity,
                zIndex: 1
              },
              styles.backgroundImage
            ]}
            source={{uri: 'https://78.media.tumblr.com/f14c645ca21c1f39b35aa2161ce75a8c/tumblr_orrpahCD0b1w49wyqo1_500.jpg'}}
            resizeMode='contain'
          />

          <Text>Hello there</Text>
        </View>

      </TouchableOpacity>
    );
  }

}

export default Main;
