//Test to check if the input component renders correctly
import React, {useState} from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Input from '@components/Input';
import EmailIcon from '@assets/icons/EmailIcon';


const TestInput = ({label, placeholder, keyboard = 'default'}: {label: string, placeholder: string, keyboard?:any}) => {
  const [value, setValue] = useState('');
  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      keyboard={keyboard}
      props={{}}
      Icon={EmailIcon}
      onChangeText={(text) => setValue(text)}
    />
  );
}

describe('Input', () => {
  it('renders correctly', () => {
    //create ref type TextInput
    const {getByPlaceholderText} = render(<TestInput label='Email' placeholder='Enter your email' />);
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });
  it('label renders correctly', () => {
    const {getByText} = render(<TestInput label='Email' placeholder='Enter your email'/>);
    expect(getByText('Email')).toBeTruthy();
  });
  it('label does not render if not passed', () => {
    const {queryByText} = render(<TestInput label='' placeholder='Enter your email'/>);
    expect(queryByText('Email')).toBeNull();
  });
  it('placeholder does not render if not passed', () => {
    const {queryByPlaceholderText} = render(<TestInput label='Email' placeholder='' />);
    expect(queryByPlaceholderText('Enter your email')).toBeNull();
  });
  it('icon renders correctly', () => {
    const {getByTestId} = render(<TestInput label='Email' placeholder='Enter your email'/>);
    expect(getByTestId('icon')).toBeTruthy();
  });
  it('change keyboard type', () => {
    const {getByPlaceholderText} = render(<TestInput label='Email' placeholder='Enter your email' keyboard="numeric"/>);
    expect(getByPlaceholderText('Enter your email').props.keyboardType).toBe(
      'numeric',
    );
  });
  it('user can type in the input', () => {
    const {getByPlaceholderText} = render(<TestInput label='Email' placeholder='Enter your email'/>);
    fireEvent.changeText(getByPlaceholderText('Enter your email'), 'hello');
    expect(getByPlaceholderText('Enter your email').props.value).toBe('hello');
  });
});
