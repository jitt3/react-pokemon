import React from 'react';
import {useQuery} from "react-query";
import {Link} from 'react-router-dom';
import {getPokemonList} from "../../queries/getPokemonList";
import './PokemonList.scss';
import Loading from "../Loading";
const blockName = 'pokemon-list-container';
const PokemonList = () => {

    const {isFetching, isLoading, data, isError} = useQuery('pokemonList',getPokemonList);

    if(isLoading || isFetching) {
        return <Loading  message={'Loading List...'}/>
    }
    if(isError) {
        return <div>Error getting data...</div>
    }
    return (
        <div className={blockName}>
            <h1>Pokemon List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.results.map(({name, url}) => {
                        const splitUrl = url.split('/');
                        const id = splitUrl[splitUrl.length - 2];
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>
                                    <Link to={`/pokemon/${name}`}>View detail</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default PokemonList;
