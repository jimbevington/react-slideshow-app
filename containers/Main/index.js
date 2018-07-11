import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import MyBackgroundImage from '../../components/MyBackgroundImage/index';
import styles from './styles';
import images from '../../images';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: -1,     // count clicks, start at -1 so 1st click incrs to index 0
      backgroundOpacity: new Animated.Value(0),
      titleOpacity: new Animated.Value(0),
    };

    // Bind to THIS
    this.fadeInBackground = this.fadeInBackground.bind(this);
    this.fadeInTitle = this.fadeInTitle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // Function SEQUENCE
    this.functions = [
      this.fadeInBackground,
      this.fadeInTitle,
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

  fadeInBackground(){
    Animated.timing(
      this.state.backgroundOpacity, {
        toValue: 1,
        duration: 300,
      }
    ).start();
  }

  fadeInTitle(){
    Animated.timing(
      this.state.titleOpacity, {
        toValue: 1,
        duration: 200,
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

          {/* BACKGROUND IMAGES */}
          <MyBackgroundImage
            source={{uri: images.bg1}}
            zIndex={-1}
          />

          <MyBackgroundImage
            source={{uri: images.bg2}}
            opacity={this.state.backgroundOpacity}
            zIndex={0}
          />

          {/* CONTENT */}
          <View style={styles.content}>

            {/* TITLE */}
            <Animated.Text style={[
              styles.title,
              {opacity: this.state.titleOpacity},
            ]}>
              Wilderness
            </Animated.Text>
            
          </View>

        </View>

      </TouchableOpacity>
    );
  }

}

export default Main;
