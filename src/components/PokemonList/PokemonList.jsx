import {useReducer, useEffect} from 'react';
import {usePaginatedQuery} from "react-query";
import {Link} from 'react-router-dom';
import {getPokemonList} from "queries/getPokemonList";
import Loading from "../Loading";
import {BASE_URL} from "../../utils/constants";

import './PokemonList.scss';

const blockName = 'pokemon-list-container';
const initialState = {
    current: `${BASE_URL}/pokemon??offset=0&limit=20`,
    previous: null,
    next: null,
}
function listReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_PREV_NEXT':
            return { ...state, ...action.payload  }
        case 'SET_CURRENT':
            return {...state, current: action.payload}

        default:
            return state;
    }
}

const PokemonList = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const {previous, next, current} = state;
    const {isFetching, isLoading, resolvedData, isError} = usePaginatedQuery(['pokemonList', current],getPokemonList);

    const setCurrentPrevPage = () => {
        if(resolvedData.previous) {
            dispatch({type:'SET_CURRENT', payload : resolvedData.previous })
        }
    }

    const setCurrentNextPage = () => {
        if(resolvedData.next) {
            dispatch({type:'SET_CURRENT', payload : resolvedData.next})
        }
    }

    useEffect(() => {
        dispatch({type: 'SET_PREV_NEXT',payload: {previous: resolvedData?.previous, next: resolvedData?.next}})
    },[resolvedData])

    if(isError) {
        return <div>Error getting data...</div>
    }

    return (
        <div className={blockName}>
            <h1>Pokemon List</h1>
            {(isLoading || isFetching) ? (<Loading  message={'Loading List...'}/>) :
                (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            resolvedData.results.map(({name}) => (
                                <tr key={name}>
                                    <td>{name}</td>
                                    <td>
                                        <Link to={`/pokemon/${name}`}>View detail</Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )}
            <div className={`${blockName}__footer`}>
                <button onClick={setCurrentPrevPage} disabled={!previous}>Previous</button>
                <button onClick={setCurrentNextPage} disabled={!next}>Next</button>
            </div>
        </div>
    );
};

export default PokemonList;
