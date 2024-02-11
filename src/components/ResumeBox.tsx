import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View } from "react-native";
import styles from "@styles/index";
import { CustomColors } from "@styles/themes";
import { useTheme } from "@react-navigation/native";
import StatisticsInfo from "./StatisticsInfo";

const ResumeBox = ({children, customStyles}:{children: ReactNode, customStyles?:StyleProp<any>}):React.JSX.Element => {
  //@ts-ignore
  const {colors}:{colors: CustomColors} = useTheme();
  return (
    <View
      testID="resume-box"
      style={[
        styles.containerWithShadow,
        {  
          backgroundColor: colors.neutral000,
        },
        customStyles
      ]}
    >
      {children}
      <Text
        style={
          [
            resumeBoxStyles.statisticsTitle,
            {
              color: colors.primary000,
            }
          ]
        }
      >
        Tus Estadísticas semanales
      </Text>
      <View
        style={resumeBoxStyles.StatisticsInfoContainer}
      >
        <StatisticsInfo
          title="4 Horas"
          subtitle="de estudio"
          image={require('@assets/icons/time-icon.png')}
        />
        <StatisticsInfo
          title="3 Quizzes"
          subtitle="aprobados"
          image={require('@assets/icons/lightning-circle-icon.png')}
        />
        <StatisticsInfo
          title="480 puntos"
          subtitle="de Ranking"
          image={require('@assets/icons/chart-icon.png')}
        />
      </View>
    </View>
  );
}

export default ResumeBox;

const resumeBoxStyles = StyleSheet.create({
  statisticsTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  StatisticsInfoContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  }
});