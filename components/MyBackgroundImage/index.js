import React from 'react';
import { Animated, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MyBackgroundImage = (props) => {

  const allStyles = [
    // get styles from props
    {
      opacity: props.opacity || 1, // default to 1
      zIndex: props.zIndex || 0, // default to 0
    },
    // locally defined Styles - see './styles.js'
    styles.backgroundImage,
  ];

  // Add props.style to allStyles
  // handle objects or [objects]
  if(props.style){
    if(props.style.constructor === Array) allStyles.concat(props.style)
    else allStyles.push(props.style);
  }


  return (
    <Animated.Image
      style={allStyles}
      source={props.source}
      resizeMode='contain'
      onLoad={props.onLoad}
    />
  )

};

MyBackgroundImage.propTypes = {
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  opacity: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  zIndex: PropTypes.number,
  onLoad: PropTypes.func,
};

export default MyBackgroundImage;
