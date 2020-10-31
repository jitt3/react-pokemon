import { combineReducers } from 'redux';
import pokemonPagerReducer from '../features/pokemonPagerSlice';
export default combineReducers({
    pokemonPager: pokemonPagerReducer,
});
