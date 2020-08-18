import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {Container} from './styles';
const {width} = Dimensions.get('window');
interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide: React.FC<SlideProps> = ({label, right}) => {
  return (
    <View style={width}>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;
