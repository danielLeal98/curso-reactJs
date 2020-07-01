import React from "react";
import "./IndiretaFilho.css";

export default (props) => {
  const cb = props.clique;
  const idadeMin = 20;
  const idadeMax = 50;
  const gerarIdade = () => parseInt(Math.random() * (idadeMax - idadeMin));
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div className='IndiretaFilho'>
      <div>Filho</div>
      <button
        onClick={(_) => {
          cb("Daniel", gerarIdade(), gerarNerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
