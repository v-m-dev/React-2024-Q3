import { useState, useEffect } from 'react';
import './Main.css';
import getStarWarsCharacters from '../../api/starWars';
import Character from '../../types/Character';

function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getStarWarsCharacters();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="main">
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
