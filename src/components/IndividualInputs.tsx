import React from 'react';
import {View, TextInput, StyleProp} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from '@styles/index';
import {CustomColors} from '@styles/themes';

interface IndividualInputsProps {
  values: number[];
  setValues: (values: number[]) => void;
  elementsNum: number;
  onCompleted?: (completed: boolean) => void;
}

const IndividualInputs = ({
  values,
  setValues,
  elementsNum,
  onCompleted,
}: IndividualInputsProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  const inputRefs = React.useRef<any>([]);
  const [stylesInputs, setStylesInputs] = React.useState<Array<StyleProp<any>>>(
    Array.from({length: elementsNum}, () => ({
      backgroundColor: colors.neutral000,
      borderColor: colors.neutral300,
      color: colors.neutral600,
    })),
  );
  const handleChanges = (text: string, index: number) => {
    const newValues: any = [...values];
    if (text) {
      newValues[index] = parseInt(text, 10);
    } else {
      newValues.splice(index, 1);
    }
    setValues(newValues);
    if (text.length > 0) {
      setStylesInputs([
        ...stylesInputs.slice(0, index),
        {
          ...stylesInputs[index],
          borderColor: colors.primary000,
          color: colors.black,
        },
        ...stylesInputs.slice(index + 1),
      ]);
    } else {
      setStylesInputs([
        ...stylesInputs.slice(0, index),
        {
          ...stylesInputs[index],
          borderColor: colors.neutral300,
          color: colors.black,
        },
        ...stylesInputs.slice(index + 1),
      ]);
    }
    if (newValues.length === elementsNum && onCompleted) {
      onCompleted(true);
    } else {
      if (onCompleted) {
        onCompleted(false);
      }
    }
  };
  const handleFocus = (nativeEvent: any, index: number) => {
    //Move focus to the next or previous empty input
    //If it is, focus on it
    const indexTofocus =
      index === 0 ? index : index === values.length - 1 ? index : values.length;
    inputRefs.current[indexTofocus].focus();
  };
  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && values[index] === undefined) {
      if (index > 0) {
        // Cambiar el foco al input anterior
        inputRefs.current[index - 1].focus();

        // Eliminar el valor del input anterior
        const newValues = [...values];
        newValues.splice(index - 1, 1);
        setValues(newValues);

        // Establecer el estilo del input anterior como vacío
        setStylesInputs(prevStyles => [
          ...prevStyles.slice(0, index - 1),
          {
            ...prevStyles[index - 1],
            borderColor: colors.neutral300,
            color: colors.black,
          },
          ...prevStyles.slice(index),
        ]);
      }
    }
    //if fill the last input, move to the next input
    if (event.nativeEvent.key !== 'Backspace' && index < elementsNum - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <View
      style={[
        styles.individualInputsContainer,
        {
          backgroundColor: colors.neutral000,
        },
      ]}>
      {Array.from({length: elementsNum}, (_, i) => {
        return (
          <TextInput
            testID={`individualInput-${i}`}
            key={i}
            style={[
              styles.individualInput,
              {
                borderColor: stylesInputs[i]?.borderColor
                  ? stylesInputs[i].borderColor
                  : colors.neutral300,
                backgroundColor: stylesInputs[i]?.backgroundColor
                  ? stylesInputs[i].backgroundColor
                  : colors.card,
                color: stylesInputs[i]?.color
                  ? stylesInputs[i].color
                  : colors.neutral1500,
              },
            ]}
            placeholder={`${i + 1}`}
            placeholderTextColor={colors.neutral1500}
            keyboardType="numeric"
            maxLength={1}
            value={values[i] ? values[i].toString() : ''}
            onChangeText={(text: string) => handleChanges(text, i)}
            ref={ref => (inputRefs.current[i] = ref)}
            onFocus={({nativeEvent}) => handleFocus(nativeEvent, i)}
            onKeyPress={event => handleKeyPress(event, i)}
          />
        );
      })}
    </View>
  );
};

export default IndividualInputs;
