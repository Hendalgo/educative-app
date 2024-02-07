import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Carousel from '@components/Carousel';

describe('Carousel', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Carousel />);
    const carousel = getByTestId('carousel');
    expect(carousel).toBeTruthy();
  });

  it('calls onCurrentPageChange with the correct page when scrolled', () => {
    const handleCurrentPageChange = jest.fn();
    const { getByTestId } = render(<Carousel onCurrentPageChange={handleCurrentPageChange} />);
    const carousel = getByTestId('carousel');
    fireEvent.scroll(carousel, { nativeEvent: { contentOffset: { x: 100 } } });
    expect(handleCurrentPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onScrollEnd with the correct page when scroll ends', () => {
    const handleScrollEnd = jest.fn();
    const { getByTestId } = render(<Carousel onScrollEnd={handleScrollEnd} />);
    const carousel = getByTestId('carousel');
    fireEvent.scroll(carousel, { nativeEvent: { contentOffset: { x: 200 } } });
    expect(handleScrollEnd).toHaveBeenCalledWith(2);
  });
});