import { useEffect } from 'react';
import { usePaginatedQuery } from "react-query";
import { useRecoilState } from 'recoil';
import { getPokemonList } from "queries/getPokemonList";
import { Link } from 'react-router-dom';
import {pokemonPagerState} from "../../recoil/atoms/pokemonPagerAtom";
import Loading from "../Loading";
import './PokemonList.scss';

const blockName = 'pokemon-list-container';
const PokemonList = () => {
    const [pokemonPager,setPokemonPager] = useRecoilState(pokemonPagerState);
    const {previous, next, current} = pokemonPager;
    const {isFetching, isLoading, resolvedData, isError} = usePaginatedQuery(['pokemonList', current],getPokemonList);

    const setCurrentPrevPage = () => {
        if(resolvedData.previous) {
            setPokemonPager((pokemonPager) => ({...pokemonPager, current: resolvedData.previous}));
        }
    }

    const setCurrentNextPage = () => {
        if(resolvedData.next) {
            setPokemonPager((pokemonPager) => ({...pokemonPager, current: resolvedData.next}));
        }
    }

    useEffect(() => {
        let isCurrent = true;
        if(!resolvedData) return;
        if(isCurrent) {
            const {previous, next} = resolvedData;
            setPokemonPager((pokemonPager) => ({...pokemonPager, previous, next}));
        }

        return () => {
            isCurrent = false;
        }
    },[setPokemonPager, resolvedData])

    if(isError) {
        return <div>Error getting data...</div>
    }

    return (
        <div className={blockName}>
            <h1>Pokemon List</h1>
            {(isLoading || isFetching) ? (<Loading  message={'Loading List'}/>) :
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
