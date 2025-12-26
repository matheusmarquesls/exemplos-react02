import React from "react";
import { useState } from "react";

export function ListaTelefonica() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);
 
    const CadastrarContato = (e) => {
      e.preventDefault();
      if (nome && sobrenome && telefone) {
        setContatos([contatos, { nome, sobrenome, telefone }]);
        setNome("");
        setSobrenome("");
        setTelefone("");
      }
    };
  
    const ExcluirContato = (index) => {
      setContatos(contatos.filter((_, i) => i !== index));
    };

  return (
    <div>
      <h1>Lista Telefônica</h1>

      <form onSubmit={CadastrarContato}>
      <input type="text" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
      <input type="text" name="sobrenome" placeholder="Sobrenome"value={sobrenome}  onChange={(e) => setSobrenome(e.target.value)}/><br />
      <input type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/><br />
     
      <button type="submit">Cadastrar</button>
      </form>
      <ul>
      {contatos.map((contato, index) => (
          <li key={index}>
            Nome do contato: {contato.nome} <br /> Sobrenome do contato: {contato.sobrenome} <br />Telefone do contato: {contato.telefone}<br />
            <button onClick={() => ExcluirContato(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}