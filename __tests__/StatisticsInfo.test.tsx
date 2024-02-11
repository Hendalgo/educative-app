// FILEPATH: /c:/Users/antho/OneDrive/Documents/dev/Mobile/ReactNative/educative-app/__tests__/StatisticsInfo.test.tsx

import {render} from '@testing-library/react-native';
import React from 'react';
import StatisticsInfo from '../src/components/StatisticsInfo';
import {StyleSheet} from 'react-native';

describe('StatisticsInfo', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <StatisticsInfo
        title="Test Title"
        subtitle="Test Subtitle"
        image={require('@assets/icons/chart-icon.png')}
      />,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('applies styles correctly', () => {
    const {getByTestId} = render(
      <StatisticsInfo
        title="Test Title"
        subtitle="Test Subtitle"
        image={require('@assets/icons/chart-icon.png')}
      />,
    );

    const title = getByTestId('statistics-info-title');
    const subtitle = getByTestId('statistics-info-subtitle');

    expect(StyleSheet.flatten(title.props.style)).toMatchObject({
      fontSize: 14,
      fontFamily: 'Poppins-SemiBold',
    });

    expect(StyleSheet.flatten(subtitle.props.style)).toMatchObject({
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
    });
  });
  it('image is rendered correctly', () => {
    const {getByTestId} = render(
      <StatisticsInfo
        title="Test Title"
        subtitle="Test Subtitle"
        image={require('@assets/icons/chart-icon.png')}
      />,
    );
    const image = getByTestId('statistics-info-image');
    expect(image).toBeTruthy();
  });
});
