import React from "react";

export default (props) => {
  return (
    <div>
      <div>{props.nome}</div>
      <div>
        <strong>{props.idade}</strong>
      </div>
      <div>{props.nerd ? "Verdadeiro" : "False"}!</div>
    </div>
  );
};
