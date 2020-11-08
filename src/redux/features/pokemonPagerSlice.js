import {createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '../../utils/constants';

const pokemonPagerSlice = createSlice({
  name: 'pokemon',
  initialState: {
    current: `${BASE_URL}/pokemon??offset=0&limit=20`,
    previous: null,
    next: null,
  },
  reducers: {
    setPrevNext(state, action) {
      const {previous, next} = action.payload;
      state.previous = previous;
      state.next = next;
    },
    setCurrentPage(state, action) {
      const {payload: current} = action;
      state.current = current;
    },
  },
});

export const {setPrevNext, setCurrentPage} = pokemonPagerSlice.actions;

export default pokemonPagerSlice.reducer;
