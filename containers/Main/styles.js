import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const contentWidth = width * 0.85;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.0001,  // hack removes white line
    height: height,
  },
  content: {
    width: contentWidth,
    marginTop: width * 0.15,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default styles;
