import {render} from '@testing-library/react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import ResumeBox from '../src/components/ResumeBox';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useTheme: jest.fn(),
}));

describe('ResumeBox', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        neutral000: '#000',
      },
    });
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <ResumeBox>
        <Text>Test</Text>
      </ResumeBox>,
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyles = StyleSheet.create({
      custom: {
        backgroundColor: '#123456',
      },
    });

    const {getByTestId} = render(
      <ResumeBox customStyles={customStyles.custom}>test</ResumeBox>,
    );

    const box = getByTestId('resume-box');
    expect(StyleSheet.flatten(box.props.style)).toMatchObject({
      backgroundColor: '#123456',
    });
  });
});
