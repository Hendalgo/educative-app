import { useTheme } from "@react-navigation/native";
import { CustomColors } from "@styles/themes";
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface StatisticsInfoProps {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

const StatisticsInfo = ({title, subtitle, image}:StatisticsInfoProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}:{colors: CustomColors} = useTheme();
  return (
    <View
      style={styles.statisticsInfoContainer}
    >
      <Image
        testID="statistics-info-image"
        source={image}
        width={50}
        height={50}
      />
      <View>
        <Text
          testID="statistics-info-title"
          style={[styles.statisticsInfoTitle, {color: colors.primary000}]}
        >
          {title}
        </Text>
        <Text
          testID="statistics-info-subtitle"
          style={[styles.statisticsInfoSubtitle, {color: colors.neutral1200}]}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

export default StatisticsInfo;

const styles = StyleSheet.create({
  statisticsInfoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
  statisticsInfoTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  statisticsInfoSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  }
});