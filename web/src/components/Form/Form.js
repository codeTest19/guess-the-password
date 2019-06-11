import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "@bootstrap-styled/v4";
import axios from "axios";
import Space from "../../common/Space";
import Button from "../../common/Button";
import styled from "styled-components";

import appConfig from "../../core/appConfig";

function Form({ hint, onValidationCompleted }) {
  const Input = styled.input`
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid;
    text-align: center;
    width: 100%;
  `;

  const inputRef = useRef();
  const [input, setInputState] = useState("");

  useEffect(() => {
    inputRef.current.focus(); 
  }, [input]);

  const handleSubmit = evt => {
    evt.preventDefault();
    async function validatePasssword() {
      const response = await axios.post(appConfig.endpoints.validatePassword, {
        hint: hint,
        answer: input
      });

      if (!response.data) return;

      
      onValidationCompleted(response.data);
      setInputState('');
    }

    validatePasssword();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col lg="4" md="4" xs="4" sm="4" />
          <Col lg="4" md="4" xs="4" sm="4">
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={event =>
                setInputState(event.target.value.toUpperCase())
              }
            />
          </Col>
          <Col lg="4" md="4" xs="4" sm="4" />
        </Row>
        <Space />
        <Row>
          <Col lg="4" md="4" xs="4" sm="4" />
          <Col lg="4" md="4" xs="4" sm="4" style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </Col>
          <Col lg="4" md="4" xs="4" sm="4" />
        </Row>
      </form>
    </React.Fragment>
  );
}

export default Form;
