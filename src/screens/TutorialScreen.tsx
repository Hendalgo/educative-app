import React, { useContext, useEffect, useRef, useState } from "react";
import {BackHandler, SafeAreaView, View, useWindowDimensions} from "react-native";
import styles from "@styles/index";
import Carousel from "@components/Carousel";
import Button from "@components/Button";
import TutorialElement from "@components/TutorialElement";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { CustomColors } from "@styles/themes";
import StackHeader from "@components/StackHeader";
import { TutorialContext } from "@contexts/TutorialContext";

const TutorialScreen = (): React.JSX.Element => {
  //@ts-ignore
  const {colors}:{colors: CustomColors} = useTheme();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const {width} = useWindowDimensions();
  const [textButton, setTextButton] = useState<string>("Continuar");
  const [backButton, setBackButton] = useState<boolean>(false);
  //tutorial was watche? true was watched, false was not watched
  const watchedTutorial:any = useContext(TutorialContext);
  const carouselRef = useRef(null);
  const pageChange = (currentPage: number) => {
    currentPage === 0 ? setBackButton(false) : setBackButton(true);
    currentPage === 2 ? setTextButton("Empecemos!!!") : setTextButton("Continuar");
  }
  const handleEnd = (currentPage: number) => {
    console.log("End", currentPage);
  }
  const handleBack = () => {
    if(!isScrolling){ 
      setIsScrolling(true);
      //@ts-ignore
      carouselRef.current?.scrollToPrevious();
    }
  }
  const handleNext = () => {
    if(!isScrolling){
      setIsScrolling(true);
      //@ts-ignore
      carouselRef.current?.scrollToNext();
    }
  }
  useEffect(() => {
    const backAction =  BackHandler.addEventListener("hardwareBackPress", () => {
      if(backButton){
        if(!isScrolling) handleBack();
        return true;
      }
      return false;
    })

    return () => backAction.remove();
  }), [];
  return(
    <>
      <StackHeader
          back={backButton}
          navigation={{}}
          onPress={()=>{
            if(!isScrolling) handleBack();
          }}
          style={{
            marginTop: 30
          }}
        />
      <SafeAreaView
        style={{
          ...styles.tutorialScreenContainer,
          backgroundColor: colors.primary000,
        }}
      >
        <View></View>
        <Carousel
          width={width-40}
          onScrollEnd={handleEnd}
          onScrollAnimationEnd={() => setIsScrolling(false)}
          onCurrentPageChange={pageChange}
          ref={carouselRef}
        >
          <TutorialElement
            title="Aprende donde estes."
            description="Con esta aplicación seras capaz de complementar tus conocimientos sin importar el sitio en el que te encuentres."
            image={require('@assets/images/tutorial-1.png')}
          />
          <TutorialElement
            title="No pierdas apuntes."
            description="Haz anotaciones de las clases vistas y revísalas en el momento que desees sin el riesgo de que las pierdas."
            image={require('@assets/images/tutorial-2.png')}
          />
          <TutorialElement
            title="Sube en el ranking."
            description="Saca a flote tu competitividad y obten puntos de ranking por completar clases o hacer exámenes."
            image={require('@assets/images/tutorial-3.png')}
          />
        </Carousel>
        <View
          style={{
            flex: 0,
            justifyContent: "center",
          }}
        >
          <Button
              title={textButton}
              type="secondary"
              onPress={()=>{
                if(textButton === "Empecemos!!!"){
                  //ToDo: Save in AsyncStorage that the user has already seen the tutorial
                  watchedTutorial[1](true);
                } else {
                  if(!isScrolling) handleNext();
                }
              }}
            />
        </View>
      </SafeAreaView>
    </>
  );
}

export default TutorialScreen;