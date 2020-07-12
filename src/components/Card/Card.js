import React from 'react';
import './Card.scss';

const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <h2 className='card-name'> {monster.name} </h2>
      <img
        className='monster-img'
        alt='monster'
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <p> {monster.username} </p>
      <p> {monster.email} </p>
      <p> {monster.website} </p>
      <span> {monster.id} </span>
    </div>
  );
};

export default Card;