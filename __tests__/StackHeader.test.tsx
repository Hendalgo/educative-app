// FILEPATH: /c:/Users/antho/OneDrive/Documents/dev/Mobile/ReactNative/projectx/__tests__/StackHeader.test.tsx

import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import StackHeader from '../src/components/StackHeader';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useTheme: jest.fn(),
}));

describe('StackHeader', () => {
  const mockGoBack = jest.fn();
  const mockNavigation = { goBack: mockGoBack, navigate: jest.fn(), };

  beforeEach(() => {
    jest.clearAllMocks();
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        neutral000: '#000',
        black: '#000',
      },
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(<StackHeader navigation={mockNavigation} route={{}} options={{}} back title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders back button when back prop is true', () => {
    const { getByTestId } = render(<StackHeader navigation={mockNavigation} route={{}} options={{}} back title="Test Title" />);
    const backButton = getByTestId('back-button');
    expect(backButton).toBeTruthy();
  });

  it('does not render back button when back prop is false', () => {
    const { queryByTestId } = render(<StackHeader navigation={mockNavigation} title="Test Title" route={undefined} options={undefined} back={undefined} />);
    const backButton = queryByTestId('back-button');
    expect(backButton).toBeNull();
  });

  it('calls navigation.goBack when back button is pressed', () => {
    const { getByTestId } = render(<StackHeader navigation={mockNavigation} back title="Test Title" route={undefined} options={undefined} />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });
});