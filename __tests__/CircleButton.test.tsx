import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import CircleButton from '../src/components/CircleButton';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useTheme: jest.fn(),
}));

describe('CircleButton', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary1600: '#000',
      },
    });
  });

  it('renders correctly', () => {
    const {getByTestId} = render(
      <CircleButton
        onPress={jest.fn()}
        image={require('@assets/icons/trophy-icon.png')}
      />,
    );
    expect(getByTestId('circle-button')).toBeTruthy();
  });

  it('responds to press events', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <CircleButton
        onPress={onPressMock}
        image={require('@assets/icons/trophy-icon.png')}
      />,
    );

    fireEvent.press(getByTestId('circle-button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
