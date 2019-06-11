import * as React from "react";
import { shallow, mount } from "enzyme";

import Attempt from "./Attempt";

describe("Attempt", () => {
  it("when answer is correct it shows highlighted span", () => {
    const  wrapper  = shallow(<Attempt text="ABCD1234" correct={true}/>);
    
    expect(
        wrapper
          .find("HighlightedSpan")          
          .text()
      ).toEqual("ABCD1234");
  });

  it("when answer is wrong it highlights only right chars", () => {
    const  wrapper  = shallow(<Attempt text="ABCD1234" highlightChars={['A','B']} correct={false}/>);
    
    expect(
        wrapper
          .find("HighlightedSpan")
          .children().first()          
          .text()
      ).toEqual("A");


      expect(
        wrapper
          .find("HighlightedSpan")
          .children().length
      ).toEqual(2);
  });
});
