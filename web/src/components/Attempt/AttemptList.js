import React from "react";
import styled from "styled-components";

import Attempt from "./Attempt";

function AttemptList({ attempts }) {

  const AttemptsWrapper = styled.div`
    overflow: auto;
    height: 160px;
  `;

  return (
    <React.Fragment>
      <AttemptsWrapper>
        {attempts
          ? attempts.map((attempt, index) => <Attempt key={index} correct={attempt.correct} highlightChars={attempt.highlight} text={attempt.answer} />)
          : ""}
      </AttemptsWrapper>
    </React.Fragment>
  );
}

export default AttemptList;
