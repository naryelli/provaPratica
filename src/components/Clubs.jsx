import React, { useEffect, useState } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        const data = await response.json();
        setClubs(Object.values(data));
      } catch (error) {
        console.error('Erro ao buscar os clubes:', error);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div>
      <h1 className='clube'>Clubes</h1>
      <div>
        {clubs.map(club => (
          <div key={club.id} className='card'>
            <img src={club.escudos['30x30']} alt={club.nome} />
            <div className='nomes'>
            <h2>{club.nome}</h2>
            <p>{club.apelido}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;