import React from "react";
import Button from "@components/Button";
import { fireEvent, render } from "@testing-library/react-native";

const ButtonTest = ({typeB = 'default', onPress= ()=>{}}: {typeB?:any, onPress?:()=>void}): React.JSX.Element => {
  return (
    <Button title="Test" type={typeB} onPress={onPress} />
  );
}

describe("Test Button Componet", () => {
  it("Should render the button component", () => {
    const wrapper = render(<ButtonTest />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render the button component with the title Test", () => {
    const wrapper = render(<ButtonTest />);
    expect(wrapper.getByText("Test")).toBeDefined();
  });
  it("render the button component with the type disable", () => {
    const wrapper = render(<ButtonTest typeB="disable" />);
    expect(wrapper.getByText("Test")).toBeDefined();
  });
  it("on press event should be called", () => {
    const handlePress = jest.fn();
    const {getByText} = render(<ButtonTest onPress={handlePress} />);
    fireEvent.press(getByText("Test"));
    expect(handlePress).toHaveBeenCalled();
  });
});