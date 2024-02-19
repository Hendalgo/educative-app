import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, View} from 'react-native';
import styles from '@styles/index';
import {CustomColors} from '@styles/themes';
import {useTheme} from '@react-navigation/native';
import StatisticsInfo from './StatisticsInfo';
import {useTranslation} from 'react-i18next';

const ResumeBox = ({
  children,
  customStyles,
}: {
  children: ReactNode;
  customStyles?: StyleProp<any>;
}): React.JSX.Element => {
  const {t} = useTranslation();
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      testID="resume-box"
      style={[
        styles.containerWithShadow,
        {
          backgroundColor: colors.neutral000,
        },
        customStyles,
      ]}>
      {children}
      <Text
        style={[
          resumeBoxStyles.statisticsTitle,
          {
            color: colors.primary000,
          },
        ]}>
        {t('resumeBox.title')}
      </Text>
      <View style={resumeBoxStyles.StatisticsInfoContainer}>
        <StatisticsInfo
          title={t('resumeBox.first.title', {hours: 5})}
          subtitle={t('resumeBox.first.subtitle')}
          image={require('@assets/icons/time-icon.png')}
        />
        <StatisticsInfo
          title={t('resumeBox.second.title', {approved: 3})}
          subtitle={t('resumeBox.second.subtitle')}
          image={require('@assets/icons/lightning-circle-icon.png')}
        />
        <StatisticsInfo
          title={t('resumeBox.third.title', {points: 5})}
          subtitle={t('resumeBox.third.subtitle')}
          image={require('@assets/icons/chart-icon.png')}
        />
      </View>
    </View>
  );
};

export default ResumeBox;

const resumeBoxStyles = StyleSheet.create({
  statisticsTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  StatisticsInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
