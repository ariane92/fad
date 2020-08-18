import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

import Slide from '../../../components/Slide';

import {Container, Slider, Footer} from './styles';

const Onboarding: React.FC = () => {
  return (
    <Container>
      <Slider>
        <ScrollView
          horizontal
          decelerationRate="fast"
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
        </ScrollView>
        <Footer>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#000',
            }}
          />
        </Footer>
      </Slider>
    </Container>
  );
};

export default Onboarding;
