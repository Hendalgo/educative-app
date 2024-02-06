import React, { useRef } from "react";
import { Animated, View, useWindowDimensions } from "react-native";
import styles from "@styles/index";
import CarouselDot from "./CarouselDot";

interface CarouselProps {
  children: React.ReactNode;
  onCurrentPageChange?: (currentPage: number) => void;
  onScrollEnd?: (currentPage: number) => void;
}

const Carousel = (props: CarouselProps): React.JSX.Element => {
  const { children, onCurrentPageChange, onScrollEnd } = props;
  const dotsQuantity = React.Children.count(children);
  const { width } = useWindowDimensions();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const handleScroll = (event: any) => {
    if (onCurrentPageChange) {
      const position = event.nativeEvent.contentOffset.x / width;
      const currentPage = Math.round(position);
      onCurrentPageChange(currentPage);
    }
  };

  const handleScrollEnd = (event: any) => {
    if (onScrollEnd) {
      const position = event.nativeEvent.contentOffset.x / width;
      const currentPage = Math.round(position);
      onScrollEnd(currentPage);
    }
  };

  return (
    <View>
      <Animated.ScrollView
        horizontal={true}
        snapToInterval={width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
      >
        {React.Children.map(children, (child, index) => {
          console.log(child, index)
          return (
            child
          );
        })}
      </Animated.ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {Array.from({ length: dotsQuantity }, (_, i) => {
          return (
            <CarouselDot
              key={i}
              index={i}
              carouselWidth={width}
              animation={scrollX}
              extrapolate="clamp"
            />
          );
        })}
      </View>
    </View>
  );
}

export default Carousel;