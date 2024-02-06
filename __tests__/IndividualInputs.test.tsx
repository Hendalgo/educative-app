import React from 'react';
import IndividualInputs from '@components/IndividualInputs';
import {fireEvent, render} from '@testing-library/react-native';
import {useState} from 'react';

const IndividualInputsTest = ({elementsNum = 4}: {elementsNum?: number}) => {
  const [values, setValues] = useState<number[]>([]);
  return (
    <IndividualInputs
      elementsNum={elementsNum}
      values={values}
      setValues={setValues}
    />
  );
};

describe('IndividualInputs', () => {
  it('renders correctly', () => {
    const tree = render(<IndividualInputsTest />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with 6 elements', () => {
    const tree = render(<IndividualInputsTest elementsNum={6} />);
    const inputs = tree.getAllByTestId(/individualInput-/);
    expect(inputs.length).toBe(6);
  });
  it('changes the values correctly', () => {
    const {getByTestId} = render(<IndividualInputsTest />);
    const input = getByTestId('individualInput-0');
    fireEvent.changeText(input, '1');
    expect(input.props.value).toBe('1');
  });
  it('completed the inputs correctly', () => {
    const {getByTestId} = render(<IndividualInputsTest />);
    const input = getByTestId('individualInput-0');
    fireEvent.changeText(input, '1');
    const input2 = getByTestId('individualInput-1');
    fireEvent.changeText(input2, '2');
    const input3 = getByTestId('individualInput-2');
    fireEvent.changeText(input3, '3');
    const input4 = getByTestId('individualInput-3');
    fireEvent.changeText(input4, '4');
    expect(input4.props.value).toBe('4');
  });
});
