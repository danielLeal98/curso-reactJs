import React from 'react';

export default function ComParametro(props) {
  return (
    <div>
      <h3><strong>{props.aluno}</strong> tem nota <strong>{props.nota}</strong> e está <strong>{props.titulo}</strong></h3>
    </div>
  );
}
