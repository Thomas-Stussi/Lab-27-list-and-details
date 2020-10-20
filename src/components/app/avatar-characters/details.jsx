import React, { Component, useParams } from 'react';
import { fetchDetails } from '../services/character-fetcher';

export default class Details extends Component {


  state = {
    character: {}
  }

  componentDidMount = async () => {
    const { match: { params } } = this.props;

    await fetchDetails(params._id)
      .then(character => this.setState({ character }));
  };

  render() {
    const { character } = this.state;
    console.log(this.state);

    return (
      <>
        <h2>{character.name}</h2>
        <img src={character.photoUrl} width="200" height="200"></img>
        <p>
          Allies: {character.allies} <br />
          Enemies: {character.enemies} <br />
          First Appearance: {character.first}
        </p>
      </>
    );
  }
}
