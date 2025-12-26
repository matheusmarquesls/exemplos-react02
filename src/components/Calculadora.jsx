import React from 'react'
import { useState } from 'react'
export function Calculadora() {

  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  const [operacao, setOperacao] = useState('SOMAR');
  const [resultado, setResultado] = useState('');

  function calcular() {
    
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let res = '';

    if (operacao === 'SOMAR') {
      res = `Resultado da soma: ${numero1 + numero2}`;
    }
     if (operacao === 'SUBTRAIR') {
      res = `Resultado da subtração: ${numero1 - numero2}`;
    }
     if (operacao === 'MULTIPLICAR') {
      res = `Resultado da multiplicação: ${numero1 * numero2}`;
    } 
    if (operacao === 'DIVIDIR') {
      res = `Resultado da divisão: ${numero1 / numero2}`;
    } 

    setResultado(res);
      
  }


  return (
    <div>
      <input onChange={(e) => setNumero1(e.target.value) }type="number" />
      <input onChange={(e) => setNumero2(e.target.value) }type="number" />
      <select onChange={(e) => setOperacao(e.target.value)}>
        <option value="MULTIPLICAR">MULTIPLICAR</option>
        <option value="SUBTRAIR">SUBTRAIR</option>
        <option value="DIVIDIR">DIVIDIR</option>
        <option value="SOMAR">SOMAR</option>
      </select>
      <button onClick={calcular}>Calcular</button>
      Resultado da operação: __<div>{resultado}</div>__
    </div>
  )
}
export default Calculadora

