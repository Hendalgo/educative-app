import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View, useWindowDimensions} from "react-native";
import styles from "@styles/index";
import Carousel from "@components/Carousel";

const TutorialScreen = (): React.JSX.Element => {
  const dots = useRef([]);
  const dotsQuantity = 2;
  const {width, height} = useWindowDimensions();
  return(
    <Carousel
    >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            height: 300,
            width: width
          }}
        >

        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            height: 300,
            width: width
          }}
        >

        </View>
    </Carousel>
  );
}

export default TutorialScreen;