import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthContext} from '@contexts/AuthContext';
import {IAuthContext} from '@interfaces/Auth';
import CircleButton from '@components/CircleButton';
import styles from '@styles/index';
import {NavigationProp, useTheme} from '@react-navigation/native';
import ResumeBox from '@components/ResumeBox';
import ROUTES from '@constants/routes';
import { useTranslation } from 'react-i18next';

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}): React.JSX.Element => {
  const {authState}: IAuthContext = useContext(AuthContext);
  const {t} = useTranslation();
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.neutral000,
        ...homeScreenStyles.homeScreenContainer,
      }}>
      <ResumeBox>
        <View style={homeScreenStyles.welcomeBox}>
          <View>
            <Text style={[styles.subtitle]}>{t('welcome')}</Text>
            <Text
              style={[
                styles.title,
                {
                  color: colors.black,
                  fontSize: 20,
                },
              ]}>
              {`${authState.user?.firstname} ${authState.user?.lastname}`} 👋
            </Text>
          </View>
          <View>
            <CircleButton
              onPress={() => navigation.navigate(ROUTES.RANKING)}
              image={require('@assets/icons/trophy-icon.png')}
            />
          </View>
        </View>
      </ResumeBox>
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  welcomeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  homeScreenContainer: {
    flex: 1,
  },
});

export default HomeScreen;
