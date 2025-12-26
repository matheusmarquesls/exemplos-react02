// console.log("Rendering Contador component");import React from "react";
import { useState } from "react";
export function Contador() {
  // const [desabilitado, setDesabilitado] = useState(false);
  const[contador, setContador] = useState(0);

  let mensagem = "Contador: " + contador;
  if (contador > 0 && contador <= 10) {
    mensagem = "Você está longe de chegar ao 30"; 
  }
  if (contador > 10 && contador < 20) {
    mensagem = "Está quase lá!"; 
  }
  if (contador >= 20 && contador < 30) {
    mensagem = "Falta pouco, você consegue!"; 
  }
  if (contador >= 30) {
    mensagem = "Você chegou em 30 cliques, parabéns!"; 
  }

  function incrementar() {
    setContador(contador + 1);
  }
  // const desabilitar = () => {
  //   setDesabilitado(!desabilitado);
  // };
  

  return (
    <>
    <div>
      <h1>Contador: </h1>
      <p>Mensagem: {mensagem} </p>
      <button onClick={incrementar}
        disabled={contador >= 30}> 
        <div>{contador}</div>
        Incrementar
      </button>
    </div>
    </>
  );
}
export default Contador;