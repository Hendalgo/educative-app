import React from 'react';
import {Animated} from 'react-native';
import styles from '@styles/index';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';

interface CarouselDotInterface {
  carouselWidth: number;
  index: number;
  extrapolate?: Animated.ExtrapolateType | undefined;
  animation: Animated.Value;
}

const CarouselDot = ({
  index,
  carouselWidth: width,
  animation,
  extrapolate,
}: CarouselDotInterface): React.JSX.Element => {
  const inputRange: number[] = [
    (index - 1) * width,
    index * width,
    (index + 1) * width,
  ];
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  const dotOpacity = animation.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
    extrapolate,
  });
  const dotWidth = animation.interpolate({
    inputRange,
    outputRange: [8, 24, 8],
    extrapolate,
  });
  return (
    <Animated.View
      testID={'carousel-dot'}
      style={{
        ...styles.carouselDot,
        backgroundColor: colors.neutral000,
        opacity: dotOpacity,
        width: dotWidth,
      }}
    />
  );
};

export default CarouselDot;
