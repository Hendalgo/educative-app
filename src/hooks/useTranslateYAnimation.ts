import {Animated} from 'react-native';

const useTranslateYAnimation = (height: number) => {
  const translateY = new Animated.Value(height);
  return {
    translateY,
    animate: () => {
      Animated.timing(translateY, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    },
  };
};

export default useTranslateYAnimation;
