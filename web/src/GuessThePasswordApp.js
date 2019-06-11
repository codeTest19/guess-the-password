import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "@bootstrap-styled/v4";

import Form from "./components/Form/Form";
import Line from "./common/Line";
import Space from "./common/Space";
import Hint from "./components/Hint/Hint";
import AttemptList from "./components/Attempt/AttemptList";

function GuessThePasswordApp() {
  const [attemptsState, setAttemptsState] = useState([]);
  const [hintState, setHintState] = useState({});
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (formState.answer)
      setAttemptsState(attempts => attempts.concat(formState));   
  }, [formState]);

  return (
    <Container fluid="true">
      <Row>
        <Col lg="2" md="2" xs="2" sm="2" />
        <Col lg="8" md="8" xs="8" sm="8" style={{ textAlign: "center" }}>
          <h1>Guess The Password!</h1>
        </Col>
        <Col lg="2" md="2" xs="2" sm="2" />
      </Row>
      <Row>
        <Col lg="1" md="1" xs="1" sm="1" />
        <Col lg="10" md="10" xs="10" sm="10">
          <Line />
        </Col>
        <Col lg="1" md="1" xs="1" sm="11" />
      </Row>
      <Space />
      <Row>
        <Col lg="2" md="2" xs="2" sm="2" />
        <Col lg="8" md="8" xs="8" sm="8">
          <Hint onFetchCompleted={setHintState} />
        </Col>
        <Col lg="2" md="2" xs="2" sm="2" />
      </Row>
      <Space />
      <Row>
        <Col lg="4" md="4" xs="4" sm="4" />
        <Col lg="4" md="4" xs="4" sm="4">
          <AttemptList attempts={attemptsState} />
        </Col>
        <Col lg="4" md="4" xs="4" sm="4" />
      </Row>
      <Space />
      <Form hint={hintState.hint} onValidationCompleted={setFormState} />
    </Container>
  );
}

export default GuessThePasswordApp;
