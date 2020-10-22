import styled from "styled-components";

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .label {
    font-weight: bold;
  }
  .error {
    color: #ff0000;
  }

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 5px 5px 4px 0;
  padding: 5px;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Select = styled.select`
  width: 100%;
  min-width: 190px;
  margin: 5px 5px 4px 0;
  padding: 5px;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 180px;
  box-sizing: border-box;
  padding: 5px;
  height: 75px;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Upload = styled.input`
  width: 100%;
  min-width: 180px;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Label = styled.label`
  margin-right: 20px;
`;
