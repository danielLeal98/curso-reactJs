import React, { useState } from "react";
import "./Mega.css";

export default (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) - min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(2, 100, nums);
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  console.log(gerarNumeros(7));
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className='Mega'>
      <h2>Números do Sorteio</h2>
      <h3>
        <strong>{numeros.join(" ")}</strong>
      </h3>
      <div>
        <label>Qtde de Números</label>
        <input
          min='1'
          max='99'
          type='number'
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        ></input>
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
