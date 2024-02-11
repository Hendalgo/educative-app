import React from 'react';
import {Animated, View} from 'react-native';
import styles from '@styles/index';
import CarouselDot from './CarouselDot';
import {ScrollView} from 'react-native-gesture-handler';

interface CarouselProps {
  children?: React.ReactNode;
  onCurrentPageChange?: (currentPage: number) => void;
  onScrollEnd?: (currentPage: number) => void;
  width?: number;
  onScrollFirst?: (currentPage: number) => void;
  onScrollAnimationEnd?: (currentPage: number) => void;
}

const Carousel = React.forwardRef(
  (props: CarouselProps, ref: React.Ref<any>): React.JSX.Element => {
    const {children, onCurrentPageChange, width} = props;
    const dotsQuantity = React.Children.count(children);
    if (!width) {
      throw new Error(
        'You must provide a width prop to the Carousel component',
      );
    }
    const scrollX: Animated.Value = React.useRef(new Animated.Value(0)).current;
    const scrollViewRef = React.useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
      const position = event.nativeEvent.contentOffset.x / width;

      const currentPage = Math.round(position);

      if (onCurrentPageChange) {
        onCurrentPageChange(currentPage);
      }
      //On scroll end
      if (
        Math.abs(event.nativeEvent.contentOffset.x - width * currentPage) <
        0.0001
      ) {
        if (props.onScrollAnimationEnd) {
          props.onScrollAnimationEnd(currentPage);
        }
      }
    };

    /*
  //This is to get the last page of the carousel and do something
  const handleScrollEnd = (event: any) => {
    console.log("handleScrollEnd")
    const position = event.nativeEvent.contentOffset.x / width;
    const currentPage = Math.round(position);
    if (onScrollEnd) {
      if (currentPage === dotsQuantity - 1) {
        onScrollEnd(currentPage);
      }
    }
    if (onScrollFirst) {
      if (currentPage === 0) {
        onScrollFirst(currentPage);
      }
    }
  }; */
    const scrollToNext = () => {
      //@ts-ignore
      scrollViewRef.current?.scrollTo({
        x: scrollX._value + width,
        animated: true,
      });
    };

    const scrollToPrevious = () => {
      //@ts-ignore
      scrollViewRef.current?.scrollTo({
        x: scrollX._value - width,
        animated: true,
      });
    };
    React.useImperativeHandle(ref, () => ({
      scrollToNext,
      scrollToPrevious,
    }));
    return (
      <View
        style={{
          flex: 0,
        }}>
        <View>
          <Animated.ScrollView
            testID="carousel"
            ref={scrollViewRef ? scrollViewRef : null}
            horizontal={true}
            style={{
              flex: 0,
            }}
            contentContainerStyle={{
              width: width * dotsQuantity,
              ...styles.carouselContentContainer,
            }}
            scrollEnabled={false}
            overScrollMode="never"
            pagingEnabled={true}
            snapToInterval={width}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false, listener: handleScroll},
            )}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="fast">
            {React.Children.map(children, (child, index) => {
              return (
                <View key={index} style={{width: width}}>
                  {child}
                </View>
              );
            })}
          </Animated.ScrollView>
        </View>
        <View
          style={{
            ...styles.carouselDotContainer,
          }}>
          {Array.from({length: dotsQuantity}, (_, i) => {
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
  },
);

export default Carousel;
