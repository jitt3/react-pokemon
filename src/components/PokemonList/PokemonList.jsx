import { useEffect } from 'react';
import {usePaginatedQuery} from "react-query";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setPrevNext } from 'redux/features/pokemonPagerSlice';
import {Link} from 'react-router-dom';
import {getPokemonList} from "queries/getPokemonList";
import Loading from "../Loading";

import './PokemonList.scss';

const blockName = 'pokemon-list-container';

const PokemonList = () => {
    const dispatch  = useDispatch();
    const { previous, next, current } = useSelector(state => state.pokemonPager);
    const {isFetching, isLoading, resolvedData, isError} = usePaginatedQuery(['pokemonList', current],getPokemonList);

    const setCurrentPrevPage = () => {
        if(resolvedData.previous) {
            dispatch(setCurrentPage(resolvedData.previous));
        }
    }

    const setCurrentNextPage = () => {
        if(resolvedData.next) {
            dispatch(setCurrentPage(resolvedData.next));
        }
    }

    useEffect(() => {
        let isCurrent = true;
        if(!resolvedData) return;
        if(isCurrent ){
            dispatch(setPrevNext({previous: resolvedData?.previous, next: resolvedData?.next}));
        }

        return () => {
            isCurrent = false;
        }
    },[dispatch, resolvedData])

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
