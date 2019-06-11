import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import appConfig from "../../core/appConfig";

function Hint({ onFetchCompleted ,defaultHint }) {
  const Hint = styled.div`
    border: 2px dashed;
    padding: 20px 10px;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.7em;
    font-weight: bold;
  `;
  Hint.displayName = 'Hint';

  const [uiState, setUIState] = useState({ loading: false });
  const [localState, setLocalState] = useState({ hint: defaultHint });

  useEffect(() => {
    async function fetchHint() {
      const response = await axios(appConfig.endpoints.newPassword);
      if (!response.data) return;

      setLocalState(response.data);
      setUIState({ loading: false });
      onFetchCompleted(response.data);
    }
    setUIState({ loading: true });
    fetchHint();
  }, [onFetchCompleted]);

  return (
    <React.Fragment>
      <Hint>{uiState.loading ? "Fetching" : localState.hint}</Hint>
    </React.Fragment>
  );
}

export default Hint;
