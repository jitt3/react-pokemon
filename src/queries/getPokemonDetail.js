import axios from 'axios';
import {BASE_URL} from '../utils/constants';
export const getPokemonDetail = async (key, id) => {
  const {data} = await axios.get(`${BASE_URL}/pokemon/${id}`);

  return data;
};
