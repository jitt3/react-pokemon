import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {getPokemonDetail} from '../../queries/getPokemonDetail';
import Loading from '../Loading';
import './PokemonDetail.scss';
const blockName = 'pokemon-detail-container';

const PokemonDetail = () => {
  const {pokemonName} = useParams();
  const [loadingImage, setLoadingImage] = useState(true);
  const {isFetching, isLoading, data, isError} = useQuery(
    ['pokemonDetail', pokemonName],
    getPokemonDetail,
  );
  if (isLoading || isFetching) {
    return <Loading message={'Loading pokemon data...'} />;
  }
  if (isError) {
    return <div>Error getting data...</div>;
  }
  const {
    name,
    height,
    weight,
    sprites: {
      other: {
        dream_world: {front_default},
      },
    },
    moves,
    abilities,
    types,
  } = data;
  return (
    <div className={blockName}>
      <div className={`${blockName}__main-info`}>
        {loadingImage ? <FontAwesomeIcon icon={faSpinner} spin /> : null}
        <img
          onLoad={() => {
            setLoadingImage(false);
          }}
          src={`${front_default}`}
          alt={'pokemon'}
        />
        <span>{name}</span>
        <div className={`${blockName}__weight-height`}>
          <span>Weight: {weight}</span>
          <span>Height: {height}</span>
        </div>
      </div>
      <div className={`${blockName}__extra-info`}>
        <div className={`${blockName}__skills-and-more`}>
          <h2>Movements</h2>
          <ul>
            {moves.map(({move}) => (
              <li key={move.name}>{move.name}</li>
            ))}
          </ul>
        </div>
        <div className={`${blockName}__skills-and-more`}>
          <h2>Types</h2>
          <ul>
            {types.map(({type}) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
        </div>
        <div className={`${blockName}__skills-and-more`}>
          <h2>Abilities</h2>
          <ul>
            {abilities.map(({ability}) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
