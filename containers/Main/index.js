import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import MyBackgroundImage from '../../components/MyBackgroundImage/index';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
      click: -1,     // count clicks, start at -1 so 1st click incrs to index 0
      opacity: new Animated.Value(0),
    };

    // Bind to THIS
    this.function1 = this.function1.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);

    // Function SEQUENCE
    this.functions = [
      this.function1,
    ];
  }

  imageLoaded(){
    this.setState({ imageLoaded: !this.state.imageLoaded });
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
        {/* binds all elements to 1 TouchableOpacity CHILD */}
        <View style={styles.container}>

          <MyBackgroundImage
            source={{uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}}
            onLoad={this.imageLoaded}
          />

          <MyBackgroundImage
            source={{uri: 'https://78.media.tumblr.com/f14c645ca21c1f39b35aa2161ce75a8c/tumblr_orrpahCD0b1w49wyqo1_500.jpg'}}
            opacity={this.state.opacity}
            zIndex={1}
          />

          {/* Render when background Loaded */}
          {this.state.imageLoaded &&

            <Text>Hello there</Text>

          }

        </View>

      </TouchableOpacity>
    );
  }

}

export default Main;
