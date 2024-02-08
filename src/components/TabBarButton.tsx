import React, { useEffect } from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Animated, Pressable, Text, View } from "react-native";
import styles from "@styles/index";
import { CustomColors } from "@styles/themes";
import { useTheme } from "@react-navigation/native";

interface TabBarButtonProps extends BottomTabBarButtonProps {
  label: string;
}

const TabBarButton = (props:TabBarButtonProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}:{colors: CustomColors} = useTheme();
  const isSelected = props.accessibilityState?.selected;
  const width = isSelected ? 100 : 50;
  const label = props.label;
  const backgroudColor = new Animated.Value(0);

    useEffect(() => {
      Animated.timing(backgroudColor, {
        toValue: isSelected ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isSelected]);

  return (
    <Pressable
      onPress={props.onPress}
      style={{
        flex: 0,
        borderWidth: 0,
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Animated.View
        style={[
          styles.tabBarButton,
          {
            backgroundColor: backgroudColor.interpolate({
              inputRange: [0, 1],
              outputRange: [colors.primary1600, colors.primary1200],
            }),
            borderRadius: 10,
            width: width,
          },
        ]}
      >
        <View style={{...styles.tabBarButtonContainer}}>
          {props.children}
          {isSelected && <Text style= {{color: colors.primary000}}>{label}</Text>}
        </View>
      </Animated.View>
    </Pressable>
  );
}

export default TabBarButton;