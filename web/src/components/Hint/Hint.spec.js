import * as React from "react";
import { shallow, mount } from "enzyme";
import { render, fireEvent, act } from "@testing-library/react";
import Hint from "./Hint";

describe("Hint", () => {
  it("sets default hint state to blank", () => {
    act(() => {
      const { container } = render(<Hint/>);

      expect(container.firstChild.textContent).toEqual("");
    });
  });

  it("should print out hint when supplied", () => {
    act(() => {
      const { container } = render(<Hint defaultHint="ABCD1234" />);

      expect(container.firstChild.textContent).toEqual("ABCD1234");
    });
  });
});
