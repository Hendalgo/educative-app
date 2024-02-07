import React from 'react';
import { render } from '@testing-library/react-native';
import { Animated } from 'react-native';
import CarouselDot from '@components/CarouselDot';

describe('CarouselDot', () => {
  it('renders correctly', () => {
    const animation = new Animated.Value(0);
    const { getByTestId } = render(<CarouselDot index={0} carouselWidth={100} animation={animation} extrapolate="clamp" />);
    const dot = getByTestId('carousel-dot');
    expect(dot).toBeTruthy();
  });

  it('calculates opacity correctly', () => {
    const animation = new Animated.Value(50);
    const { getByTestId } = render(<CarouselDot index={0} carouselWidth={100} animation={animation} extrapolate="clamp" />);
    const dot = getByTestId('carousel-dot');
    const expectedOpacity = 0.5 + (50 / 100) * 0.5;
    expect(dot.props.style.opacity).toBeCloseTo(expectedOpacity);
  });

  it('calculates width correctly', () => {
    const animation = new Animated.Value(50);
    const { getByTestId } = render(<CarouselDot index={0} carouselWidth={100} animation={animation} extrapolate="clamp" />);
    const dot = getByTestId('carousel-dot');
    const expectedWidth = 5 + (50 / 100) * 5;
    expect(dot.props.style.width).toBeCloseTo(expectedWidth);
  });
});