import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import TabBar from '../src/components/TabBar';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useTheme: jest.fn(),
}));

describe('TabBar', () => {
  const mockNavigate = jest.fn();
  const mockEmit = jest.fn();
  const mockProps: BottomTabBarProps = {
    state: {
      index: 0,
      routes: [
        { key: 'Home', name: 'Home' },
        { key: 'Courses', name: 'Courses' },
        { key: 'Quiz', name: 'Quiz' },
        { key: 'User', name: 'User' },
      ],
    },
    descriptors: {
      Home: { options: { tabBarLabel: 'Home' } },
      Courses: { options: { tabBarLabel: 'Courses' } },
      Quiz: { options: { tabBarLabel: 'Quiz' } },
      User: { options: { tabBarLabel: 'User' } },
    },
    navigation: {
      navigate: mockNavigate,
      emit: mockEmit,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary1200: '#000',
        primary1600: '#000',
        primary000: '#000',
      },
    });
  });

  it('renders correctly', () => {
    const {getByText} = render(<TabBar {...mockProps} />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Courses')).toBeTruthy();
    expect(getByText('Quiz')).toBeTruthy();
    expect(getByText('User')).toBeTruthy();
  });

  it('navigates to the correct route when a tab is pressed', () => {
    const {getByText} = render(<TabBar {...mockProps} />);
    fireEvent.press(getByText('Courses'));
    expect(mockNavigate).toHaveBeenCalledWith('Courses');
  });
});