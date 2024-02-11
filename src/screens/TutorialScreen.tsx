import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native';
import styles from '@styles/index';
import Carousel from '@components/Carousel';
import Button from '@components/Button';
import TutorialElement from '@components/TutorialElement';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import StackHeader from '@components/StackHeader';
import {TutorialContext} from '@contexts/TutorialContext';
import { useTranslation } from 'react-i18next';

const TutorialScreen = (): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const {width} = useWindowDimensions();
  const [textButton, setTextButton] = useState<string>('Continuar');
  const [backButton, setBackButton] = useState<boolean>(false);
  const {t} = useTranslation();
  //tutorial was watche? true was watched, false was not watched
  const watchedTutorial: any = useContext(TutorialContext);
  const carouselRef = useRef(null);
  const pageChange = (currentPage: number) => {
    currentPage === 0 ? setBackButton(false) : setBackButton(true);
    currentPage === 2
      ? setTextButton(t('tutorialButton.start'))
      : setTextButton(t('tutorialButton.continue'));
  };
  const handleBack = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      //@ts-ignore
      carouselRef.current?.scrollToPrevious();
    }
  };
  const handleNext = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      //@ts-ignore
      carouselRef.current?.scrollToNext();
    }
  };
  useEffect(() => {
    const backAction = BackHandler.addEventListener('hardwareBackPress', () => {
      if (backButton) {
        if (!isScrolling) {
          handleBack();
        }
        return true;
      }
      return false;
    });

    return () => backAction.remove();
  }),
    [];
  return (
    <>
      <StackHeader
        back={backButton}
        navigation={{}}
        onPress={() => {
          if (!isScrolling) {
            handleBack();
          }
        }}
        style={{
          marginTop: 30,
        }}
      />
      <SafeAreaView
        style={{
          ...styles.tutorialScreenContainer,
          backgroundColor: colors.primary000,
        }}>
        <View />
        <Carousel
          width={width - 40}
          onScrollAnimationEnd={() => setIsScrolling(false)}
          onCurrentPageChange={pageChange}
          ref={carouselRef}>
          <TutorialElement
            title={t('tutorial.first.title')}
            description={t('tutorial.first.description')}
            image={require('@assets/images/tutorial-1.png')}
          />
          <TutorialElement
            title={t('tutorial.second.title')}
            description={t('tutorial.second.description')}
            image={require('@assets/images/tutorial-2.png')}
          />
          <TutorialElement
            title={t('tutorial.third.title')}
            description={t('tutorial.third.description')}
            image={require('@assets/images/tutorial-3.png')}
          />
        </Carousel>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
          }}>
          <Button
            title={textButton}
            type="secondary"
            onPress={() => {
              if (textButton === t('tutorialButton.start')) {
                //ToDo: Save in AsyncStorage that the user has already seen the tutorial
                watchedTutorial[1](true);
              } else {
                if (!isScrolling) {
                  handleNext();
                }
              }
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TutorialScreen;
