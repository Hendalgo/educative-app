//Test to check if the input component renders correctly
import React from 'react';
import {render} from '@testing-library/react-native';
import Input from '@components/Input';
import {TextInput} from 'react-native';
import EmailIcon from '@assets/icons/EmailIcon';

describe('Input', () => {
  const ref: React.RefObject<TextInput> = React.createRef();
  it('renders correctly', () => {
    //create ref type TextInput
    const {getByPlaceholderText} = render(
      <Input
        label="Email"
        placeholder="Enter your email"
        innerRef={ref}
        props={{}}
      />,
    );
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });
  it('label renders correctly', () => {
    const {getByText} = render(
      <Input label="Email" innerRef={ref} props={{}} />,
    );
    expect(getByText('Email')).toBeTruthy();
  });
  it('label does not render if not passed', () => {
    const {queryByText} = render(<Input innerRef={ref} props={{}} />);
    expect(queryByText('Email')).toBeNull();
  });
  it('placeholder does not render if not passed', () => {
    const {queryByPlaceholderText} = render(
      <Input innerRef={ref} props={{}} />,
    );
    expect(queryByPlaceholderText('Enter your email')).toBeNull();
  });
  it('icon renders correctly', () => {
    const {getByTestId} = render(
      <Input
        label="Email"
        placeholder="Enter your email"
        Icon={EmailIcon}
        innerRef={ref}
        props={{}}
      />,
    );
    expect(getByTestId('icon')).toBeTruthy();
  });
  it('button renders without placeholder', () => {
    const {queryByPlaceholderText} = render(
      <Input label="Email" innerRef={ref} props={{}} />,
    );
    expect(queryByPlaceholderText('Enter your email')).toBeNull();
  });
  it('change keyboard type', () => {
    const {getByPlaceholderText} = render(
      <Input
        label="Email"
        placeholder="Enter your email"
        keyboard="numeric"
        innerRef={ref}
        props={{}}
      />,
    );
    expect(getByPlaceholderText('Enter your email').props.keyboardType).toBe(
      'numeric',
    );
  });
});
