import {BASE_URL} from "../utils/constants";
export const getPokemonDetail = async (key, id) => {
    return await fetch(`${BASE_URL}/pokemon/${id}`)
        .then(res => res.json());
}
