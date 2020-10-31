import axios from 'axios';
import {BASE_URL} from "../utils/constants";
export const getPokemonList = async (key, url) => {
    const {data} = await axios.get(url);

    return data;
}
