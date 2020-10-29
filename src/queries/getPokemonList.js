import axios from 'axios';
import {BASE_URL} from "../utils/constants";
export const getPokemonList = async () => {
    const {data} = await axios.get(`${BASE_URL}/pokemon?limit=150`);

    return data;
}
