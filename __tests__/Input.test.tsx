//Test to check if the input component renders correctly
import React from 'react';
import { render } from '@testing-library/react-native';
import Input from '@components/Input';
import { TextInput } from 'react-native';

describe('Input', () => {
  const ref:React.RefObject<TextInput> = React.createRef();
  it('renders correctly', () => {
    //create ref type TextInput
    const { getByPlaceholderText } = 
    render(<Input label="Email" placeholder="Enter your email" ref={ref} />);
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });
  it('label renders correctly', () => {
    const { getByText } = render(<Input label="Email" ref={ref} />);
    expect(getByText('Email')).toBeTruthy();
  });
  it('label does not render if not passed', () => {
    const { queryByText } = render(<Input ref={ref}/>);
    expect(queryByText('Email')).toBeNull();
  });
  it('placeholder does not render if not passed', () => {
    const { queryByPlaceholderText } = render(<Input ref={ref} />);
    expect(queryByPlaceholderText('Enter your email')).toBeNull();
  });
  it('button renders without placeholder', () => {
    const { queryByPlaceholderText } = render(<Input label="Email" ref={ref} />);
    expect(queryByPlaceholderText('Enter your email')).toBeNull();
  });
  it('icon renders correctly', () => {
    const { getByTestId } = render(<Input label="Email" iconSrc="@assets/images/logo.png" ref={ref} />);
    expect(getByTestId('icon')).toBeTruthy();
  });
});
