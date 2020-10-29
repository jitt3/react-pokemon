import {lazy} from 'react';

const PokemonList = lazy(() => import('components/PokemonList'));
const PokemonDetail = lazy(() => import('components/PokemonDetail'));

const appRoutes = {
    POKEMON_LIST: {
        name:'pokemonList',
        exact: true,
        path: '/',
        component: PokemonList,
    },
    POKEMON_DETAIL: {
        exact: false,
        name:'pokemonDetail',
        path: '/pokemon/:id',
        component: PokemonDetail,
    }
}


export default appRoutes;
