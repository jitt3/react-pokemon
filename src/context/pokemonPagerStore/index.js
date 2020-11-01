import makeStore from "../makeStore";
import {BASE_URL} from "../../utils/constants";

const initialState = {
    current: `${BASE_URL}/pokemon??offset=0&limit=20`,
    previous: null,
    next: null,
}

const listReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PREV_NEXT':
            return { ...state, ...action.payload  }
        case 'SET_CURRENT':
            return {...state, current: action.payload}

        default:
            return state;
    }
};

const [PokemonPagerProvider, usePokemonPager, usePokemonPagerDispatch] = makeStore('pokemonPager',listReducer, initialState);

export {PokemonPagerProvider, usePokemonPager, usePokemonPagerDispatch}
