import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default () => (
  <div className='App'>
    <h1>Fundamentos de React</h1>
    <div className='Cards'>
      <Card titulo='#01 - Primeiro Componente' color='#080'>
        <Primeiro></Primeiro>
      </Card>
      <Card titulo='#02 - Desafio Aleatório' color='#800080'>
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo='#03 - Situação do Aluno' color='#045'>
        <ComParametro titulo={"Aprovado"} aluno={"Daniel Leal"} nota={9.5} />
      </Card>
      <Card titulo='#04 - Componente com Filhos' color='#f15a23'>
        <Familia sobrenome='Leal'>
          <FamiliaMembro nome='Ester' />
          <FamiliaMembro nome='Jorceli' />
          <FamiliaMembro nome='Lorena' />
          <FamiliaMembro nome='Maiara' />
          <FamiliaMembro nome='Rita' />
        </Familia>
      </Card>
    </div>
  </div>
);
