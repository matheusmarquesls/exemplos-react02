import React from "react"; 
import { useEffect, useState } from 'react';

export function ExibirPersonagem() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setPersonagens(data.results);
        }
      })
      .catch((error) => console.error('Erro ao buscar personagens:', error));
  }, []);

  return (
    <div>
      <h1>Personagens de Rick and Morty</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {personagens.map((personagem) => (
          <div
            key={personagem.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '180px',
              textAlign: 'center',
              borderRadius: '10px',
            }}
          >
            <img
              src={personagem.image}
              alt={personagem.name}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p>{personagem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
