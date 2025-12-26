import React from "react";
import { useEffect, useState } from "react";


export function DiarioInterativo() {

  const [texto, setTexto] = useState("");
  useEffect(()=>{
    const textoSalvo = localStorage.getItem("texto");
    if (textoSalvo) {
      setTexto(textoSalvo);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("texto", texto);
  }
  , [texto]);
 
  return (
    <div>
      <h1>Diário Interativo</h1>
      <textarea value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
        placeholder="Escreva suas anotações aqui..."
        rows={10}
      />
    </div>
  );
}