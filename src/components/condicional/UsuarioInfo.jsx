import React from "react";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <iF test={usuario && usuario.nome}></iF>
      Seja Bem vindo <strong>{props.usuario.nome}</strong>
    </div>
  );
};
