import { Animated } from "react-native";

const useTranslateYAnimation = (height: number)=> {
  const translateY = new Animated.Value(500);
  const translateYAnimation = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 1],
  });

  return {
    translateY,
    animate: ()=>{
      Animated.timing(translateY, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };
}

export default useTranslateYAnimation;