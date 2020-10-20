import React, { Component } from 'react';
import { fetchCharacters } from '../services/character-fetcher';


export default class Avatar extends Component {
  state = {
    characters: []
  }

  componentDidMount = async () => {
    const characterArray = await fetchCharacters();

    this.setState({ characters: characterArray });
  }

  render() {
    const characterLinks = this.state.characters.map(character => (
      <li key={character._id}>
        <a href={`/${character._id}`}>
          <h2>{character.name}</h2>
          <img src={character.photoUrl} width="200" height="200"></img>
        </a>
      </li>
    ));

    return (
      <>
        <ul>
          {characterLinks}
        </ul>
      </>
    );
  }
}
