import React, { useState, useEffect } from 'react';
import './App.css'; // Arquivo CSS principal

function App() {
  const [clubes, setClubes] = useState([]); // Armazena os dados dos clubes

  useEffect(() => {
    // Busca os dados da API e atualiza o estado
    fetch('https://api.cartola.globo.com/clubes')
      .then((response) => response.json())
      .then((data) => setClubes(data.clubes));
  }, []);

  return (
    <div className="App">
      <Header /> // Componente para o cabeçalho
      <ListaClubes clubes={clubes} /> // Componente para a lista de clubes
    </div>
    
  );
}

export default App;