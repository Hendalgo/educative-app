import React from "react";
import renderer from "react-test-renderer";
import Login from "../app/src/pages/LoginPage";
import {expect, describe, it, beforeEach, jest} from "@jest/globals";


describe("Login", () => {
  beforeEach (() => {
    jest.useFakeTimers();
  });
  it("should render the login page", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});