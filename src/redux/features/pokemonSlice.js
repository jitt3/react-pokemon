import {createSlice} from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name:'pokemon',
    initialState: [],
    reducers: {
        addPokemons(state, action) {
            state = [...state,...action.payload];
        }
    }
})

export const { addPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
