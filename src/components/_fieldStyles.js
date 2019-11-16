import styled from "styled-components";

export const FieldContainer = styled.div`
  margin-bottom: 10px;
  .label {
    font-weight: bold;
  }
  .error {
    color: #ff0000;
  }
`;

export const Input = styled.input`
  margin: 5px 5px 4px 0;
  padding: 5px;
`;

export const Select = styled.select`
  margin: 5px 5px 4px 0;
  padding: 5px;
  min-width: 190px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  min-width: 180px;
  height: 75px;
`;
