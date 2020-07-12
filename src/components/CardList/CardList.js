import React from 'react';
import './CardList.scss';
import Card from '../Card/Card';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;