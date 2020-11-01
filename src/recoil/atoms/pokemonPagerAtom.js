import { atom } from 'recoil';
import { BASE_URL } from "../../utils/constants";

const initialValue = {
    current: `${BASE_URL}/pokemon??offset=0&limit=20`,
    next: '',
    previous: '',
};


export const pokemonPagerState = atom({
    'key': 'pokemonPager',
    default: initialValue
})
