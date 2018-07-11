import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: width * 1.0001,  // hack removes white line
    height: height,
  }
});

export default styles;
