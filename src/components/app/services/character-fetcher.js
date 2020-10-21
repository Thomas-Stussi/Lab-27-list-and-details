const requestOptions = {
  method: 'GET',
  headers: {
    Host: 'last-airbender-api.herokuapp.com'
  }
};

export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=1000', requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const fetchDetails = (_id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};
