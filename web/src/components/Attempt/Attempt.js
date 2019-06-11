import React from "react";
import styled from "styled-components";

const HighlightedSpan = styled.span`
  margin: 1px;
  background-color: ${props => (props.primary ? "blue" : "green")};
  color: white;
`;
HighlightedSpan.displayName = 'HighlightedSpan';

function highlightCharacters(text, chars) {
  return text.split("").map((item, index) => {
    if (chars.includes(item)) {
      return (
        <HighlightedSpan key={index}>
          <strong>{item}</strong>
        </HighlightedSpan>
      );
    } else return item;
  });
}

function correctAnswer(text) {
  return (
    <HighlightedSpan primary>
      <strong>{text}</strong>
    </HighlightedSpan>
  );
}

function Attempt({ text, highlightChars, correct }) {
  const Attempt = styled.div`
    letter-spacing: normal;
    margin: 10px;
    border-radius: 12px;
    border: 1px solid;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.7em;
    font-weight: bold;
  `;

  Attempt.displayName = 'Attempt';

  return correct ? (
    <Attempt>{correctAnswer(text)}</Attempt>
  ) : (
    <Attempt>{highlightCharacters(text, highlightChars)}</Attempt>
  );
}

export default Attempt;
