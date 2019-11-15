import React from "react";
import { FieldContainer, Input } from "./_fieldStyles";

function TextField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="error">{props.error}</div>}
    </FieldContainer>
  );
}

export default TextField;
