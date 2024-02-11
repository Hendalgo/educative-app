import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import HomeIcon from '@assets/icons/HomeIcon';
import CoursesIcon from '@assets/icons/CourseIcon';
import QuizIcon from '@assets/icons/QuizIcon';
import UserIcon from '@assets/icons/UserIcon';
import styles from '@styles/index';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const TabBar = (props: BottomTabBarProps): React.JSX.Element => {
  const {state, descriptors, navigation} = props;
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  const [selectedTabDimensions, setSelectedTabDimensions] = useState({
    width: 0,
    height: 0,
  });
  const tabPositionAnimation = useSharedValue({x: 0, y: 0});

  const animateTabPosition = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(tabPositionAnimation.value.x)},
        {translateY: tabPositionAnimation.value.y},
      ],
    };
  });

  return (
    <Animated.View style={[styles.tabBar]}>
      <Animated.View
        style={[
          {
            backgroundColor: colors.primary1200,
            position: 'absolute',
            borderRadius: 10,
            width: selectedTabDimensions.width,
            height: selectedTabDimensions.height,
          },
          animateTabPosition,
        ]}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: any = options.tabBarLabel;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Pressable
            key={index}
            onPress={onPress}
            onLayout={event => {
              if (isFocused) {
                setSelectedTabDimensions(event.nativeEvent.layout);
                tabPositionAnimation.value = {
                  x: event.nativeEvent.layout.x,
                  y: event.nativeEvent.layout.y,
                };
              }
            }}
            style={[
              styles.tabBarButton,
              {
                backgroundColor: isFocused ? 'transparent' : colors.primary1600,
              },
            ]}>
            {
              //Get the icon here
              index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <CoursesIcon />
              ) : index === 2 ? (
                <QuizIcon />
              ) : index === 3 ? (
                <UserIcon />
              ) : null
            }
            <Text
              style={[
                styles.tabBarText,
                {
                  display: isFocused ? 'flex' : 'none',
                  color: colors.primary000,
                },
              ]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </Animated.View>
  );
};

export default TabBar;
