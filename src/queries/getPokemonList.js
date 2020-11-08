import axios from 'axios';
export const getPokemonList = async (key, url) => {
  const {data} = await axios.get(url);

  return data;
};
