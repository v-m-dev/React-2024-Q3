import { Component } from 'react';
import './Main.css';
import getStarWarsCharacters from '../../api/starWars';
import Character from '../../types/Character';

class Main extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    const data = await getStarWarsCharacters();
    const characters = data.results;

    this.setState({ characters });
  }
  render() {
    return (
      <main className="main">
        <ul>
          {this.state.characters.map((character: Character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Main;
