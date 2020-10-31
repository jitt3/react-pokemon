import { combineReducers } from 'redux';
import pokemonReducer from '../features/pokemonSlice';
export default combineReducers({
    pokemon: pokemonReducer,
});
